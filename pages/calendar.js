import Centerbar from "../components/dashboard/centerGrid/Centerbar";
import styles from '../styles/Home.module.css';
import Container from '../components/index';
import Calendar from "react-calendar";
import { useState } from "react";


function Index() {
    const [value, onChange] = useState(new Date());

  return (
    <Container>
      <Calendar
        className={
          "border-2 p-6 border-gray-700 rounded-3xl shadow shadow-gray-700 "
        }
        onChange={onChange}
        value={value}
      />    </Container>
 
  );
}

export default Index;


