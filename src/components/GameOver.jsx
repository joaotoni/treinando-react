import './GameOver.css'

export default function GameOver(props){
    return(
        <div>
            <h1>Fim do Jogo!</h1>
            <h2>A sua pontuação foi: <span>{props.score}</span></h2>
            <button onClick={() => props.retry()}>
                Resetar o jogo
            </button>
        </div>
    )
}