import React, { Component } from 'react'

class ClassClick extends Component {
    clicchandler(){
        console.log("class btn clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.clicchandler}>Click Class</button>
            </div>
        )
    }
}

export default ClassClick
