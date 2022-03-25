import { useRouter } from 'next/router';
import React from 'react'
import Centerbar from '../components/dashboard/centerGrid/Centerbar';
import Leftbar from '../components/dashboard/leftbar/Leftbar';

function Page() {
  const router = useRouter();
  const page = router.query.page;
  return (
    <div className={styles.root}>
    <div className={styles.leftsidebar + ' hidden md:flex'}>
        <Leftbar />
        </div>
    <div className={styles.centerbar + ' py-2 px-2'}> 
          <Centerbar />
    </div>
    <div className={styles.rightsidebar + ' hidden md:flex' }>
          <Rightbar />  
      </div>
  </div>
  )
}

export default Page