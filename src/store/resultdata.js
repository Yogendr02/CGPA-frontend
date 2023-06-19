import { createSlice } from "@reduxjs/toolkit";
const result = createSlice({
    name:"result",
    initialState:{
        useropt:[],
        seatamount:[],
        userdetail:[]
    },
    reducers:{
        addopt(state,action){
            state.useropt = action.payload
        },seatquantity(state,action){
            state.seatamount = action.payload
        },adduserdetail(state,action){
            state.userdetail = action.payload
        }
    }
})

export const resultreducer = result.reducer
export const {addopt,adduserdetail,seatquantity} = result.actions