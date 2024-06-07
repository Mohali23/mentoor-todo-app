import { Task, ToggleCompletedTask, DeleteTask, UpdateTask } from "../type";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";

interface Props {
  tasks: Task[];
  toggleCompletedTask: ToggleCompletedTask;
  deleteTask: DeleteTask;
  updateTask: UpdateTask;
}

const TodoList: React.FC<Props> = ({
  tasks,
  toggleCompletedTask,
  deleteTask,
  updateTask,
}) => {
  return (
    <motion.div
      className="overflow-x-auto h-[450px] w-full"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            staggerDirection: 1,
          },
        },
      }}
    >
      {tasks.map((task, index) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleCompletedTask={toggleCompletedTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default TodoList;
