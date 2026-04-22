import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(5);
    const addValue = () => {
        console.log("Clicked", count);
        if ((count + 1) <= 20) setCount(count + 1);
    };

    const decreaseValue = () => {
        console.log("Clicked", count);
        if ((count - 1) >= 0) setCount(count - 1);
    }

    return (
        <>
            <h2>Counter value:{count}</h2>
            <button onClick={addValue}>Increase value</button>
            <br />
            <button onClick={decreaseValue}>Decrease value</button>
        </>
    )
}
export default Counter