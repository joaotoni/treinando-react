import './StartScreen.css'

function StartScreen(props) {
    return(
        <div className='start'>
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
             <button onClick={() => props.startGame()}>Começar o jogo</button> {/*Para realizar a chamada de uma function é necessario fazer isso */}
        </div>
    )
}

export default StartScreen;