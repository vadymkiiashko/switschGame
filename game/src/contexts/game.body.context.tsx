import { createContext , useContext , ReactNode, useState } from "react";
import { useGameContext } from "./game.context";

type BodyContext = {
    cells : Cell[][],
    createCells : () => void,
    toggleCell : (id:number) => void,
    numberOfClicks : number,
}

type BodyContextProps = {
    children : ReactNode,
}

type Cell = {
    id:number, 
    isOn:Boolean
}

const BodyContext = createContext({} as BodyContext)

export function useBodyContext(){
    return useContext(BodyContext)
}

export function BodyContextProvider ( {children} : BodyContextProps) {
    const[cells, setCells] = useState<Cell[][]>([])
    const[numberOfClicks, setClicks] = useState(0)
    const { handleVictory } = useGameContext();
    
  
    function createCells(){
        let newCells = [] as Cell[][]
        for(let i=0; i<5; i++){
            newCells.push([])
            for (let j=0; j<5; j++) {
                let random = Math.random()<0.0
                newCells[i].push({id:+`${i}${j}` , isOn : random})
            }       
        }     
        setCells(()=>newCells)
        setClicks(0)
        
    }

    const fillCells = (cells : Cell[][]) => {
        cells.map(row => row.map(
            element => element.isOn
        ))
        
    }

    function toggleCell(id : number) {
        let newCells = cells.map(
            (row,indexRow) => row.map(
                (element , indexElement)=> {
                    if(element.id === id) {
                        element.isOn = !element.isOn

                        if(indexRow+1 < cells.length ){
                            cells[indexRow+1][indexElement].isOn = !cells[indexRow+1][indexElement].isOn
                        }
                        if(indexRow-1 > -1 ){
                            cells[indexRow-1][indexElement].isOn = !cells[indexRow-1][indexElement].isOn
                        }

                        if(indexElement+1 < row.length){
                            cells[indexRow][indexElement+1].isOn = !cells[indexRow][indexElement+1].isOn
                        }

                        if(indexElement-1 > -1){
                            cells[indexRow][indexElement-1].isOn = !cells[indexRow][indexElement-1].isOn
                        }

                        if(indexElement-1 > -1 && indexRow-1 > -1) {
                            cells[indexRow-1][indexElement-1].isOn = !cells[indexRow-1][indexElement-1].isOn
                        }
                        if(indexElement+1 < row.length && indexRow-1 > -1) {
                            cells[indexRow-1][indexElement+1].isOn = !cells[indexRow-1][indexElement+1].isOn
                        }

                        if(indexElement-1 > -1 && indexRow+1 < row.length) {
                            cells[indexRow+1][indexElement-1].isOn = !cells[indexRow+1][indexElement-1].isOn
                        }

                        if(indexElement+1 < row.length && indexRow+1 < row.length) {
                            cells[indexRow+1][indexElement+1].isOn = !cells[indexRow+1][indexElement+1].isOn
                        }

                    
                      
                        
                    }
                    return element
                }

            )
        )
        setCells(()=>newCells)
        setClicks(numberOfClicks => numberOfClicks+1)
        checkForVictory()
    }

    function checkForVictory (){
        let game = cells.find(row => 
            row.find(element => element.isOn === false))
        if (!game) {
            setClicks(0);
            handleVictory()
        }
    }
    return (
        <BodyContext.Provider value = {
            {
                cells,
                createCells,
                toggleCell,
                numberOfClicks,
            
            }
        } >
            {children}
        </BodyContext.Provider>
    )
}