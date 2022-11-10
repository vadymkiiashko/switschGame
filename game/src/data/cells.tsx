import { Cell, Grid } from "../fetures/game/gameSlice"

// Starting grid configurations
const GRIDS: string[][] = [
    [
        "x...x",
        ".x.x.",
        "..x..",
        ".x.x.",
        "x...x"
    ],
    [
        "..x..",
        ".x.x.",
        "x.x.x",
        ".x.x.",
        "..x.."
    ],
    [
        ".....",
        ".xxx.",
        ".x.x.",
        ".xxx.",
        "....."
    ],
] 



const idGrid = (grid: string[]) : Grid => {
    return grid.reduce<Grid>((acc, row , rowIndex) => {
        const newRow = row.split("").reduce<Cell[]>((rowAcc, element , elementIndex) => {
            return rowAcc.concat([{
                isOn: element === "x",
                id: rowIndex * grid.length + elementIndex
            }])
        }, [])
        return acc.concat([newRow])
} , [])
}

export const getInitialGrid = (): Grid =>{
    const random  = Math.floor(Math.random()*3)
    return idGrid(GRIDS[random])
} 
