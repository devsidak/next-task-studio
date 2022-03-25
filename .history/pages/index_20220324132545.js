import Centerbar from "../components/dashboard/centerGrid/Centerbar";
import styles from '../styles/Home.module.css';
import Container from '../components/index';
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { SyncFromLocalStorage } from "../redux/actions/main";


function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Home";
    dispatch(SyncFromLocalStorage());

  }, [dispatch]);

  return (
    <Container>
      <Centerbar />
    </Container>
 
  );
}

export default Index;


