import axios from "axios";
import { useState, useEffect } from "react";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TodoProp = {
  id: number;
};

function Todo({ id }: TodoProp) {
  const [todo, setTodo] = useState<TodoType | null>(null);

  useEffect(() => {
    const getTodo = async () => {
      const res = await axios.get<TodoType>(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );
      setTodo(res.data);
    };

    getTodo();
  }, [id]);

  if (!todo) return <>loading.......</>; // to make sure we don't have todo,id/title/completed as not null

  return (
    <>
      <div>Id : {todo.id}</div>
      <div>Title : {todo.title}</div>
      <div>Completed : {todo.completed ? "Yes" : "No"}</div>
    </>
  );
}

export default Todo;
