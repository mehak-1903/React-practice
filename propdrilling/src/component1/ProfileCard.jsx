import React from 'react'

function ProfileCard({theme, onToggle}) {
  return (
    <div style={{background: theme === 'light' ? '#fff': '#333', color: theme === 'light' ? '#333' : '#fff'}}>
        <h1>ProfileCard</h1>
        <p>Current Theme : {theme}</p>
        <button onClick={onToggle}>Toggle Me</button>
    </div>
  )
}

export default ProfileCard