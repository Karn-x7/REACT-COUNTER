
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(4)
  const addValue=()=>{
    console.log("value",) 
   ;
  setCounter(counter+1)}
const decreaseValue=()=>{console.log("value",)
  setCounter(counter-1)
}
let message;


if(counter>22){
  message=<h4>error not over 22</h4>;}
  else if (counter<0) {
    message=<h4>can't go less than 0</h4>;}

 

  

  return (
    <>
     <h1>karnx and code </h1>
     <h2>counter value:{counter}</h2>
     {counter>22&&<h4>error cant excceed above 22</h4>}
     {counter>0&&<h4>error cant be below zero too</h4>}

     <button onClick={addValue} disabled={counter>=22}>Add value</button><br>
     </br> 
     <button style={{backgroundColor:"red"}}onClick={decreaseValue} disabled={counter<=0}>Decrease value</button>
     <br></br>
     <button> for funn</button>
    </>
  )
}

export default App