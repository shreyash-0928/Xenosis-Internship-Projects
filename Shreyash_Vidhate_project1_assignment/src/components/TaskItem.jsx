// src/components/TaskItem.jsx
const TaskItem = ({ task }) => (
  <li>
    {task.name} - {task.status}
  </li>
);

export default TaskItem;
