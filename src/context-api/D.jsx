import { useContext } from "react";
import { aContext } from "./A";

const D = () => {
  // Fourth. Connect the provider
  const aData = useContext(aContext);
  console.log("AData: ", aData);
  return (
    <div style={{backgroundColor:aData.color, color:aData.txtcolor}}>
      <h1>
        I am D: {aData.uName}: {aData.counter} {aData.uCountry}
      </h1>
    </div>
  );
};

export default D;