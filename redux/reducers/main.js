/*

  Reducer Functions For Performing State Updates In Redux State as per the action Types;

Author - Gursidak Singh

*/


import * as t from "../types";
const main = (
  state = {
    name: "guest",
    todos: [],
  },
  action
) => {
  console.log("payload - ", action.type);
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
        name: action.payload.name,
      };

    case t.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case t.UPDATE_STATE:
      return {
        ...state,
        todos: [...action.payload.todos],
      };
    case t.SYNC_TODOS:
      return {
        ...state,
        todos: [...action.payload.todos],
      };

    case t.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case t.UPDATE_COMPLETION_STATUS:
      debugger;
      const tasks = [...state.todos];
      const updateTask = action.payload.task;
      console.log(updateTask, tasks);
      const index = tasks.findIndex((task) => task.id === updateTask.id);
      tasks[index] = updateTask;
      return {
        ...state,
        todos: tasks,
      };
    case t.SYNC_TODOS_FROM_LOCALSTORAGE:
      return {
        ...state,
        todos: [...action.payload.todos],
      };
    default:
      return { ...state };
  }
};

export default main;
