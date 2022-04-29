import React, { useCallback, useEffect, useState } from "react";
import "../styling/AddTodo.css";
import TodoListItem from "./TodoListItem";
import TodoInput from "./TodoInput";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoItem, addTodoItem, editTodoItem, editItem } from '../store/todoSlice'


const AddTodo = () => {
  /* const [dataTodos, setDataTodos] = useState(initialData); */

  /* const addTodoItem = (newTodo) => {
    const newTodoList = {
      id: uuidv4(),
      ...newTodo,
      completed: false,
    };
    setDataTodos([...dataTodos, newTodoList]);
    console.log(dataTodos);
    //console.log("ini add todo item");
  }; */

  /* const deleteTodoItem = useCallback((id) => {
        setDataTodos(dataTodos.filter(((todoList) => todoList.id !== id)))

      },[dataTodos]) */

  /* const editTodoItem = (id) => {
    const editedTodo = dataTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setDataTodos(editedTodo);
  }; */

  /* useEffect(() => {
    console.log(dataTodos);
  }, [dataTodos]); */

  return (
    <div className="flex text-center" style={{ flexDirection: "column" }}>
      <div>
        <TodoInput />
      </div>
      <div className="flex justify-centerz pt-16">
        <TodoListItem
          /* data={dataTodos}  */
          deleteTodoItem = {deleteTodoItem} 
          editTodoItem = {editTodoItem}
        />
      </div>
    </div>
  );
};

export default AddTodo;
