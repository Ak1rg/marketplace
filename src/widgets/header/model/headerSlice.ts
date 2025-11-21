import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
    searchLine:string 
}

const initialState:IState = {
    searchLine:'',
}

export const headerSlice = createSlice({
    name:'headerSlice',
    initialState:initialState,
    reducers:{
        setSearchLine(state,action:PayloadAction<string>){
            state.searchLine = action.payload
        },
        clearSearchLine(state){
            state.searchLine = ''
        }
    }
})


export const {
    setSearchLine,
    clearSearchLine,
} = headerSlice.actions

export default headerSlice.reducer