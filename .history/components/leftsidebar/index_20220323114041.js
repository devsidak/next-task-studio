import Link from "next/link";
import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import styles from '../../styles/dashboard/leftsidebar.module.css';

function Index() {
  return (
    <div  className="flex">
      <div>
        <h3>Task Studio 🔥 </h3>
      </div>
      <div>
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
