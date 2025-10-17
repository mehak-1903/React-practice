// Without memo
import { useState } from "react";

function heavyCalculation(num){
        console.log("Running heavy calculation...");
        let result = 0;
        for(let i= 0; i < 100000000000; i++){
            result += num;
        }
        return result;
    }

export default function MemorizationHook(){
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("light");

    const result = heavyCalculation(count);
    return(
        <>
        <h2>Without memo</h2>
        <h3>Count: {count}</h3>
        <p>Result: {result}</p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <button onClick={() => setTheme(theme === 'light' ? "dark" : "light")}>Theme</button>
        </>
    )
}