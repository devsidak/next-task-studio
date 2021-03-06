import styles from "../../styles/tasks/index.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

function Task({
  task,
  loading,
  setLoading,
  removeTodo,
  udpateCompletionStatus,
}) {
  return (
    <li className={styles.task + " p-9 m-4 "}>
      <div className={""}>
        <input
          disabled={loading}
          onChange={(e) => udpateCompletionStatus(e, task)}
          checked={task.completed}
          className={styles.checkbox}
          type="checkbox"
        />
      </div>
      <div>
        <p className={task.completed === true && "line-through"}>{task.task}</p>
      </div>
      <div className={styles.taskButtonBox}>
        <button
          disabled={loading}
          onClick={() => {
            removeTodo(task.id);
          }}
        >
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
}

export default Task;
