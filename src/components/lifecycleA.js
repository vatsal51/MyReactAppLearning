import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class lifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'vatsal' 
        }
        console.log('lifecycleA constructor')

    }
    changeState=()=> {
        this.setState({
            name:'vatsal-2'
        })
    }
    
    static getDerivedStateFromProps(props,state){
        console.log(('lifecycleA getDerivedStateFromProps'))
        return null
    }

    componentDidMount(){
        console.log('component did mount A')
    }

    shouldComponentUpdate(){
        console.log("lifecycleA shouldComponentUpdate")
        return true
    
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("lifecycleA getsnapshotbeforeupdate")
    return null
    }

    componentDidUpdate(){
        console.log("lifecycleA component did update")
    }
    render() {
        console.log('lifecycleA render')
        return (<div> 
            <div>
            LifecycleA   
            </div>
            <button onClick={this.changeState}> Change State</button>
            <LifecycleB />
                      </div>
        )
    }
}

export default lifecycleA
