import Centerbar from "../components/dashboard/centerGrid/Centerbar";
import styles from '../styles/Home.module.css';
import Container from '../components/index';
import {useEffect} from 'react';


function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Home";
    SyncFromLocalStorage

  }, []);

  return (
    <Container>
      <Centerbar />
    </Container>
 
  );
}

export default Index;


