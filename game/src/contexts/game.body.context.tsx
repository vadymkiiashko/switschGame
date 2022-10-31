import { createContext , useContext , ReactNode, useState, useEffect } from "react";
import { getInitialGrid } from '../data/cells'


type Cell = {
    isOn : boolean,
    id : number
}

//body
type BodyContext = {
    cells : Cell[][],
    createCells : () => void,
    toggleCell : (id:number) => void,
    numberOfClicks : number,
    //game 
    isActive : boolean,
    isWon : boolean,
    abortGame : ()=>void,
    reloadGame : () => void,
    handleVictory : () => void
}

type BodyContextProps = {
    children : ReactNode,
}

const BodyContext = createContext({} as BodyContext)

export function useBodyContext(){
    return useContext(BodyContext)
}
//body context
export function BodyContextProvider ( {children} : BodyContextProps) {
    const[cells, setCells] = useState<Cell[][]>([])
    const[numberOfClicks, setClicks] = useState(0)
    const [isActive,setIsActive] = useState(false);
    const [isWon, setIsWon] = useState(false)
  
    /*
    function createCells(){
        let newCells = [] as Cell[][]
        for(let i=0; i<5; i++){
            newCells.push([])
            for (let j=0; j<5; j++) {
                let random = Math.random()<0.0
                newCells[i].push({id:+`${i}${j}` , isOn : random })
            }       
        }     
        setCells(()=>newCells)
        setClicks(0)
        
    }
    */

    const createCells = () => {
        const newCells = getInitialGrid().reduce((acc, row , rowIndex )=> {
                const newRow = row.reduce( (rowAcc, element , elementIndex) => {
                    return [...rowAcc , {...element , id:+`${rowIndex}${elementIndex}`}]
            },[])
            return [...acc, newRow]
        } , [])
        setCells(()=>newCells)
        setClicks(0)
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

            handleVictory()
        }
    }


    //game functions 

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


    return (
        <BodyContext.Provider value = {
            {
                cells,
                createCells,
                toggleCell,
                numberOfClicks,
                isActive,
                isWon,
                abortGame,
                reloadGame,
                handleVictory
            
            }
        } >
            {children}
        </BodyContext.Provider>
    )
}

