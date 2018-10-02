import React from 'react'

import { Button, message } from 'antd'

class info extends React.Component {

    showMessage = ()=>{
        message.info("info");
    }

    render(){
        return (
            <div>
              <Button type="dashed" onClick={this.showMessage}>info</Button>
            </div>
        );
    }
}

export default info