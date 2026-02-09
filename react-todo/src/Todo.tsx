import { useState } from "react";

type propType = {
  title: string;
  desc: string;
};

export function Todo({ title, desc }: propType) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  return (
    <>
      <div>Title {title}</div>
      <div> Desc {desc}</div>
    </>
  );
}
