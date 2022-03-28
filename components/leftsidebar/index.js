import Link from "next/link";
import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AddIcon from '@mui/icons-material/Add';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import styles from '../../styles/dashboard/leftsidebar.module.css';
import {useRouter} from 'next/router'

function Index() {

  const router = useRouter();
  const currentPath = router.route;
  console.log(currentPath)
  return (
    <div  className={styles.container +  " flex-col "}>
      <div className={styles.logoContainer}>
        <h3>Task Studio 🔥 </h3>
      </div>
      <div className={styles.listContainer + ` flex-1 ` }>
        <div className={currentPath === '/' && styles.activeLink} >
            <DashboardIcon className='icons' />
            <Link href="/">
                <a>Dashboard</a>
            </Link>
        </div>
        <div className={currentPath === '/tasks' && styles.activeLink}>
            <FormatListNumberedIcon />
            <Link href="/tasks">
                <a>Tasks</a>
            </Link>
        </div>
        <div className={currentPath === '/add' && styles.activeLink}>
            <AddIcon />
            <Link href="/add">
                <a>Add Task</a>
            </Link>
        </div>
        <div className={currentPath === '/calendar' && styles.activeLink}>
            <DateRangeOutlinedIcon />
            <Link href="/calendar">
                <a>Calendar</a>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
