import * as t from "../types";

const main = (
  state = {
    name: "guest",
    todos: [],
  },
  action
) => {
  console.log("payload - ", action.payload);
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
      const tasks = { ...state.todos };
      const updateTask = action.payload.task;
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[$] == updateTask.id) {
          task.completed = updateTask.completed;
        }
      }
      return {
        ...state,
        todos: tasks,
      };
    default:
      return { ...state };
  }
};

export default main;
