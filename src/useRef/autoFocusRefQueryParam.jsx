import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const AutoFocusWithReactJSUseRef = () => {
  const inputRefA = useRef();
  const inputRefB = useRef();
  const inputRefC = useRef();

  const [searchQuery] = useSearchParams();
  const focus = searchQuery.get("focus");

  const handleChange = () => {
    if(focus === 'first'){
        inputRefA.current.focus();
    }
    else if(focus === 'second'){
        inputRefB.current.focus();
    }
    else if(focus === 'third'){
        inputRefC.current.focus();
    }
  }

  useEffect(()=>{
    if(focus === 'first'){
        inputRefA.current.focus();
    }
    else if(focus === 'second'){
        inputRefB.current.focus();
    }
    else if(focus === 'third'){
        inputRefC.current.focus();
    }
  }
  ,[])

  return (
    <div>
      <div className="box">
        <input type="text" ref={inputRefA} />
        <button onClick={handleChange}>Toggle A</button>
      </div>
      <div className="box">
        <input type="text" ref={inputRefB} />
        <button onClick={handleChange}>Toggle B</button>
      </div>
      <div className="box">
        <input type="text" ref={inputRefC} />
        <button onClick={handleChange}>Toggle C</button>
      </div>
    </div>
  );
};

export default AutoFocusWithReactJSUseRef;
