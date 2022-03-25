import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Calendar from "react-calendar";
import styles from '../../styles/dashboard/rightsidebar.module.css';
import Img from 'next/image';

function Calender() {
  const [value, onChange] = React.useState(new Date());

  return (
    <div className={styles.container + ' py-1 px-6'}>

        <div className={styles.profileContainer}>
            <img src="/" />
        </div>
        <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default Calender;