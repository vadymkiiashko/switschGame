import { useBodyContext } from "../../contexts/game.body.context"
import { useGameContext } from "../../contexts/game.context"
import { StartModal } from "../body.component/startGame.component";

export function Footer () {
    const { numberOfClicks  } = useBodyContext()
    
    const {isActive , reloadGame} = useGameContext();
    return (
        <div className='footer'>
         { isActive ? 
            `${numberOfClicks} BUTTONS PRESSEd` :
            <button className="start-btn" onClick={reloadGame}>NEW GAME</button>
        }
      </div>
    )
}