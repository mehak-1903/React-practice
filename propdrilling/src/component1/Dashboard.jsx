import React from 'react'
import Sidebar from './Sidebar'

function Dashboard({ theme, onToggle }) {
  return (
    <div style={{border: '2px solid gray', padding: 20}}>
        <h1>Dashboard</h1>
        <Sidebar theme={theme} onToggle={onToggle}/>
    </div>
  )
}

export default Dashboard