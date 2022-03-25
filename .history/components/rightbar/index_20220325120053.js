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

        <div className={styles.profileContainer + ' py-8 border-2 border-gray-600 rounded-3xl'}>
            <div >
            <Img className='rounded-full' src="/images/1.jpeg" width="100" height="100" />
            </div>
            <h3>Gursidak Singh</h3>
            <p>Software Engineer</p>
        </div>
        <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default Calender;
