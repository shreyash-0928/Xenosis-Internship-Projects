import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import "../styles/TaskManager.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [status, setStatus] = useState("Pending");
  const [sortBy, setSortBy] = useState("name"); // Sort by 'name', 'assignedTo', or 'status'
  const [filter, setFilter] = useState(""); // Filter tasks by assigned user or status
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      const tasksArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // Sort tasks based on the selected sortBy value
      const sortedTasks = tasksArray.sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "assignedTo") {
          return a.assignedTo.localeCompare(b.assignedTo);
        } else if (sortBy === "status") {
          return a.status.localeCompare(b.status);
        }
        return 0;
      });

      // Apply filtering based on the filter value
      const filteredTasks = sortedTasks.filter((task) => {
        return (
          task.assignedTo.toLowerCase().includes(filter.toLowerCase()) ||
          task.status.toLowerCase().includes(filter.toLowerCase())
        );
      });

      setTasks(filteredTasks);

      // Display a real-time notification
      setNotification("Tasks updated in real-time!");

      // Clear the notification after 3 seconds
      setTimeout(() => setNotification(""), 3000);
    });

    return () => unsubscribe();
  }, [sortBy, filter]);

  const handleAddTask = async () => {
    if (!newTask || !assignedTo) return;

    const task = {
      name: newTask,
      status: status,
      assignedTo: assignedTo,
    };

    try {
      await addDoc(collection(db, "tasks"), task);
      setNewTask("");
      setAssignedTo("");
      setStatus("Pending");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteDoc(doc(db, "tasks", taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleUpdateTask = async () => {
    if (!editingTask || !assignedTo || !newTask) return;

    const taskRef = doc(db, "tasks", editingTask.id);
    const updatedTask = {
      ...editingTask,
      assignedTo: assignedTo,
      status: status,
      name: newTask,
    };

    try {
      await updateDoc(taskRef, updatedTask);
      setEditingTask(null);
      setAssignedTo("");
      setStatus("Pending");
      setNewTask("");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setAssignedTo(task.assignedTo);
    setStatus(task.status);
    setNewTask(task.name);
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>

      {/* Notification */}
      {notification && <div className="notification">{notification}</div>}

      <div className="task-filters">
        <input
          type="text"
          placeholder="Filter by assigned user or status"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="assignedTo">Sort by Assigned User</option>
          <option value="status">Sort by Status</option>
        </select>
      </div>

      <div className="task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task name"
        />
        <input
          type="text"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          placeholder="Assign task to (email or username)"
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        {editingTask ? (
          <button onClick={handleUpdateTask}>Update Task</button>
        ) : (
          <button onClick={handleAddTask}>Add Task</button>
        )}
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.name}</span>
            <span>{task.assignedTo}</span>
            <span>{task.status}</span>
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
