import styles from "../../../styles/dashboard/main.module.css";
import FirstRow from "./components/FirstRow";
import FourthRow from "../../tasks";
import SecondRow from "./components/SecondRow";
import ThirdRow from "./components/ThirdRow";


function Centerbar() {
  return (
    <div className={styles.centerbar}>
        <FirstRow />
        <SecondRow />
        {/* <ThirdRow /> */}
        <div className={'py-6 m-4 min-h-full  align-middle flex-center text-center border-2 border-gray-700 rounded-3xl h-96'}>
        <FourthRow />
        </div>
  
    </div>
  );
}

export default Centerbar;
