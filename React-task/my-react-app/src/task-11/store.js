import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import todoRuducers from './todoSlice'


export const store = configureStore({
    reducer: {
        counter : counterReducer,
        todos: todoRuducers
    }
});

