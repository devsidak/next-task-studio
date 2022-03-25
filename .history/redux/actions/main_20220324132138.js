import * as typ from "../types";
import axios from "axios";
import {db} from '../../firebase';
import { collection, getDocs } from "firebase/firestore/lite";
import localforage from "localforage";


export const setInfo = (usrName) => (dispatch) => {
  debugger;
  dispatch({
    type: typ.SET_NAME,
    payload: {
      name: usrName,
    },
  });
};

export const addTodo = (task) => (dispatch) => {
  var currentDateTime = new Date();
  var resultInSeconds=currentDateTime.getTime();

  const newTask = {
    id: resultInSeconds,
    task,
    completed : false,
  }

  localforage.setItem(resultInSeconds.toString() , newTask).then(() => {
    console.log("newTask added to local storage");
  }).catch((err) => {
    console.log(err);
  });

  dispatch({
    type: typ.ADD_TODO,
    payload: {
      ...newTask
    },
  });
};


export const SyncFromLocalStorage = () => (dispatch) => {
  localforage.iterate((value, key, iterationNumber) => {
    console.log(key, value);
    dispatch({
      type: typ.ADD_TODO,
      payload: {
        

export const syncTodos =  (todos) => async (dispatch) => {
  
  var todosList = [];
  try{
    const tasksCol = collection(db, "tasks");
    const tasksSnapshot = await getDocs(tasksCol);
    todosList = tasksSnapshot.docs.map((doc) => doc.data());
    todosList.sort(function (a, b) {
      return b.id - a.id;
     });
    console.log("from action - " , todosList)
  
    }catch(err){
      console.log("err - ", err);
    }

    dispatch({
      type: typ.SYNC_TODOS,
      payload: {
        todos: todosList,
      },
    });
}



// export const updateState = (todos) => (dispatch) => {  
//   dispatch({
//     type: typ.UPDATE_STATE,
//     payload: {
//       todos,
//     },
//   });

// }

export const removeTodo = (id) => (dispatch) => {
  // debugger;
  dispatch( {
    type: typ.REMOVE_TODO,
    payload: {
      id
    },
  });
};


export const updateState = (task) => (dispatch) => {
  debugger;
  dispatch( {
    type: typ.UPDATE_COMPLETION_STATUS,
    payload: {
      task
    }
  })
}