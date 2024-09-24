import { useState } from "react"

const Factorial = () => {
    const [fact, setFact]  = useState(1);

    return(
        <><h1>Factorial: {fact}</h1>
        <button onClick={() => setFact(fact*(fact+1))}>Factorial</button>
        </>
    )
}

export default Factorial;