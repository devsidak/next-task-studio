import styles from "../../../styles/dashboard/main.module.css";
import FirstRow from "./components/FirstRow";
import FourthRow from "";
import SecondRow from "./components/SecondRow";
import ThirdRow from "./components/ThirdRow";


function Centerbar() {
  return (
    <div className={styles.centerbar}>
        <FirstRow />
        <SecondRow />
        {/* <ThirdRow /> */}
        <FourthRow />
  
    </div>
  );
}

export default Centerbar;
