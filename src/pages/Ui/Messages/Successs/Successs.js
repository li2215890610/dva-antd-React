import React from 'react'

import { Button, message } from 'antd'

class Successs extends React.Component {

    showMessage = ()=>{
        message.success("Success");
    }

    render(){
        return (
            <div>
              <Button  onClick={this.showMessage}>Success</Button>
            </div>
        );
    }
}

export default Successs