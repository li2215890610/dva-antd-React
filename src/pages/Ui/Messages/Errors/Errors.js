import React from 'react'

import { Button, message } from 'antd'

class Errors extends React.Component {

    showMessage = ()=>{
        message.error("error");
    }

    render(){
        return (
            <div>
              <Button type="danger" onClick={this.showMessage}>error</Button>
            </div>
        );
    }
}

export default Errors