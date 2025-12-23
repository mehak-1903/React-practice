import useCounter from '../custom-hooks/useCounter'
import ErrorBoundary from '../custom-hooks/ErrorBoundary';
import BuggyComponent from '../custom-hooks/BuggyComponent';

export default function Counter() {
    const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <ErrorBoundary><BuggyComponent count={count}/></ErrorBoundary>
    </div>
  )
}
