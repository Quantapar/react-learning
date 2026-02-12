import { useState } from "react";
import { Todo } from "./Todo";

export function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "first", desc: "first desc" },
    { id: 2, title: "second", desc: "second desc" },
    { id: 3, title: "third", desc: "third desc" },
  ]);
  function addTodo() {}
  return (
    <>
      <button onClick={addTodo} style={{ cursor: "pointer" }}>
        Add a todo
      </button>
      {todos.map((todo, id) => (
        <Todo key={id} id={todo.id} title={todo.title} desc={todo.desc} />
      ))}
    </>
  );
}

export default App;
