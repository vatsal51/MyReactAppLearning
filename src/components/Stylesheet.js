import React from 'react'
import "./myStyles.css"
function Stylesheet(props) {
    let className = props.primary ? "primary" : ""
    return (
        <div>
           <h2 className={className}>Hello Stylesheet</h2> 
           <h2 className="primary">Hello Stylesheet</h2> 

        </div> 
    )
}

export default Stylesheet
