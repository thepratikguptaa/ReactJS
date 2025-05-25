import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// This file sets up the Redux store for the app
// All reducers are combined here
export const store= configureStore({
    reducer: { todo: todoReducer } // Use a key for the reducer
})