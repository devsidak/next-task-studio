import React from 'react';
import Leftbar from "./leftsidebar";
// import Centerbar from "./dashboard/centerGrid/Centerbar";
import Rightbar from "./rightbar";
import styles from '../styles/Home.module.css';


function Index({children}) {
  return (
    <div className={styles.root}>
      <div className={styles.leftsidebar + ' hidden md:flex'}>
          <Leftbar />
          </div>
      <div className={styles.centerbar + ' py-2 px-2'}> 
            {children}
      </div>
      <div className={styles.rightsidebar + ' hidden lg:flex rounded-xl' }>
            <Rightbar />  
        </div>
    </div>
  );
}

export default Index;


