import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react"

export default function UseStateHook() {
    const [count, setCount] = useState(0);
    // const [name, setName] = useState('');
    // const [names, setNames] = useState([]);
    // const [message, setMessage] = useState('');

    // UseEffect
    // useEffect(() => {
    //     if (names.length > 1) {

    //         setMessage(`Last name Added: ${names[names.length - 1]}`);

    //         const timer = setTimeout(() => setMessage(''), 2000);
    //         return () => clearInterval(timer);
    //     }
    // }, [names])


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (name.trim() !== '') {
    //         setNames([...names, name]);
    //         setName('');
    //     }
    // }

    // useRef

    // const inputRef = useRef(null);

    // const handleFocus = () => {
    //     return inputRef.current.focus();
    // }

    // UseMemo hook
    // const [counter, setCounter] = useState(0);
    // const [number, setNumber] = useState(1);

    // const factorial = useMemo(() => {
    //     console.log("Factorial Calculate.");

    //     const calFact = (n) => {
    //         return n <= 1 ? 1 : n * calFact(n-1);
    //     }
    //     return calFact(number);
    // }, [number])

    // useCallback hook

    // Child component
    // function Child({ handleClick }) {
    //     console.log("Child rendered.");
    //     return <button onClick={handleClick}>Click me</button>
    // }

    // // Parent component
    // const memorizedHandleClick = useCallback(() => {
    //     alert('Button Clicked.')
    // }, []);

    // UseReducer hook - advance version of useState hook
    // function reducer(state, action) {
    //     switch(action.type){
    //         case "Increment": return {count: state.count + 1};
    //         case "Decrement": return {count: state.count - 1};
    //         case "Reset": return {count : 0};
    //         default: return state;
    //     }
    // }

    // const [state, dispatch] = useReducer(reducer, {count : 0})

    // When we create an array or objects , we must create a new copy (React doesn't detect changes if you mutate directly).
    return (
        <>
            {/* <h1>Counter app using useState hook.</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button> */}

            {/* Form */}
            {/* <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <button type="submit">Submit</button>

                {{ message } && <p>{message}</p>}

                <ul>
                    {names.map((n, index) => (
                        <li key={index}>{n}</li>
                    ))}
                </ul>
            </form> */}

            {/* UseRef Hook Form */}

            {/* <input ref={inputRef} placeholder="Enter your email." />
            <button onClick={handleFocus}>Focus</button> */}

            {/* useMemo Hook */}
            {/* <h2>UseMemo Hook Example</h2>
            <input type="text" placeholder="Enter a number" value = {number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <p>Factorial: {factorial}</p>
            <button onClick={() => setCounter(counter + 1)}>Re-render</button>
            <p>Counter: {counter}</p> */}

            {/* useCallback Hook */}
            {/* <h2>useCallback hook Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <Child handleClick={memorizedHandleClick} /> */}

            {/* UseReducer Hook */}
            {/* <h2>UseReducer Hook.</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: "Increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "Decrement"})}>Decrement</button>
            <button onClick={() => dispatch({type: "Reset"})}>Reset</button> */}

        </>
    )
}