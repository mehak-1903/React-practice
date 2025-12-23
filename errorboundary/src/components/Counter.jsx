import React from 'react'

const Counter = React.memo(({ count })=> {
    console.log("Counter rendered...");
    return <h3>Count: {count}</h3>
}) 

export default Counter