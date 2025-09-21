import { createSlice } from "@reduxjs/toolkit";

export interface IAppState {
    theme:string
}

const initialState:IAppState = {
    theme:'light'
}

export const appSlice = createSlice({
    name:'appSlice',
    initialState:initialState,
    reducers:{
        switchTheme(state){
            state.theme = state.theme!=='light'?'light':'dark'
        }
    }
})


export const {
    switchTheme,
} = appSlice.actions

export default appSlice.reducer