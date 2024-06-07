import { ChangeEvent, FormEvent, useState } from "react";
import { AddTask } from "../type";

interface Props {
  addTask: AddTask;
}

const TodoInput: React.FC<Props> = ({ addTask }) => {
  const [taskText, setTaskText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between gap-8">
        <div className="w-[80%] md:w-[85%]">
          <input
            className="bg-secondry p-5 rounded-[20px] w-full text-[#6a6158] outline-none placeholder:text-[#6a6158]"
            type="text"
            value={taskText}
            name=""
            id=""
            placeholder="write your next task"
            onChange={handleChange}
          />
        </div>
        <div className="w-[20%] md:w-[15%] flex justify-center items-center">
          <button className="w-[60px] h-[60px] rounded-full bg-primary text-darkColor flex items-center justify-center">
            <i className="ri-add-line text-3xl font-extrabold"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoInput;
