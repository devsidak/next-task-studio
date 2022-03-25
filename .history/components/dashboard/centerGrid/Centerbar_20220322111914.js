import styles from "../../../styles/dashboard/main.module.css";
import FirstRow from "./components/FirstRow";
import SecondRow from "./components/SecondRow";
import ThirdRow from "./components/ThirdRow";


function Centerbar() {
  return (
    <div className={styles.centerbar}>
        <FirstRow />
        <SecondRow />
        {/* <ThirdRow /> */}
        <Tas
  
    </div>
  );
}

export default Centerbar;
