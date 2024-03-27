import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import Todolist from "./Todolist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {
  todo: Todo;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todo, todos, settodos }: Props) => {
  const [edit, setEdit] = useState<Boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handelDone = (id: number) => {
    settodos(
      todos.map((item) =>
        item.id === id ? { ...todo, isDone: !item.isDone } : item
      )
    );
    toast("TASK COMPLETED SUCCESFULLY");
  };

  const handelDelete = (id: number) => {
    settodos(todos.filter((todo) => todo.id != id));
    toast("DELETED SUCCESFULLY");
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    settodos(
      todos.map((todo) => (todo.id == id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
    toast("TASK EDITED SUCCESFULLY");
  };
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, [edit]);

  return (
    <div className="bg-orange-200 m-5 px-9 py-2 rounded-l border border-gray-500">
      <form action="" onSubmit={(e) => handleEdit(e, todo.id)}>
        {edit ? (
          <>
            <label htmlFor="" className="text font-bold">
              Edit -{" "}
            </label>
            <input
              ref={ref}
              className="text-center bg-slate-200 rounded-xl"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
            />
          </>
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <li className="underline rounded-2xl text-left">{todo.todo}</li>
        )}

        <div className="space-x-3">
          <span
            className="text-blue-600"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(true);
              }
            }}
          >
            EDIT
          </span>
          <span onClick={() => handelDelete(todo.id)} className="text-red-600">
            DELETE
          </span>
          <span onClick={() => handelDone(todo.id)} className="text-green-600">
            {todo.isDone ? "UNDONE" : "DONE"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
