import React, { useRef, useState } from "react";
import { useContextList } from "../store/ContextProvider";

const Input = () => {
  const { addList } = useContextList();
  const inputRef = useRef<HTMLInputElement>(null!);
  const [isInputInValid, setIsInputInValid] = useState(false)

const clickHandler =()=>{
    const enteredInput = inputRef.current.value;
if(!enteredInput){
setIsInputInValid(true);
return;
}
addList(enteredInput)
setIsInputInValid(false)
inputRef.current.value = "";
}

  return (
    <>
    <div className=" border border-blue-500 flex rounded mb-2">
      <button className=" bg-blue-500 px-2 py-1 text-white hover:bg-blue-600"
      onClick={clickHandler}
      >
        Add
      </button>
      <label htmlFor="input" className=" hidden"></label>
      <div className=" grow">
      <input
        type="text"
        id="imput"
        className="focus:outline-none pl-2 w-full h-full"
        ref={inputRef}
      />
    
      </div>
    </div>
    {isInputInValid && <p className=" text-red-500">Please enter input</p>}
    </>
  );
};

export default Input;
