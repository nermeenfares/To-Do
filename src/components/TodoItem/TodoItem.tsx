import React from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggle, onRemove }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
      <span
        className={`flex-grow text-gray-800 ${task.completed ? 'line-through text-gray-500' : ''}`}
      >
        {task.title}
      </span>
      <div className="flex items-center space-x-2">
        {!task.completed && (
          <button
            onClick={() => onToggle(task.id)}
            className="bg-green-500 text-white rounded-lg py-1 px-3 hover:bg-green-600 transition duration-150"
          >
            Complete
          </button>
        )}
        <button
          onClick={() => onRemove(task.id)}
          className="bg-red-500 text-white rounded-lg py-1 px-3 hover:bg-red-600 transition duration-150"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
