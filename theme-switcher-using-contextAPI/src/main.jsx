import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  // Step3: Wrap your App
  <ThemeProvider>
    <App/>
  </ThemeProvider>
)
