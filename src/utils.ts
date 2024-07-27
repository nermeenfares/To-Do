import api from "./api";
import { toast } from "react-toastify";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const addTask = async (
  newTaskTitle: string,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void
) => {
  if (newTaskTitle.trim()) {
    try {
      const response = await api.post("/tasks", {
        title: newTaskTitle,
        completed: false,
      });
      setTasks([...tasks, response.data]);
      toast.success("Task added successfully!", {
        position: "top-center",
      });
    } catch {
      toast.error("Failed to add task", {
        position: "top-center",
      });
    }
  }
};

export const removeTask = async (
  id: number,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void
) => {
  try {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success("Task removed successfully!", {
      position: "top-center",
    });
  } catch {
    toast.error("Failed to remove task", {
      position: "top-center",
    });
  }
};

export const toggleTaskCompletion = async (
  id: number,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void
) => {
  const taskToToggle = tasks.find((task) => task.id === id);

  if (taskToToggle && !taskToToggle.completed) {
    try {
      await api.patch(`/tasks/${id}`, { completed: true });
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: true } : task
        )
      );
      toast.info("Task marked as completed!", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Error toggling task completion:", error);
      toast.error("Failed to update task", {
        position: "top-center",
      });
    }
  }
};
