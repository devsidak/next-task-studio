import { useRef } from "react";
import styles from "../styles/addTodo/index.module.css";
import homeStyles from "../styles/dashboard/main.module.css";
import { addTodo, syncTodos } from "../redux/actions/main.js";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Container from "../components/index";

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
      <div className={"mt-10 "}>
        <form className={""} onSubmit={handleSubmit}>
          <input type="text" className={'w-full'} ref={inputRef} placeholder="Add a Task ..." /> <br/>
          <button className={homeStyles. + ' '} type="submit">
            Add Task
          </button>
        </form>

        <Link href="/tasks">
          <a>Tasks</a>
        </Link>
      </div>
    </Container>
  );
}

export default Add;
