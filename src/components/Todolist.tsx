import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist = ({ todos, settodos }: Props) => {
  return (
    <div className="pt-7">
      <div className="flex justify-center  mb-5">
        <span>Pendings...</span>
      </div>
      {todos.map((item) => (
        <SingleTodo
          todo={item}
          key={item.id}
          todos={todos}
          settodos={settodos}
        />
      ))}
    </div>
  );
};

export default Todolist;
