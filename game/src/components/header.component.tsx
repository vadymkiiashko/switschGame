import { useGameContext } from "../contexts/game.context"
import { HeaderAction } from "./header.component/Header.action.component";
import { HeaderTitle } from "./header.component/Header.title.component";


export function Header (){ 
    const {isActive , isWon, reloadGame , abortGame  } = useGameContext();
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
        
    
    return (
        <div className='header'>
           <HeaderTitle title = {title} />
            {
                isActive === false ?  '' :  isWon ? 
                <HeaderAction action="reload" headerActionHandler = {reloadGame}/> :
                <HeaderAction action='abort' headerActionHandler = {abortGame}/>

            }
            
        </div>
    )
} 