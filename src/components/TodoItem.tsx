import { useState } from "react";
import { Task, ToggleCompletedTask, DeleteTask, UpdateTask } from "../type";
import { motion } from "framer-motion";
interface Props {
  task: Task;
  toggleCompletedTask: ToggleCompletedTask;
  deleteTask: DeleteTask;
  updateTask: UpdateTask;
  index: number;
}
const TodoItem: React.FC<Props> = ({
  task,
  deleteTask,
  toggleCompletedTask,
  updateTask,
  index,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    updateTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex justify-between items-center bg-secondry border border-borderColor rounded-2xl py-5 px-8 mb-5 h-[93px] w-full"
    >
      <div className="flex items-center gap-3 w-[80%]">
        <button
          className={`w-5 md:w-7 h-5 md:h-7 border ${
            task.complete ? "bg-checkColor border-checkColor" : "border-primary"
          }  rounded-full hover:bg-checkColor hover:border-checkColor duration-200 cursor-pointer`}
          onClick={() => toggleCompletedTask(task.id)}
        ></button>
        {isEditing ? (
          <input
            className="text-textColor text-xl md:text-3xl font-bold bg-transparent border-b-2 border-textColor outline-none w-[80%]"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleUpdate}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUpdate();
              }
            }}
            autoFocus
          />
        ) : (
          <p
            className={`text-textColor text-xl md:text-3xl font-bold overflow-hidden text-ellipsis whitespace-nowrap w-[80%] ${
              task.complete ? "line-through" : ""
            }`}
          >
            {task.text}
          </p>
        )}
      </div>
      <div className="flex text-xl md:text-3xl text-textColor gap-3">
        <i className="ri-edit-2-fill cursor-pointer" onClick={handleEdit}></i>
        <i
          className="ri-delete-bin-6-line cursor-pointer"
          onClick={() => deleteTask(task.id)}
        ></i>
      </div>
    </motion.div>
  );
};

export default TodoItem;
