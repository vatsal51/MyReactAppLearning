import React from 'react'

function MemoComp({name}) {
    console.log("render memo component")
    return (
        <div>
          {name}  
        </div>
    )
}

export default React.memo(MemoComp)
