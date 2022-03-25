import { useRouter } from 'next/router';
import React from 'react'
import Centerbar from '../components/dashboard/centerGrid/Centerbar';
import Leftbar from '../components/leftsidebar/index';
import Rightbar from '../components/dashboard/rightbar/Rightbar';
import styles from '../styles/Home.module.css';


function Page() {
  const router = useRouter();
  const page = router.query.page;

  const renderView = () => {
    switch (page) {
      case 'tasks':
        return <Centerbar />
      case 'projects':
        return <div>Projects</div>
      case 'notes':
        return <div> Notes </div>
      case 'settings':
        return <div> Settings </div>
      default:
        return <Centerbar />
    }
  }
  return (
    <div className={styles.root}>
    <div className={styles.leftsidebar + ' hidden md:flex'}>
        <Leftbar />
        </div>
    <div className={styles.centerbar + ' py-2 px-2'}> 
          {/* <Centerbar /> */}
          {renderView()}
    </div>
    <div className={styles.rightsidebar + ' hidden md:flex' }>
          <Rightbar />  
      </div>
  </div>
  )
}

export default Page;