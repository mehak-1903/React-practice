import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Home() {
    // Step4: using Context
    const {theme} = useContext(ThemeContext);
  return (
    <div className={theme === 'dark' ? 'dark-page' : 'light-page'}>
        <h1>Welcome Mehak!!!(Home)</h1>
        <p>This page supports dark & light theme.</p>
    </div>
  )
}

export default Home