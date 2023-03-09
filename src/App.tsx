import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const states = ["active","inactive","red","blue","green","orange"]
  const [isDroppedDown, setDroppedDown]= useState(false);
  let count = 0;



   


function updateCount(e: React.ChangeEvent<HTMLInputElement>): void {

}

  return (
    <div className="App">
        <button className="button" onClick={()=>setDroppedDown((isDroppedDown => !isDroppedDown))}>Dropdown</button>
        {isDroppedDown==true &&
        <div className = "droppedDown">
          {states.map((state,idx)=>
            (
              <div key={idx}>
                <span><input value={state} type="checkbox" onChange={(e) => updateCount(e)}/>{state}</span>
              </div>
            ))}
          </div>
        }
        
   </div>

  );
}

export default App;
