import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ToggleExample from './components/ToggleExample'
import Users from './components/Users'
import { Suspense, lazy } from 'react'

const LazyComponent = lazy(() => import('./lazyloadingcomponent/LazyComponent'))

function App() {
  return (
    <>
      <Counter />
      <ToggleExample />
      <Users />
      <Suspense fallback={<h3>Loading...</h3>}><LazyComponent /></Suspense>
    </>
  )
}

export default App
