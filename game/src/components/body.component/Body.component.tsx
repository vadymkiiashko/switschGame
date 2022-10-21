import { useEffect } from "react";
import { useBodyContext } from "../../contexts/game.body.context"
import { useGameContext } from "../../contexts/game.context";
import { Cell } from "./cell.component";
import { StartModal } from "./startGame.component";

export function Body (){
    const {cells , createCells , toggleCell } = useBodyContext()
    const {isActive} = useGameContext() 
    

    useEffect(()=>{createCells()},[])
  
    return(
        <>
        <div className='body body-game'>
            {  
                cells?.map( row => 
                    row.map( cell => 
                        <Cell key = {+`${cell.id}`} {...cell} handler ={toggleCell} />
                        )
                        )
                    }
              
        </div>

        {
            !isActive &&  <StartModal />
        }
        </>
    )
}