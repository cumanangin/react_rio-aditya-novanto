import React, { useEffect } from "react";
import "../styling/TodoListItem.css";
import ListTodo from "./ListTodo";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoItem } from "../store/todoSlice";

const TodoListItem = ({ editTodoItem }) => {
  /* const {editTodoItem} = props; */
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  /* useEffect(() => {
      console.log(data);
    },[data]) */

  return (
    <div>
      <ul>
        {todos.map((todoItem) => (
          <ListTodo
            key={todoItem.id}
            item={todoItem}
            deleteTodoItem={() => {
              dispatch(deleteTodoItem(todoItem.id));
            }}
            editTodoItem={() => {
              dispatch(editTodoItem(todoItem.id));
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoListItem;
