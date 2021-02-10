import React from "react"


// function Greet(){
//     return <h2>Hello Vatsal</h2>
// }

const Greet = (props) => {
    console.log(props)
return <h1>Hello {props.name} Using arrow function</h1>
}
export default Greet
