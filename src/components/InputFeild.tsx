import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handelAdd: (e: React.FormEvent) => void;
}

const InputFeild = ({ todo, setTodo, handelAdd }: Props) => {
  return (
    <form className="" onSubmit={handelAdd}>
      <input
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-1/2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 "
      >
        ADD
      </button>
    </form>
  );
};

export default InputFeild;
