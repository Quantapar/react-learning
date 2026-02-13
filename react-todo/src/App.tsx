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

// WHY DO WE NEED KEYS IN REACT - SO IT'S EASY FOR THE REACT DIFFING ALGO TO IDENTIFY WHAT THING HAS BEEN MOVED IN THE DOM OR FROM THE DOM
// OTHER WISE IT WILL HAVE TO RE RENDER EVERYTHIG THAT IS NOT GOOD PERFOMANCE WISE

export default App;
