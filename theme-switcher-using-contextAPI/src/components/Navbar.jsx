import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Navbar() {
    // Step4: using context.
    const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <nav className={theme === 'dark' ? 'nav-light' : 'nav-dark'}>
        <h2>My App(Navbar)</h2>
        <button onClick={toggleTheme}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
    </nav>
  )
}

export default Navbar