import React, { Component } from 'react';

class Message extends Component {
constructor(){
    super()
    this.state = {
        message:"Welcome Visitor using state"
    }
}

changeMessage(){
    console.log("clicked")
    this.setState({
        message:"Thank you for subscribing"
    })
}

    render() {
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=> this.changeMessage()} >Subsribe</button>
            </div>
        )
    }

}

export default Message