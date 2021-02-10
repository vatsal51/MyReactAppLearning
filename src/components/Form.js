import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        {

            this.state = {
                username: " ",
                comments: " ",
                topic: "react"
            }
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
            
        })
        
    }
    textChange = (event) => {
        this.setState({
            comments:event.target.value
        })
    }
    topicChange =(event) => {
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = (event) =>{
        
        alert(`${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments}
                    onChange={this.textChange}
                    > </textarea>
</div>
<div>
                    <label>Topics</label>
                    <select value={this.state.topic} onChange={this.topicChange}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                    
                </div>
                    <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Form
