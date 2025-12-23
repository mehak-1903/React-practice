export default function BuggyComponent({ count }){
    if(count === 5){
        throw new Error("Crashed at 5!");
    }
    return <h3>Count: {count}</h3>
}
