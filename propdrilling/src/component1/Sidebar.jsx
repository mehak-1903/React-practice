import React from 'react';
import ProfileCard from './ProfileCard';

function Sidebar({theme, onToggle}) {
  return (
    <div style={{border: '2px solid blue', padding: 20, marginTop: 20}}>
        <h1>Sidebar</h1>
        <ProfileCard theme={theme} onToggle={onToggle}/>

    </div>
  )
}

export default Sidebar