import React from "react";
import styles from "../../../../styles/dashboard/main.module.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

function SecondRow() {
  const percentage = 60;
  const tasks = useSelector((state) => state.main.todos);
  const completedPrecentage = ((tasks.filter((task) => task.completed)).length / tasks.length) * 100;
  const uncompletedPrecentage = 100 - completedPrecentage;
  return (
    <div className={styles.secondRowContainer + " "}>
      <div className={"mr-3 p-5 rounded-xl"}>
        <div className={styles.contentBox + ' text-center'}>
            <h1 className={'text-xl md:text-2xl'}>{completedPrecentage==} Tasks</h1>
            <h3 className={'text-md md:text-lg text-gray-500 py-1'}>Completed</h3>

        </div>

        <div className={styles.progressbarContainer}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
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

      <div className={" ml-3 p-5 rounded-xl"}>
      <div className={styles.contentBox + ' text-center'}>
            <h1 className={'text-xl md:text-2xl'}>{uncompletedPrecentage} Tasks</h1>
            <h3 className={'text-md md:text-lg text-gray-500 py-1'}>Pending</h3>

        </div>

        <div className={styles.progressbarContainer}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
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
