import React from 'react'

import { Button, message } from 'antd'

class Warnings extends React.Component {

    showMessage = ()=>{
        message.warning("Warnings");
    }

    render(){
        return (
            <div>
              <Button type="primary" onClick={this.showMessage}>Warnings</Button>
            </div>
        );
    }
}

export default Warnings