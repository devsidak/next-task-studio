import styles from "../../../styles/dashboard/main.module.css";
import FirstRow from "./components/FirstRow";
import SecondRow from "./components/SecondRow";
import ThirdRow from "./components/ThirdRow";
import Task from "./components/Task";

function Centerbar()

  const render = function

  return (
    <div className={styles.centerbar}>
        <FirstRow />
        <SecondRow />
        {/* <ThirdRow /> */}
  
    </div>
  );
}

export default Centerbar;