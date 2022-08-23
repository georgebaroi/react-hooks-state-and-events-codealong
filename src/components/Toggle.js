import React, {useState} from "react";

function Toggle(){
  
  //when using useState, the first thing under component function should be the state and setter
const [isOn, setIsOn] = useState(false)

  //since we're using useState, it is always implied that we will need a handler function to change states for us
  //inside of the handler function we use the component state and the setter function to tell react what to do
function handleClick(){
  setIsOn((isOn)=> !isOn)
}

//we create const color which is subject to change based on the response from the ternary 
//
const color = isOn ? 'red' : 'green'

 return(
    <button onClick={handleClick} style={{background:color}}>{isOn ? 'On' : 'Off'}</button>
  )
}

export default Toggle;
