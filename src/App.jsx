import './App.css'
import './index.css'
import StartScreen from './components/StartScreen'
// import Game from './components/Game'
// import GameOver from './components/GameOver'
// import { useCallback, useEffect } from 'react'
// import { wordsList } from './data/words'
// import { useState } from 'react'

// const stages = [
//   { id: 1, name: 'start'},
//   { id: 2, name: 'game'},
//   { id: 3, name: 'end'},
// ]

// function startGame()  {
//   setGameStage(stages[1].name)
// }
function App() {
  // const [gameStage, setGameStage] = useState(stages[0].name)
  // const [words] = useState(wordsList)


  return (
    <div className='App'>
      {/* {gameStage === 'start' && <StartScreen  startGame={startGame} />}
      {gameStage === 'game' && <StartScreen />} 
      {gameStage === 'end' && <StartScreen />} */}
      <StartScreen />
    
    </div>
  )
}

export default App
