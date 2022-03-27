import React from 'react';
import Leftbar from "./leftsidebar";
// import Centerbar from "./dashboard/centerGrid/Centerbar";
import Rightbar from "./rightbar";
import styles from '../styles/Home.module.css';


function Index({children}) {
  return (
    <div className={styles.root + ' pt-3 md:p-5 '}>
      <div className={styles.leftsidebar + ' hidden md:flex'}>
          <Leftbar />
          </div>
      <div className={styles.centerbar + ' md:py-2 md:px-6 max-h-full'}> 
            {children}
      </div>
      <div className={styles.rightsidebar + ' hidden lg:flex rounded-3xl' }>
            <Rightbar />  
        </div>
    </div>
  );
}

export default Index;


