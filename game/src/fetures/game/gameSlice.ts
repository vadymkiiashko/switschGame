import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { getInitialGrid } from '../../data/cells'


//Cell type
type Cell = {
    isOn : boolean,
    id : number
}

// Define a type for the slice state
interface GameState {
  clicks: number,
  isActive : boolean,
  isWon: boolean,
  cells : []
 
}


// Define the initial state using that type
const initialState: GameState = {
  clicks: 0,
  isActive : false,
  isWon : false,
  cells : getInitialGrid()
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

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.clicks += action.payload
    },

    startGame : (state) => {
        state.isActive = true
        state.clicks = 0
        state.isWon = false
        
    },

    toggleCell : (state, action: PayloadAction<number>)=> {
        const id = action.payload 
        let newCells = state.cells.map(
            (row,indexRow) => row.map(
                (element , indexElement)=> {
                    if(element.id === id) {
                        element.isOn = !element.isOn

                        if(indexRow+1 < state.cells.length ){
                            state.cells[indexRow+1][indexElement].isOn = !state.cells[indexRow+1][indexElement].isOn
                        }
                        if(indexRow-1 > -1 ){
                            state.cells[indexRow-1][indexElement].isOn = !state.cells[indexRow-1][indexElement].isOn
                        }

                        if(indexElement+1 < row.length){
                            state.cells[indexRow][indexElement+1].isOn = !state.cells[indexRow][indexElement+1].isOn
                        }

                        if(indexElement-1 > -1){
                            state.cells[indexRow][indexElement-1].isOn = !state.cells[indexRow][indexElement-1].isOn
                        }          
                        
                    }
                    return element
                }

            )
        )
        state.cells = newCells;
        state.clicks += 1;
       //checkForVictory() 
       let game = state.cells.find(row => 
        row.find(element => element.isOn === false))
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

export const { increment, incrementByAmount , startGame , toggleCell , abortGame, reloadGame} = gameSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.game.clicks

export default gameSlice.reducer

