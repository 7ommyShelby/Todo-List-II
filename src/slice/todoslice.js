import { createSlice } from "@reduxjs/toolkit";
import { stringify } from "postcss";



// const initialstate = [
//     { id: 1, text: "Hello World" }
// ];

const initialstate = JSON.parse(localStorage.getItem("todo")) || []

let count = 2;

export const todoslice = createSlice({
    name: 'Todo',
    initialState: initialstate,
    reducers: {
        add: (state, action) => {
            const newdata = {
                id: count,
                text: action.payload
            }
            count++;
            state.push(newdata);
            console.log(newdata);
            localStorage.setItem("todo" , JSON.stringify(state) )
        },
        remove: (state, action) => {
            const data = state.filter((e) => {
                return e.id !== action.payload
            })
            localStorage.setItem("todo", JSON.stringify(data))
            return data
        }
    }

})

export const { add, remove } = todoslice.actions;
export default todoslice.reducer;
