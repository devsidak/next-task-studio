import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateState, removeTodo, SyncFromLocalStorage } from "../../redux/actions/main";
import Task from "./Task";

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


  const renderTasks = () => {
    if(tasks.length!==0) {return tasks.map((task, index) => {
      return (
        <Task
          key={task.id}
          task={task}
          udpateCompletionStatus={udpateCompletionStatus}
          loading={loading}
          setLoading={setLoading}
          removeTodo={removeTodoHandler}
        />
      );
    })

  };

  return (
      <div>
        <ul>{renderTasks()}</ul>
      </div>
  );
}

export default Tasks;
