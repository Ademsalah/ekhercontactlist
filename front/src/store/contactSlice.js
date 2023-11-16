import { configureStore} from "@reduxjs/toolkit"
import { createSlice } from '@reduxjs/toolkit';
const contactSlice = createSlice({
    name:"contactElement",
    initialState:[{
        neme:"adam",
        lastName:"salah redux",
        age:"22",
        email:"salahadem817@gmail.com"
    },
    {
        neme:"refki",
        lastName:"selmi redux",
        age:"21",
        email:"sahadelam178@gmail.com"
    },
],
reducers:{
    setContact:(state,action)=>{
        return action.payload
    }

}
})
export const {setContact}=contactSlice.actions

export default contactSlice.reducer
