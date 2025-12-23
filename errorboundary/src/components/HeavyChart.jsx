import React from 'react'

function HeavyChart() {
    let sum = 0;
    for(let i = 0; i < 1000000; i++){
        sum += i;
    }
  return <h3>Heavy Chart Loaded.</h3>
}

export default HeavyChart