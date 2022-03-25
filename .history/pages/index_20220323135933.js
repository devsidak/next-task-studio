import Leftbar from "../components/leftsidebar";
import Centerbar from "../components/dashboard/centerGrid/Centerbar";
import Rightbar from "../components/dashboard/rightbar/Rightbar";
import styles from '../styles/Home.module.css';
import Container from '../components/index';


function Index() {
  return (
    <div className={styles.root}>
      <div className={styles.leftsidebar + ' hidden md:flex'}>
          <Leftbar />
          </div>
      <div className={styles.centerbar + ' py-2 px-2'}> 
            <Centerbar />
      </div>
      <div className={styles.rightsidebar + ' hidden lg:flex' }>
            <Rightbar />  
        </div>
    </div>
  );
}

export default Index;


