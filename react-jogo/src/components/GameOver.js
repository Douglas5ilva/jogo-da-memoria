import Reac, { Fragment } from "react"


export default function GameOver(props){
    return(props.show?
        <div id="gameOver">
            <div>
                Parabens, voce completou o jogo
            </div>
            <button id="restart" onClick={props.handleRestart}>Jogue Novamente</button>
        </div> : <Fragment/>
        
    )
}