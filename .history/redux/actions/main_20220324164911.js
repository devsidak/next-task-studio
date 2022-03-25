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
  var tod
  //getting out todos array;
  localforage.getItem('todos')

  console.log("todos from localstorage", todos);
  //adding new task to todos array;
  // todos.push(newTask);
  // //saving todos array to local storage;
  // localforage.setItem('todos', todos).then(() => {
  //   console.log('todos saved to local storage');
  // });


  // localforage.setItem(resultInSeconds.toString() , newTask).then(() => {
  //   console.log("newTask added to local storage");
  // }).catch((err) => {
  //   console.log(err);
  // });

  // dispatch({
  //   type: typ.ADD_TODO,
  //   payload: {
  //     ...newTask
  //   },
  // });
};


export const SyncFromLocalStorage = () => (dispatch) => {

  localforage.getItem('todos').then((todos) => {
    todos===null && localforage.setItem('todos', []).then(() => {
      console.log('todos saved to local storage');
    });

    dispatch({
      type: typ.SYNC_TODOS_FROM_LOCALSTORAGE,
      payload: {
        todos : todos === null?[]:todos
      },
    });
  }).catch((err) => {
    console.log(err);
  });
};  


 

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