import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { getInitialGrid } from '../../data/cells'

export type Grid = Cell[][]

//Cell type
export type Cell = {
    isOn : boolean,
    id : number
}

// Define a type for the slice state
export interface GameState {
  clicks: number,
  isActive : boolean,
  isWon: boolean,
  cells : Grid
}


// Define the initial state using that type
const initialState: GameState = {
  clicks: 0,
  isActive : false,
  isWon : false,
  cells : getInitialGrid()
}

const toggle = (cells: Grid, x: number, y: number) => {
    if (x < cells[0].length && x >= 0 && y < cells.length && y >= 0) {
        cells[x][y].isOn = !cells[x][y].isOn
    }
}

export const gameSlice = createSlice({
  name: 'game',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.clicks += 1
    },
    resetClicks : state => {
        state.clicks = 0
    },

    startGame : (state) => {
        state.isActive = true
        state.clicks = 0
        state.isWon = false
        
    },

    toggleCell : (state, action: PayloadAction<number>)=> {
        const id = action.payload
        const x = Math.floor(id / state.cells.length)
        const y = id % state.cells.length

        toggle(state.cells, x, y - 1)
        toggle(state.cells, x - 1, y)
        toggle(state.cells, x, y)
        toggle(state.cells, x + 1, y)
        toggle(state.cells, x, y + 1)

        state.clicks += 1;
        //checkForVictory() 
        let game = state.cells.find(row => 
            row.find(element => element.isOn === false)
        )
        if (!game) {
            //handleVictory()
            state.isWon = true
        }
    } ,

    abortGame : (state) =>{
        state.cells = getInitialGrid()
        state.isActive = false
        state.clicks = 0
        state.isWon = false
    },
    reloadGame : state =>{
        state.clicks =  0,
        state.isWon = false,
        state.cells = getInitialGrid()
    }

  },
})

export const { increment, startGame , toggleCell , abortGame, reloadGame} = gameSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.game.clicks

export default gameSlice.reducer

