import styles from "../../../styles/dashboard/main.module.css";
import FirstRow from "./components/FirstRow";
import SecondRow from "./components/SecondRow";
import ThirdRow from "./components/ThirdRow";
import Task from "./components/Task";
import { useSelector } from "react-redux";

function Centerbar() {
  const tasks = useSelector((state) => state.main.todos);
  const renderTasks = () => {
  }


  return (
    <div className={styles.centerbar}>
        <FirstRow />
        <SecondRow />
        {/* <ThirdRow /> */}
  
    </div>
  );
}

export default Centerbar;
