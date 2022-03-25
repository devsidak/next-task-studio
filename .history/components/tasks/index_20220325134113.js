import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateState,
  removeTodo,
  SyncFromLocalStorage,
} from "../../redux/actions/main";
import Task from "./Task";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";

function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.main.todos);
  const tasks = useMemo(() => {
    return [];
  }, []);

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
    return tasks.map((task, index) => {
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
    });
  };

  const renderNotasksView = () => {
    return (
      <div
       
      >
        <AssignmentLateIcon className={"text-9xl text-slate-400 "} />
        <h3 className={"text-center text-xl text-slate-400"}>
          No Tasks For Today
        </h3>
        <h3 className={"text-center text-md p-2 text-slate-400"}>
          Enjoy Your Day!
        </h3>
      </div>
    );
  };

  return (
    <div className={'py-6 m-4 min-h-full  align-middle flex-center text-center border-2 border-gray-700 rounded-3xl'}>
    {tasks.length !== 0 ? (
        <ul>{renderTasks()}</ul>
      ) : (
        <>{renderNotasksView()}</>
      )}
    </div>
  );
}

export default Tasks;
