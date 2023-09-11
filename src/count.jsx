import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleAdd2 = () =>{
        const newCount2 = count - 1;
        setCount(newCount2);
    }
    return(
        <div style={{border: '2px solid black'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleAdd2}>Reduce</button>
        </div>
    )
}