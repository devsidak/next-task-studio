import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import homeStyles from "../styles/dashboard/main.module.css";
import { db } from "../firebase";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore/lite";
import { syncTodos, updateState, removeTodo } from "../redux/actions/main";
import Task from "../components/tasks";
import {useRouter} from "next/router";


function Tasks({ tasks }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  React.useEffect(() => {
    if (state.main.todos.length === 0) {
      // dispatch(updateState(tasks));
      // dispatch(syncTodos());
    }
}, []);

  const removeTodoHandler =  (id) => {
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

  const udpateCompletionStatus =  (e, task) => {
    setLoading(true);
    const nextStateTask = {...task}
    dispatch(updateState(task));
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
    return todos.map((task, index) => {
      return (
        // <li key={index}>{task.task}</li>eu
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
    <div>
      <h1 style={{ margin: "50px auto" }}>Tasks</h1>
      <ul>{renderTasks()}</ul>

      <Link href="/add">
        <a className={homeStyles.Button}>Add Task</a>
      </Link>
    </div>
  );
}

export default Tasks;

// export const getStaticProps = async (ctx) => {
//   var todosList = {};
//   console.log(
//     "----------------------------------------------------------------"
//   );
//   try {
//     const tasksCol = collection(db, "tasks");
//     const tasksSnapshot = await getDocs(tasksCol);
//     todosList = tasksSnapshot.docs.map((doc) => doc.data());
//     todosList.sort(function (a, b) {
//       return b.id - a.id;
//     });
//   } catch (err) {
//     console.log("err - ", err);
//   }

//   console.log(
//     "----------------------------------------------------------------"
//   );

//   return {
//     props: {
//       tasks: todosList,
//     },
//     // revalidate : 10
//   };
// };
