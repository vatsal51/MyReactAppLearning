import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:"goodbye"
    //     })
    //     console.log(this)
    // }
    clickHandler = ()=>{
        this.setState({
            message:"Good Bye"
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
               {/* <button onClick={this.clickHandler.bind(this)}>Event Bind Click</button> */}
            {/* <button onClick={()=>this.clickHandler()}>Event Binder 2nd method</button> */}
            <button onClick={this.clickHandler}>3rd method event binder</button>
            </div>
        )
    }
}

export default EventBind
