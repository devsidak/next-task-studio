import Link from "next/link";
import homeStyles from "../styles/dashboard/main.module.css";
import Container from "../components/index";
import TaskList from "../components/tasks";

function Tasks() {
  return (
    <Container>
      <div>
        <TaskList />

      </div>
    </Container>
  );
}

export default Tasks;
