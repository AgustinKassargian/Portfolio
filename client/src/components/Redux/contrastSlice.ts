import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"


interface IcontrastState{
    contrast:boolean
}

const initialState : IcontrastState = {
    contrast: false
}

export const changeContrast = createAsyncThunk('contrast/changeContrast',
    async(payload:string)=>{ return payload}
)

export const contrastSlice = createSlice({
    name:'contrast',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(changeContrast.fulfilled,(state,action)=>{
            if(action.payload === "on") state.contrast = true
            if(action.payload === "off") state.contrast = false
        })
    }
})