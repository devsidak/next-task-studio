import Link from "next/link";
import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AddIcon from '@mui/icons-material/Add';

import styles from '../../styles/dashboard/leftsidebar.module.css';


function Index() {
  return (
    <div  className={styles.container +  " flex-col "}>
      <div className={styles.logoContainer}>
        <h3>Task Studio 🔥 </h3>
      </div>
      <div className={styles.listContainer + ' flex-1'}>
        <div>
            <DashboardIcon />
            <Link href="/tasks">
                <a>Dashboard</a>
            </Link>
        </div>
        <div>
            <DashboardIcon />
            <Link href="/tasks">
                <a>Tasks</a>
            </Link>
        </div>
        <div>
            <DashboardIcon />
            <Link href="/tasks">
                <a>Tasks</a>
            </Link>
        </div>
        <div>
            <DashboardIcon />
            <Link href="/tasks">
                <a>Tasks</a>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
