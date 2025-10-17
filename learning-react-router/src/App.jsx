import './App.css'
import LazyLoad from './routes/LazyLoad.jsx';
import ReactRouter from './routes/ReactRouter.jsx';

function App() {
  return (
    <>
      <ReactRouter />
      <LazyLoad />
    </>
  )
}

export default App;