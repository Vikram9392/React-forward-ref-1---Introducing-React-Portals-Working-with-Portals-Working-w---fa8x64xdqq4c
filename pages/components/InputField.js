'use client';
import React from 'react';

const InputField = React.forwardRef((props, ref) => {
  console.log("nhvtf : ",props.inputChange);
  return (
    <div>
      <input id='input' type='text' ref={ref} onChange={props.inputChange}/>
    </div>
  );
});

export default InputField;
