//import { useGameContext } from "../../contexts/game.context"

type HeaderActionProps = {
    action : string,
    headerActionHandler : ()=>void
}

export function HeaderAction ({action , headerActionHandler} : HeaderActionProps){
    return (
        <div className="header-action" onClick ={()=>headerActionHandler()}>
            {action}
        </div>
    )
}