import React, { useState } from 'react';
import Navbar from './Navbar';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Navbar />
      <h2 className="text-center mt-4">Todo List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((t, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {t}
            <button className="btn btn-danger btn-sm" onClick={() => removeTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;