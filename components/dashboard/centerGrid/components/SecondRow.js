import React, { useMemo } from "react";
import styles from "../../../../styles/dashboard/main.module.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import TaskIcon from "@mui/icons-material/Task";

function SecondRow() {
  const percentage = 60;
  const tasks = useSelector((state) => state.main.todos);
  const completedTasks = useMemo(() => {
    return tasks.reduce((acc, curr) => {
      if (curr.completed) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, [tasks]);

  return (
    <div
      className={
        styles.secondRowContainer +
        "  flex m-2 flex-col md:flex-row justify-between p-1  "
      }
    >
      <div
        className={
          "flex justify-center items-center m-2 md:m-0 md:mr-3 p-5 rounded-xl"
        }
      >
        <div
          className={"h-full max-w-fit flex-col justify-center text-center"}
        >
          <div
            className={
              "border items-center max-w-fit m-2 max-h-13 p-3 rounded-xl border-yellow-500"
            }
          >
            <TaskIcon className="text-yellow-500 text-3xl" />
          </div>
        </div>
        <div className={styles.contentBox + " text-center"}>
          <h1 className={"text-xl md:text-2xl"}>{completedTasks} Tasks</h1>
          <h3 className={"text-md md:text-lg text-gray-500 py-1"}>Completed</h3>
        </div>

        <div className={styles.progressbarContainer}>
          <CircularProgressbar
            value={Math.round((completedTasks / tasks.length) * 100) || 0}
            text={`${Math.round((completedTasks / tasks.length) * 100) || 0}%`}
            strokeWidth={12}
            styles={buildStyles({
              strokeLinecap: "round",
              textSize: "16px",
              pathTransitionDuration: 0.1,
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
      </div>

      <div
        className={
          "flex justify-center items-center m-2 mt-6 md:m-0 md:ml-3 p-5 rounded-xl"
        }
      >
        <div className={"h-full max-w-fit flex-col justify-center text-center"}>
          <div
            className={
              "border items-center max-h-13 max-w-fit m-2  p-3 rounded-xl border-yellow-500"
            }
          >
            <PendingActionsIcon className="text-yellow-500 text-3xl" />
          </div>
        </div>
        <div className={styles.contentBox + " text-center"}>
          <h1 className={"text-lg md:text-2xl"}>
            {tasks.length - completedTasks} Tasks
          </h1>
          <h3 className={"text-md md:text-lg text-gray-500 py-1"}>Pending</h3>
        </div>

        <div className={styles.progressbarContainer}>
          <CircularProgressbar
            value={
              Math.round(
                ((tasks.length - completedTasks) / tasks.length) * 100
              ) || 0
            }
            text={`${
              Math.round(
                ((tasks.length - completedTasks) / tasks.length) * 100
              ) || 0
            }%`}
            strokeWidth={12}
            styles={buildStyles({
              strokeLinecap: "round",
              textSize: "16px",
              pathTransitionDuration: 0.9,
              trailColor: "#d6d6d6",
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default SecondRow;
