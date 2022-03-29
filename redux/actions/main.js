/*

Action Creator Functions For Performing State Updates In Redux

Author - Gursidak Singh

*/




import * as typ from "../types";
import localforage from "localforage";

export const setInfo = (usrName) => (dispatch) => {
  dispatch({
    type: typ.SET_NAME,
    payload: {
      name: usrName,
    },
  });
};

export const removeTodo = (id) => (dispatch) => {
  //getting out todos array and pushing new task in array;
  localforage
    .getItem("todos")
    .then(function (tasks) {
      const newTasks = tasks.filter((task) => task.id !== id);
      localforage
        .setItem("todos", [...newTasks])
        .then(() => {
          console.log("todos saved to local storage - ", tasks);
        })
        .catch(function (err) {
          console.log(err);
        });
    })
    .catch(function (err) {
      console.log(err);
    });

  dispatch({
    type: typ.REMOVE_TODO,
    payload: {
      id,
    },
  });
};

export const updateState = (task) => (dispatch) => {
  //updating the completion status of tasks;
  localforage
    .getItem("todos")
    .then(function (tasks) {
      const newTasks = tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        }
        return t;
      });
      localforage
        .setItem("todos", [...newTasks])
        .then(() => {
          console.log("todos saved to local storage - ", tasks);
        })
        .catch(function (err) {
          console.log(err);
        });
    })
    .catch(function (err) {
      console.log(err);
    });

  dispatch({
    type: typ.UPDATE_COMPLETION_STATUS,
    payload: {
      task,
    },
  });
};

export const addTodo = (task) => (dispatch) => {
  var currentDateTime = new Date();
  var resultInSeconds = currentDateTime.getTime();

  const newTask = {
    id: resultInSeconds,
    task,
    completed: false,
  };
  //getting out todos array and pushing new task in array;```````
  localforage
    .getItem("todos")
    .then(function (tasks) {
      localforage
        .setItem("todos", [newTask, ...tasks])
        .then(() => {
          console.log("todos saved to local storage - ", tasks);
        })
        .catch(function (err) {
          console.log(err);
        });
    })
    .catch(function (err) {
      console.log(err);
    });

  dispatch({
    type: typ.ADD_TODO,
    payload: {
      ...newTask,
    },
  });
};

export const SyncFromLocalStorage = () => (dispatch) => {
  localforage
    .getItem("todos")
    .then((todos) => {
      todos === null &&
        localforage.setItem("todos", []).then(() => {
          console.log("todos saved to local storage");
        });

      dispatch({
        type: typ.SYNC_TODOS_FROM_LOCALSTORAGE,
        payload: {
          todos: todos === null ? [] : todos,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
