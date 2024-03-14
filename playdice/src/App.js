
import { useState } from 'react';
import Start from './components/startgame';
import Gameplay from './components/GamePlaypage2';
import FooterSection from './components/Footer';
function App() {
   // here we use a hooks usestate so that when we click on start game btn then we go to next page 
   const[isGameStarted,setisGameStarted]=useState(false); // this is hooks and we pass the value false becz we are on fisrt page only

  // now we write a function toggleGameplay which change the value from false to true and vice-versa 
  const toggleGameplay=()=>{
    setisGameStarted((prev)=>!prev);
    };


  return (
  
  // now we use the ternary function so that if value is true then go to next pageto play game or if false then remain on first page 
  <>
  {isGameStarted ? <Gameplay/> :<Start toggle={toggleGameplay}/>}

   <FooterSection/>
  </>

  )
};

export default App;

