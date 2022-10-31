import { useAppDispatch, useAppSelector } from "../app/hooks";
//import { useBodyContext } from "../contexts/game.body.context";
import { HeaderAction } from "./header.component/Header.action.component";
import { HeaderTitle } from "./header.component/Header.title.component";
import { abortGame , reloadGame } from '../fetures/game/gameSlice'


export function Header (){
    //redux
    const {isActive , isWon} = useAppSelector(state => state.game)
    const dispatch = useAppDispatch()
   // const { reloadGame , abortGame  } = useBodyContext();
    let title ='';
    let action ='';
    if(isActive === false) {
        title = 'switchers'
    } else {
        if(isWon){
            title= 'victory'
        } else {
            title = 'click to toggle'
        }
    }
        
    const reloadHandler = () =>{
        dispatch(reloadGame())
    }

    const abortHandler = () =>{
        dispatch(abortGame())
    }
    
    return (
        <div className='header'>
           <HeaderTitle title = {title} />
            {
                //isActive === false ?  '' :  isWon ? 
                isActive === false ?  '' :  isWon ? 
                <HeaderAction action="reload" headerActionHandler = {reloadHandler}/> :
                <HeaderAction action='abort' headerActionHandler = {abortHandler}/>

            }
            
        </div>
    )
} 