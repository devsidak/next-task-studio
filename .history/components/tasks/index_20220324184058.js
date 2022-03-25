import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import homeStyles from "../styles/dashboard/main.module.css";
import {updateState, removeTodo, SyncFromLocalStorage } from "../redux/actions/main";
import Task from "./Task";
import Container from "../components/index";

function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.main.todos);
  console.log("state", tasks);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (tasks.length === 0) {
      console.log("syncing in tasks");
      dispatch(SyncFromLocalStorage());
    }
  }, [dispatch, tasks]);


  const removeTodoHandler = (id) => {
    setLoading(true);
    dispatch(removeTodo(id));
    setLoading(false);
  };

  const udpateCompletionStatus = (e, task) => {
    setLoading(true);
    const nextStateTask = { ...task, completed: e.target.checked };
    dispatch(updateState(nextStateTask));
    setLoading(false);
  };

  const todos = useSelector((state) => state.main.todos);
  console.log("todos - ", todos);
  
  const renderTasks = () => {
    console.log("tasks ---------> ", todos);
    return tasks.map((task, index) => {
      return (
        <Task
          key={task.id}
          task={task}
          udpateCompletionStatus={udpateCompletionStatus}
          // handleEditTask={handleEditTask}
          loading={loading}
          setLoading={setLoading}
          removeTodo={removeTodoHandler}
        />
      );
    });
  };

  return (
    <Container>
      <div>
        <ul>{renderTasks()}</ul>
      </div>
    </Container>
  );
}

export default Tasks;

