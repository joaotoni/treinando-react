import './GameOver.css'

export default function GameOver(props){
    return(
        <div>
            <h1>
                GameOver
            </h1>
            <button onClick={() => props.retry()}>
                Resetar o jogo
            </button>
        </div>
    )
}