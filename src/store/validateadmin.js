import { createSlice } from "@reduxjs/toolkit";
const con = createSlice({
    name:"confirm",
    initialState:{
        reg:0,
        password:""
    },reducers:{
        addreg(state,action){
            state.reg = action.payload
        },
        addpass(state,action){
            state.password = action.payload
        }
    }
})

export const conreducer = con.reducer
export const {addreg,addpass} = con.actions