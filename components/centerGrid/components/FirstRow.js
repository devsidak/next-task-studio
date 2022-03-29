import React from "react";
import styles from "../../../styles/dashboard/main.module.css";
import { useRouter } from "next/router";

function FirstRow() {
  const router = useRouter();
  const handleGreeting = () => {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12 && curHr >= 6) {
      return "Good Morning 🌞";
    } else if (curHr < 17 && curHr >= 12) {
      return "Good Afternoon ☀️";
    } else if (curHr < 20 && curHr >= 17) {
      return "Good Evening 🌤";
    } else {
      return "Lights out ✨";
    }
  };
  return (
    <div className={styles.FirstRowContainer}>
      <div>
        <h2 className={"text-xl md:text-4xl"}>{handleGreeting()}</h2>
      </div>

      <div>
        <button
          onClick={() => {
            router.push("/add");
          }}
          className={
            styles.Button +
            " py-1 px-2 md:py-2 md:px-4 border-0 rounded-lg text-md "
          }
        >
          + Add Task
        </button>
      </div>
    </div>
  );
}

export default FirstRow;
