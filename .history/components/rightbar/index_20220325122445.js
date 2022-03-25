import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Calendar from "react-calendar";
import styles from '../../styles/dashboard/rightsidebar.module.css';
import Img from 'next/image';

function Calender() {
  const [value, onChange] = React.useState(new Date());

  return (
    <div className={styles.container + ' py-1 px-6 mt-4'}>

        <div className={styles.profileContainer + ' py-3 mb-6'}>
            <div >
            <Img className='rounded-full ' src="/images/1.jpeg" width="100" height="100" />
            </div>
            <h3>Gursidak Singh</h3>
            <p>Software Engineer</p>
        </div>
        <Calendar className={'border-2 p-6 border-gray-700 rounded-3xl shadow shadow-gray-700 '} onChange={onChange} value={value} />

        <div className={'mt-14 px-2'}>
          <Img className='rounded-xl' src="/images/logo.jpg" width="400" height="90" />
          <p className='align' >© All Rights Reserved </p>
        </div>

    </div>
  );
}

export default Calender;
