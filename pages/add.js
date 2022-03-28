import { useRef, useState } from "react";
import styles from "../styles/addTodo/index.module.css";
import homeStyles from "../styles/dashboard/main.module.css";
import { addTodo } from "../redux/actions/main.js";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/index";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useRouter } from "next/router";
import Calendar from "react-calendar";

function Add() {
  const inputRef = useRef(null);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  const [value, onChange] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit - ", inputRef.current.value);
    dispatch(addTodo(inputRef.current.value));
    e.target.reset();
    handleBackToHome();
  };

  const handleBackToHome = () => {
    router.push("/");

  }

  return (
    <Container>
      <div
        className={' flex-col text-center space-y-6'} 
      >
        <div className={"w-full border-2 shadow shadow-gray-700 border-gray-700 rounded-3xl p-4 pb-6 md:p-9"}>
          <h1 className="text-center text-2xl text-slate-300 mb-5">
            Add Tasks <AddTaskIcon className="text-yellow-500" />{" "}
          </h1>
          <form
            className={styles.Form + "  md:px-4 lg:px-9"}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className={" w-full mt-4"}
              ref={inputRef}
              placeholder="Add a Task ..."
            />
            <br />
            <button
              className={
                homeStyles.Button + " self-center mt-6 py-1 md:py-2 px-4 rounded-xl"
              }
              type="submit"
            >
              Add Task
            </button>
          </form>
        </div>
        <div className={'md:hidden'}>
          <Calendar
            className={
              "border-2 p-6 border-gray-700 rounded-3xl shadow shadow-gray-700 "
            }
            onChange={onChange}
            value={value}
          />
        </div>

        <button className={homeStyles.Button + ' md:hidden rounded-md py-1 px-3 text-sm'} onClick={handleBackToHome} >
          {"<-"} Back to Home
        </button>
      </div>
    </Container>
  );
}

export default Add;
