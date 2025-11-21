import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../lib/types"

export interface IState {
    user:IUser | null,
    loading:boolean,

} 

const resetState:IState = {
    user:null,
    loading:false
}

const initialState:IState = {
    user:null,
    loading:false
}

export const authSlice = createSlice({
    name:'authSlice',
    initialState:initialState,
    reducers:{
        clearAuth:() => resetState
    }
})

export const {
    clearAuth
} = authSlice.actions
