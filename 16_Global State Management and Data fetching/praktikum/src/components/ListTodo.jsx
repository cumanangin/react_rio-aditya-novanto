import "../styling/ListTodo.css";

const ListTodo = ({ item, deleteTodoItem, editTodoItem }) => {
  return (
    <li className="itemList">
      <div
        className="kontenList"
        style={{
          textDecorationLine: item.completed ? "line-through" : "none",
        }}
        onClick = {() => {
          editTodoItem(item.id);
        }}
      >
        <input className="checkbox" type="checkbox" checked={item.completed} />
        {item.title}
        <button
          className="button button-round"
          onClick={() => {
            deleteTodoItem(item.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListTodo;
