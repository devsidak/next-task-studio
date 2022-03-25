import Link from "next/link";
import homeStyles from "../styles/dashboard/main.module.css";

import Container from "../components/index";
import TaskList from "../components/tasks";

function Tasks() {
  return (
    <Container>
      <div>
        <TaskList />
        <Link href="/add">
          <a className={homeStyles.Button}>Add Task</a>
        </Link>
        <Link href="/">
          <a className={homeStyles.Button}>Home</a>
        </Link>
      </div>
    </Container>
  );
}

export default Tasks;
