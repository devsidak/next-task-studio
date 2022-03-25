import React from "react";
import { useSelector } from "react-redux";
import Task from "../../../tasks/Task";

function FourthRow() {
  const tasks = useSelector((state) => state.main.todos);
  console.log("fourth - ", tasks);
  const renderTasks = () => {
    return tasks.map((task, index) => {
      return <Task key={task.id} task={task} />;
    });
  };
  return <div>{renderTasks()}</div>;
}

export default FourthRow;
