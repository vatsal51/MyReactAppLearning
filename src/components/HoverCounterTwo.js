import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
 
    render() {
        const { count, incrementCount } = this.props
        return (
           <h2 style={{display: "inline-block"}} onMouseOver={incrementCount}> Hovered {count} times</h2>
        )
    }
}

export default HoverCounterTwo
