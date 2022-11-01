
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Cell } from "./cell.component";
import { toggleCell} from "../../fetures/game/gameSlice";
import '../../styles/components/body/body.styles.scss'


export function Body (){
    const {isActive , isWon , cells} = useAppSelector(state => state.game)
    const dispatch = useAppDispatch()
    let purpose =''
    if(isWon) {
        purpose = 'victory'
    }
    if(!isActive){
        purpose = 'initial'
    } 
    
    
    const clickHandler = (event : React.MouseEvent<HTMLInputElement>) =>{ 
        const clicked = event.target.closest('.cell') as HTMLElement
        if(!clicked) return
        const id = +clicked.dataset.tag 
        dispatch(toggleCell(id))
    }

    return(
        < >
        <div className='body body-game'  onClick={ isActive ===true && isWon===false ? clickHandler : ()=>{} }>
            {  
                cells?.map( row => 
                    row.map( cell => 
                        <Cell key = {+`${cell.id}`} {...cell} purpose ={purpose} />
                        )
                        )
            }
              
        </div>

       
        </>
    )
}