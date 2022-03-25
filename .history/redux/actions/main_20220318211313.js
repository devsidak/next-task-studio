import * as typ from "../types";
import axios from "axios";
import {db} from '../../firebase';
import { collection, getDocs } from "firebase/firestore/lite";


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
  debugger;

  dispatch({
    type: typ.ADD_TODO,
    payload: {
      id: resultInSeconds,
      task,
      completed : false,
    },
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



export const updateState = (todos) => (dispatch) => {  
  dispatch({
    type: typ.UPDATE_STATE,
    payload: {
      todos,
    },
  });

}

export const removeTodo = (id) => (dispatch) => {
  debugger;
    return {
    type: typ.REMOVE_TODO,
    payload: {
      id
    },
  };
};
