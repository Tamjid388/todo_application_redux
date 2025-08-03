import { createSlice } from "@reduxjs/toolkit";


const initialState={
    todos:[]
}


export const todoslice=createSlice({
     name:"todo" ,
     initialState,
     reducers:{

     }
})

export default todoslice.reducer;