import React, { useEffect, useRef, useState } from 'react';
import InputField from '../pages/components/InputField';

function Home() {
  const newRef = useRef();
  const [values, setValues] = useState('');
  const [input,setInput] = useState('');
  const focusInput = () => {
    newRef.current.focus();
  };
  const settingValue = () => {
    setValues("");
    setValues(input);
  };
  useEffect(()=>{
    settingValue();
  },[values]);

  const inputHolder =(e)=>{setInput(e.target.value)}
  return (
    <div>
    <InputField  ref={newRef}  type="text" inputChange={inputHolder}/>
    <br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>

    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea" value={values}></textarea>
     {/*  */}
    </div>
  );
}

export default Home;
