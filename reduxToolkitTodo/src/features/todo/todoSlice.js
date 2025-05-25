import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid is a unique id generator

const initialState = {
    todos: [{
        id: 1,
        text: "Learn Redux Toolkit"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => { //state is the current state, action is the action dispatched
            const todo = {
                id: nanoid(), // generate a unique id
                text: action.payload.text // get the text from the action payload
            }
            state.todos.push(todo) // add the todo to the todos array
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id) // filter out the todo with the id from the action payload
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload; // destructure the id and text from the action payload
            const todo = state.todos.find((todo) => todo.id === id); // find the todo with the id from the action payload
            if (todo) {
                todo.text = text; // update the text of the todo
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;