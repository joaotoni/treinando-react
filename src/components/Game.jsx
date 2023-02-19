import { useState, useRef } from 'react'
import './Game.css'

export default function Game(props){
     const [ letter, setLetter ] = useState("")
     const letterImputRef = useRef(null)

     const handleSubmit = (e) =>{
          e.preventDefault()

          props.verifyLetter(letter)

          setLetter('')

          letterImputRef.current.focus()
     }

    return(
        <div>
           <p className='points'>
                <span>Pontuação: {props.score}</span>
           </p>
           <h1>Adivinhe a palavra</h1>
           <h3 className='tip'>
                Dica sobre a palavra: <span>{props.pickedCategory}</span>
           </h3>
           <p>Você ainda tem {props.guesses} tentativa(s)</p>
           <div className="wordContainer">
                {props.letters.map((letter, i) =>(
                    props.guessedLetters.includes(letter) ? (
                         <span key={i} className="letter">{letter} </span>
                    ) : (
                         <span key={i} className="blankSquare"> </span>
                    )
                ))}
           </div>
           <div className='letterContainer'>
                <p>Tente adivinhar uma letra da palavra:</p>
                <form onSubmit={handleSubmit}>
                    <input 
                         type="text" 
                         name='letter' 
                         maxLength={1} 
                         required 
                         onChange={(e) => setLetter(e.target.value)}
                         value={letter}
                         ref={letterImputRef} 
                    />
                    <button>Jogar!</button>
                </form>
           </div>
           <div className='wrongLettersContainer'>
                <p>Letras já utilizadas:</p>
                {props.wrongLetters.map((letter, i) =>(
                    <span key={i}>{letter}, </span>
                ))}
           </div>
            <button onClick={() => props.verifyLetter()}>
                Começar o jogo
            </button>
        </div>
    )
}