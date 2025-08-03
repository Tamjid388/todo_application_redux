import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
export type TODO={
    title:string,
    description:string,
    isCompleted?:boolean
}
type InitialTYPE={
    todos:TODO[]
}


const initialState:InitialTYPE={
    todos:[]
}


export const todoslice=createSlice({
     name:"todo" ,
     initialState,
     reducers:{
    addTodo:(state,action:PayloadAction<TODO>)=>{
    state.todos.push({...action.payload,isCompleted:false})
    }
     }
})

export default todoslice.reducer;
export const { addTodo }=todoslice.actions;