import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../slice/todoslice'


export const store = configureStore({
    reducer : todoReducer
});
