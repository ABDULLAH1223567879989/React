import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './count';
import Team from './Team';
import Use from './use';
import Friends from './Friends';






function App() {
 
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button clicked 2')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3> React core concepts 2</h3>


     
   
    <Friends></Friends>
    <Use></Use>
     <Team></Team>
    <Counter></Counter>
   


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() =>{alert('third clicked')}}>click 3</button>
      <button onClick={() => addToFive(2)}>Click 4</button>

    </>
  )
}

export default App
