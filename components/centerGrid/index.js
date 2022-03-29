
/*

All Componentsof Dashboard Center Bar  
Author - Gursidak Singh

*/


import styles from "../../styles/dashboard/main.module.css";
import FirstRow from "./components/FirstRow";
import ThirdRow from "../tasks";
import SecondRow from "./components/SecondRow";
import { useRouter } from "next/router";

function Centerbar() {
  const router = useRouter();
  return (
    <div className={styles.centerbar + " flex-col max-h-screen space-y-7 "}>
      <FirstRow />
      <SecondRow />
      <div
        className={
          styles.Fourthcontainer +
          " p-2 m-4 min-h-full  align-middle flex-center text-center border-2 border-gray-700 rounded-3xl"
        }
      >
        <div className={"flex justify-between"}>
          <h1 className="text-left py-5 px-5 text-2xl">Tasks</h1>
          <button
            onClick={() => router.push("/tasks")}
            className={
              styles.Button +
              " self-center text-sm py-1 px-2 mr-2 rounded font-normal	"
            }
          >
            All Tasks
          </button>
        </div>

        <div className={styles.taskContainer}>
          <ThirdRow />
        </div>
      </div>
    </div>
  );
}

export default Centerbar;
