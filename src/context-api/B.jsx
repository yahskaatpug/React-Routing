import C from "./C";
import { useContext } from "react";
import { aContext } from "./A";
const B = () => {
    const aData = useContext(aContext);
    console.log("Adata inside c: ", aData);
  return (
    <div style={{backgroundColor:aData.color, color:aData.txtcolor}}>
      <h1>I am B</h1>
      <C />
    </div>
  );
};

export default B;