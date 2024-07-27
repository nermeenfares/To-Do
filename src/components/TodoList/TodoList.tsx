import React, { useState, useEffect } from "react";
import api from "../../api";
import { addTask, removeTask, toggleTaskCompletion } from "../../utils";
import TodoItem from "../TodoItem/TodoItem";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    api.get("/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  const handleToggleCompletion = (taskId: number) => {
    toggleTaskCompletion(taskId, tasks, setTasks);
  };

  const handleRemoveTask = (taskId: number) => {
    removeTask(taskId, tasks, setTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="p-9 bg-blue-100 rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          To-Do List
        </h1>
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="New task"
            className="flex-grow border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => addTask(newTaskTitle, tasks, setTasks)}
            className="ml-4 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-150"
          >
            Add Task
          </button>
        </div>
        <div className="mb-6 flex justify-center space-x-4">
          <button
            onClick={() => setFilter("all")}
            className={`py-2 px-4 rounded-lg ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`py-2 px-4 rounded-lg ${
              filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`py-2 px-4 rounded-lg ${
              filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Completed
          </button>
        </div>
        <ul className="space-y-4">
          {filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggle={handleToggleCompletion}
              onRemove={handleRemoveTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
