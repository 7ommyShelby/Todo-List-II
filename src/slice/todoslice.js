import { createSlice } from "@reduxjs/toolkit";
const initialstate = [
    { id: 1, text: "Hello World" }
];

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

        },
        remove: (state, action) => {
            return state.filter((e) => {
                return e.id !== action.payload
            })
        }
    }

})

export const { add, remove } = todoslice.actions;
export default todoslice.reducer;
