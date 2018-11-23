import React from "react";

import { Card } from "antd";

class B extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
    console.log(`constructor ---- ${this.props.value}`);
    
  }

  number = 0;

  UNSAFE_componentWillMount = ()=>{
    console.log(`componentWillMount ---- ${this.props.value}`);
  }

  componentDidMount = ()=>{
    console.log(`componentDidMount ---- ${this.props.value}`);

  }
  
  //接收一个参数 新的props
  UNSAFE_componentWillReceiveProps = (newProps) =>{
    console.log(`${newProps.value}新的props`,`--------`,`${this.props.value}老props`)
    
    if (newProps.value === this.props.value) {
      console.log('Component componentWillReceiveProps 接收到新的props!  但是对比之后发现相同')
    }else{  
      console.log('Component componentWillReceiveProps 接收到新的props!')
    }

  }
  
  shouldComponentUpdate = (newProps) =>{
    console.log(`${newProps.value}新的props`)
    if (newProps.value === this.props.value) {
      console.log('Component shouldComponentUpdate 接收到新的props! 但是对比之后发现相同 暂停生命周期函数执行')
      return false;
    }else{
      console.log('Component shouldComponentUpdate 接收到新的props! 对比之后发现不相同 接下来走 componentWillUpdate')
      return true
    }
  }

  UNSAFE_componentWillUpdate = (nextProps, nextState)=> {
    console.log(`${nextProps.value}新的props`,`--------`,`${this.props.value}老props`)
    console.log('Component componentWillUpdate 更新组件前!');
  }

  componentDidUpdate = (prevProps, prevState)=> {
    console.log(`${prevProps.value}老的props`,`--------`,`${this.props.value} 新props,是componentWillUpdate 执行之后 render改变了props的值`)

    console.log('Component componentDidUpdate 更新组件后!')
  }


  componentWillUnmount = ()=>{
    console.log('Component 组件卸载!')
  }

  render(){
    console.log(this.props,`render 执行了`);
    
    let { number} = this;
    let { value} = this.props;
    return(
      <div>
        <Card title="组件传值--生命周期测试" style={{marginTop:'20px'}}>
            {number + value}
        </Card>
      </div>
    )
  }
  
}

export default B;