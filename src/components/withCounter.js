import React from 'react'

const withCounter = (WrappedComponent,increnmentNumber) => {
class WithCounter extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
incrementCount = () => {
    this.setState( prevState => {
        return{
            count:prevState.count + increnmentNumber
        }
    })
}

     render(){
         return <WrappedComponent 
         count={this.state.count} 
         incrementCount={this.incrementCount}
         {...this.props}        //  pass down props via app.js to HOC
         />
     }
 }
 return WithCounter
}

export default withCounter