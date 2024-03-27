import { useRef, useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./model";
import Todolist from "./components/Todolist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);

  const handelAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedTodo = [...todos];
    if (
      todo &&
      todo.trim() &&
      !todos.some((item) => item.todo === todo.trim())
    ) {
      settodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
      toast("TASK ADDED SUCCESFULLY");
    } else if (todos.some((item) => item.todo === todo.trim())) {
      toast("TASK EXIST");
    } else {
      toast("ADD TASK");
    }
  };

  return (
    <div className="flex-col ">
      <ToastContainer /> {/* Add ToastContainer here */}
      <div className="flex justify-center my-16">
        <h1 className="font-extrabold text-2xl underline">TO DO LIST</h1>
      </div>{" "}
      <InputFeild todo={todo} setTodo={setTodo} handelAdd={handelAdd} />
      <hr className="m-9" />
      <div className="flex justify-center w-full">
        <Todolist todos={todos} settodos={settodos} />
      </div>
    </div>
  );
}

export default App;
