import {
  Task,
  AddTask,
  ToggleCompletedTask,
  DeleteTask,
  UpdateTask,
} from "./type";
import TodoStatus from "./components/TodoStatus";
import TodoInput from "./components/TodoInput";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask: AddTask = (text) => {
    const newTask: Task = { id: Date.now(), text, complete: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask: DeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleCompletedTask: ToggleCompletedTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const updateTask: UpdateTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="bg-darkColor font-lexend h-screen">
      <section className="w-[80%] lg:w-[50%] xl:w-[30%] pt-16 m-auto">
        <TodoStatus tasks={tasks} />
        <div className="py-10">
          <TodoInput addTask={addTask} />
        </div>

        {tasks.length === 0 ? (
          <div className="flex justify-center text-center bg-secondry border border-borderColor rounded-2xl py-5 px-8 mb-5">
            <p className="text-textColor">No Tasks yet...</p>
          </div>
        ) : (
          <TodoList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleCompletedTask={toggleCompletedTask}
            updateTask={updateTask}
          />
        )}
      </section>
    </div>
  );
};

export default App;
