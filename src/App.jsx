import './App.css'
import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";

function App() {

  const [isGamePlay,setIsGamePlaye] = useState(false);

  const ToggleGamePlay = ()=>{
    setIsGamePlaye(prev => !prev);
  }

  return (
    <>
     {isGamePlay ? <GamePlay /> : <StartGame toggle={ToggleGamePlay}/>}
    </>
  )
}

export default App
