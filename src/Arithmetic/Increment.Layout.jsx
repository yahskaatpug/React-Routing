import { useState } from "react"

const Increment = ()=>{
    const [increaseCounter, setIncreaseCounter] = useState(0);

    return(
        <>
        <h1>Increment Counter: {increaseCounter}</h1>
        <button onClick={() => setIncreaseCounter(increaseCounter+1)}>Increase Counter</button>
        </>
    )
}

export default Increment;