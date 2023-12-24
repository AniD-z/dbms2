import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {autocompletion} from "@codemirror/autocomplete"
import { monokai } from '@uiw/codemirror-theme-monokai';

import { useState } from "react";
import Axios from "axios";
import Button from '@mui/material/Button';

import "./form.css";

function Input() {
   const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);
   
  async function handleSubmit(){
    const response = await Axios.get("https://schemaverse.onrender.com/" , {
      params : {
        input : value
      }
    })
    console.log(response)
  }
   
  const completions = [
  {label: "panic", type: "keyword"},
  {label: "park", type: "constant", info: "Test completion"},
  {label: "password", type: "variable"},
  {label: "get_fit_now_member", type: "keyword"}
]
  function myCompletions(context) {
  let before = context.matchBefore(/\w+/)
  // If completion wasn't explicitly started and there
  // is no word before the cursor, don't open completions.
  if (!context.explicit && !before) return null
  return {
    from: before ? before.from : context.pos,
    options: completions,
    validFor: /^\w*$/
  }
}

  //   const clearLog = () => {
  //   // Your clearLog implementation
  //     console.log("qwert")
  // };

  // const launch = () => {
  //   // Your launch implementation
  //         console.log("qwertyuiop")

  // };

  return (
 <div>
    <CodeMirror
      value={value}
      height="20rem"
      width='60rem'
      
      theme={monokai}
      extensions={[javascript({ jsx: true }) , autocompletion({override: [myCompletions]}) 

    ]} 
      onChange={onChange}
    />
    <Button onClick={handleSubmit} variant="contained">SUBMIT</Button>

 
   </div>
  );
}

export default Input;
