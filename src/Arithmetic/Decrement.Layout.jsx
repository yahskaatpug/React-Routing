import { useState } from "react"

const Decrement = ()=>{
    const [decreaseCounter, setDecreaseCounter] = useState(0);

    return(
        <>
        <h1>Decrement Counter: {decreaseCounter}</h1>
        <button onClick={() => setDecreaseCounter(decreaseCounter-1)}>Decrease Counter</button>
        </>
    )
}

export default Decrement;