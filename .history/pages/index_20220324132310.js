import Centerbar from "../components/dashboard/centerGrid/Centerbar";
import styles from '../styles/Home.module.css';
import Container from '../components/index';
import {useEffect} from 'react';


function Index() {

  useEffect(() => {
    document.title = "Home";
    
  }, []);

  return (
    <Container>
      <Centerbar />
    </Container>
 
  );
}

export default Index;


