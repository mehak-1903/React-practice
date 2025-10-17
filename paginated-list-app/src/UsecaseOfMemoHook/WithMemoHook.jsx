import { useMemo, useState } from "react";

function heavyCalculation(num){
    console.log("Running calculation....");
    let result = 0;
    for (let i = 0; i < 100000000; i++){
        result += num;
    }
    return result;
}

export default function WithMemoHook(){
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("light");

    const memorizedResult = useMemo(() => heavyCalculation(count), [count])

    return (
        <>
        <h2>Count: {count}</h2>
        <p>Result: {memorizedResult}</p>
        <button onClick={() => setCount(count + 1)}>Increase button</button>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
        </>
    )
}