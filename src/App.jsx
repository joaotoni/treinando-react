import './App.css'
import './index.css'
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'
import { useCallback, useEffect } from 'react'
import { wordsList } from './data/words'
import { useState } from 'react'

const stages = [
  { id: 1, name: 'start'},
  { id: 2, name: 'game'},
  { id: 3, name: 'end'},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  
  function pickWordAndCategory (){
    // pick random category
    const categories = Object.keys(words)
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)] //Math.random é para pegar um numero aleatorio, mas por ele dar um numero quebrado é usado o floor para dar um numero inteiro
  
    // pick random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)]
  
    return { word, category }
  }

  function startGame()  {
    const { word, category } = pickWordAndCategory()

    let wordLetters = word.split('')

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setPickedCategory(category)
    setPickedWord(word)
    setLetters(letters)

    setGameStage(stages[1].name)
    console.log(wordLetters)
  }

  function verifyLetter(){

    setGameStage(stages[2].name)
  }
  function retry(){

    setGameStage(stages[3].name)
  }
  return (
    <div className='App'>
      {gameStage == 'start' ? <StartScreen  startGame={startGame} />: null}
      {gameStage == 'game' && <Game verifyLetter={verifyLetter} />} 
      {gameStage == 'end' && <GameOver retry={retry} />}
    
    </div>
  )
}

export default App
