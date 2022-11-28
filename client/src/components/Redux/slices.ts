import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {Inputs} from '../Contact Me/Contact'

interface mailState{
    name: string,
    subject: string,
    body: string
}

const initialState : mailState ={
    name:'',
    subject:'',
    body:''
}

export const sendEmail = createAsyncThunk('email/sendEmail',
    async(payload: Inputs)=>{
        try {
            return await axios.post('http://localhost:3001/api/email', payload)
        } catch (error) {
            throw new Error(`${error}`)
        }
    }

)

export const mailSlice = createSlice({
    name: "mail",
    initialState,
    reducers:{},
    extraReducers:{}
})