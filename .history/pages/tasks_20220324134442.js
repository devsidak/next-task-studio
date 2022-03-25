import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import homeStyles from "../styles/dashboard/main.module.css";
import { db } from "../firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { syncTodos, updateState, removeTodo } from "../redux/actions/main";
import Task from "../components/tasks";
import { useRouter } from "next/router";
import Container from "../components/index";

function Tasks() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.main.todos);
  console.log("state", state);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  React.useEffect(() => {
    if (.length === 0) {
      // dispatch(updateState(tasks));
      // dispatch(syncTodos());
    }
  }, []);

  const removeTodoHandler = (id) => {
    setLoading(true);
    dispatch(removeTodo(id));
    // const tasksCol = collection(db, "tasks");
    // const docId = [];
    // try {
    //   const q = query(tasksCol, where("id", "==", id));
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach((doc) => {
    //     docId.push(doc.id);
    //     console.log(doc.id, " => ", docId);
    //   });
    //   const deleteDocRef = doc(db, "tasks", docId[0]);
    //   await deleteDoc(deleteDocRef);
    // } catch (error) {
    //   console.log(error);
    // }
    setLoading(false);
  };

  const udpateCompletionStatus = (e, task) => {
    setLoading(true);
    const nextStateTask = { ...task, completed: e.target.checked };
    dispatch(updateState(nextStateTask));
    //   const tasksCol = collection(db, "tasks");
    //   var docId;
    //   try {
    //     const q = query(tasksCol, where("id", "==", id));
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //       docId = doc.id;
    //       console.log(doc.id, " => ", docId);
    //     });
    //     const updateRef = doc(db, "tasks", docId);
    //     await setDoc(updateRef, { completed: completionStatus }, { merge: true });
    //   } catch (error) {
    //     console.log(error);
    //   }
    setLoading(false);
  };

  // const SubmitEditedChanges = async () => {
  //   setLoading(true);
  //   const tasksCol = collection(db, "tasks");
  //   var docId;
  //   try {
  //     const q = query(tasksCol, where("id", "==", editTaskId));
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       docId = doc.id;
  //     });
  //     debugger;
  //     const updateRef = doc(db, "tasks", docId);
  //     await setDoc(updateRef, { task: editTaskValue }, { merge: true });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setLoading(false);
  //   setEditBox(!editBox);
  //   fetchTodos();
  // };
  const todos = useSelector((state) => state.main.todos);
  console.log("todos - ", todos);
  // update the state with the current todos from backend;
  const renderTasks = () => {
    console.log("tasks ---------> ", todos);
    return todos.map((task, index) => {
      return (
        <Task
          key={task.id}
          task={task}
          udpateCompletionStatus={udpateCompletionStatus}
          // handleEditTask={handleEditTask}
          loading={loading}
          setLoading={setLoading}
          removeTodo={removeTodoHandler}
        />
      );
    });
  };

  return (
    <Container>
      <div>
        <ul>{renderTasks()}</ul>

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
