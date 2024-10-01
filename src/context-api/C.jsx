import { useContext } from "react";
import D from "./D";
import { aContext } from "./A";

const C = () => {
  const aData = useContext(aContext);
  console.log("Adata inside c: ", aData);
  return (
    <div style={{backgroundColor:aData.color,  color:aData.txtcolor}}>
      <h1>I am C</h1>
      <button onClick={() => aData.setCounter((prev) => prev + 1)}>
        Increment from c
      </button>
      <D />
    </div>
  );
};

export default C;