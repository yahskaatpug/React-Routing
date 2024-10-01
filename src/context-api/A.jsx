import { createContext, useState } from "react";
import B from "./B";

// First. - Defined a context
export const aContext = createContext(null);

// Second. - Define a provider
const AProvider = aContext.Provider;

const AWithContext = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("white");
  const [txtcolor, setTxtColor] = useState("black");

  const handleClick = ()=>{
    setCounter(counter+1);
    setColor("black");
    setTxtColor("white");
  }
  return (
    //  Third. - Wrap the component with the provider
    <div style={{backgroundColor:color, color:txtcolor}}>
    <AProvider
      value={{
        counter: counter,
        uName: "Manish",
        uCountry: "Bharat",
        setCounter,
        color,
        txtcolor
      }}
    >
      <button onClick={handleClick}>Increment</button>
      <h1>I am A : {counter}</h1>
      <B />
    </AProvider>
    </div>
  );
};

export default AWithContext;