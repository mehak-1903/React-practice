import React, {useState} from 'react'
import Dashboard from './Dashboard';

function Result() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
    setTheme( theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div>
        <h1>Prop Drilling</h1>
        <Dashboard theme={theme} onToggle={toggleTheme}/>
    </div>
  )
}

export default Result