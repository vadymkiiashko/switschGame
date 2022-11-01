
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {  startGame  } from '../../fetures/game/gameSlice'
import '../../styles/components/footer/footer.styles.scss'

export function Footer () {
    const {clicks , isWon , isActive} = useAppSelector((state) => state.game)
  
    const dispatch = useAppDispatch()
    
    return (
        <div className='footer'>
         { isActive ? 
         <>
            {`${clicks} BUTTONS PRESSEd`} 
         </>
         :
            <button className="start-btn" onClick={()=>dispatch(startGame())}>NEW GAME</button>
        }
      </div>
    )
}

