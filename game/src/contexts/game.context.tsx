/*import { createContext, useContext , ReactNode, useState } from "react";
import { useBodyContext } from "./game.body.context";

type GameContext ={
    isActive : boolean,
    isWon : boolean,
    abortGame : ()=>void,
    reloadGame : () => void,
    handleVictory : () => void
}

type Cell = {
    isOn : boolean,
    id : [number,number]
}

type GameProviderProps = {
    children : ReactNode
}

const GameContext = createContext({} as GameContext)

export function useGameContext () {
    return useContext(GameContext)
}

export function GameContextProvider( {children} : GameProviderProps){
    const { createCells} = useBodyContext()
    const [isActive,setIsActive] = useState(false);
    const [isWon, setIsWon] = useState(false)

    const  handleVictory = ()=>{
        setIsWon(true)
    }

    
    function reloadGame(){
        console.log('reloading')
        setIsActive(()=>true)
        setIsWon(()=>false)
        createCells()
    }

    function abortGame(){
        console.log('aborting')
        setIsActive(()=>false)
        setIsWon(()=>false)
        createCells()
    }
    
    return(
        <GameContext.Provider value ={{
            isActive,
            isWon,
            abortGame,
            reloadGame,
            handleVictory
        }} >
            {children}
        </GameContext.Provider>
    )
}
*/