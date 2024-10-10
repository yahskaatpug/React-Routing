import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const AutoFocusWithReactJSUseRefDynamic = () => {
//   const inputRefA = useRef();
//   const inputRefB = useRef();
//   const inputRefC = useRef();

const inputRef = {
   inputRefA : useRef(),
   inputRefB : useRef(),
   inputRefC : useRef(),
}

  const [searchQuery] = useSearchParams();
  const focus = searchQuery.get("focus");

  const handleChange = (key) => {
    if(inputRef[key]){
        inputRef[key].current.focus();
    }
  }

  useEffect(()=>{
    if(focus){
        handleChange(focus);
    }
   
  }
  ,[focus])

  return (
    <div>
        {Object.keys(inputRef).map((key)=>{
            <div className="box">
                <input type="text" ref={inputRef[key]}/>
                <button onClick={() => handleChange(key)}> Toggle {key}</button>
            </div>
        })}
    </div>
  );
};

export default AutoFocusWithReactJSUseRefDynamic;
