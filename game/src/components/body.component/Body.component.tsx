
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Cell } from "./cell.component";
import { toggleCell} from "../../fetures/game/gameSlice";
import '../../styles/components/body/body.styles.scss'

export function Body() {
    const {isActive , isWon , cells} = useAppSelector(state => state.game)
    const dispatch = useAppDispatch()

    let purpose =''
    if(isWon) {
        purpose = 'victory'
    }
    if(!isActive){
        purpose = 'initial'
    }

    const doToggleCell = (id: number) => {
        if (!isActive || isWon) return
        dispatch(toggleCell(id))
    }

    return(
        <div className='body body-game'>
            {  
                cells?.map((row) => 
                    row.map((cell) => 
                        <Cell
                            key={`${cell.id}`}
                            id={cell.id}
                            isOn={cell.isOn}
                            purpose={purpose}
                            onClick={() => doToggleCell(cell.id)}
                        />
                    )
                )
            }
        </div>
    )
}