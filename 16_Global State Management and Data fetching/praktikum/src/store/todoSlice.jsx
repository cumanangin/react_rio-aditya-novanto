import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";

const initialValue = [
    {
      id: uuidv4(),
      title: "Mengerjakan Exercise",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Mengerjakan Assignment",
      completed: false,
    },
  ];
export const itemSlice = () => {
  console.log("first")
}
  export const todoSlice = createSlice({
      name : "todo",
      initialState: {
        todos : initialValue
      },
      reducers:{
        deleteTodoItem : (state, action) => {
           state.todos = state.todos.filter(((todoList) => todoList.id !== action.payload))
        },
        addTodoItem : (state, action) => {
            const newTodoList = {
                id: uuidv4(),
                ...action.payload,
                completed: false,
              };
              state.todos = [...state.todos, newTodoList]
        },
        editTodoItem : (state, action) => {
          console.log("test")
        },

        editItem : (state,action) => {
          console.log("items")
        }
      }
  })

  export const {deleteTodoItem,addTodoItem,editItem,editTodoItem} = todoSlice.actions;
  export default todoSlice.reducer;