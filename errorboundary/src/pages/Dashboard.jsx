import { Suspense, useState } from 'react';
import Counter from '../components/Counter';

const HeavyCalculation = lazy(() => import('../components/HeavyChart'));

function Dashboard() {
    const [count, setCount] = useState(0);

    const doubleValue = useMemo(() => {
        console.log("Expensive Calculation...");
        return count * 2;
    }, [count])
    return (
        <>
            <h2>Dashboard</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <Counter count={count} />
            <p>Doubled Value: {doubleValue}</p>
            <Suspense fallback={<p>Loadinnggg.....</p>}>
                <HeavyCalculation />
            </Suspense>
        </>
    )
}

export default Dashboard