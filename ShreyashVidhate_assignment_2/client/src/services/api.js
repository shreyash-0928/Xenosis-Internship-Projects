import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api";

// Fetch all tasks
export const getTasks = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/tasks`);
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// Create a new task
export const createTask = async (task) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/tasks`, task);
    return data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

// Update an existing task
export const updateTask = async (id, task) => {
  try {
    const { data } = await axios.put(`${API_BASE_URL}/tasks/${id}`, task);
    return data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

// Delete a task
export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/tasks/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
