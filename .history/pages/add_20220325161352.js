import { useRef } from "react";
import styles from "../styles/addTodo/index.module.css";
import homeStyles from "../styles/dashboard/main.module.css";
import { addTodo, syncTodos } from "../redux/actions/main.js";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Container from "../components/index";
import AddTaskIcon from '@mui/icons-material/AddTask';

function Add() {
  const inputRef = useRef(null);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit - ", inputRef.current.value);
    dispatch(addTodo(inputRef.current.value));
    e.target.reset();
  };

  return (
    <Container>
      <div className={"w-full border-2 shadow shadow-gray-700 border-gray-700 rounded-3xl p-6   "}>
        <h1 className="text-center text-2xl text-slate-300 mb-5">Add Tasks <AddTaskIcon className="text-yellow-"/> </h1>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <input type="text" className={' w-full'} ref={inputRef} placeholder="Add a Task ..." /> <br/>
          <button className={homeStyles.Button + ' self-center mt-6'} type="submit">
            Add Task
          </button>
        </form>
      </div>
    </Container>
  );
}

export default Add;