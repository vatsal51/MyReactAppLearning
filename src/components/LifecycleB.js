import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'vatsal' 
        }
        console.log('LifecycleB constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log(('LifecycleB getDerivedStateFromProps'))
        return null
    }

    componentDidMount(){
        console.log('component did mount B')
    }

    shouldComponentUpdate(){
        console.log("lifecycleB shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("lifecycleB getsnapshotbeforeupdate")
    return null
    }

    componentDidUpdate(){
        console.log("lifecycleB component did update")
    }
       render() {
        console.log('LifecycleB render')
        return (
            <div>
               LifecycleB 
            </div>
        )
    }
}

export default LifecycleB
