import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../../types/appTypes.types";

export interface TodoState {
  tasks: Todo[];
  taskBeingEdited: Todo | null;
}

const initialState: TodoState = {
  tasks: [
    {
      name: "Clean room",
      date: "2024-07-25",
      isDone: false,
      id: "1",
    },
    {
      name: "Walk the dog",
      date: "2024-07-25",
      isDone: false,
      id: "2",
    },
    {
      name: "Read book",
      date: "2024-07-25",
      isDone: false,
      id: "3",
    },
    {
      name: "Workout",
      date: "2024-07-25",
      isDone: false,
      id: "4",
    },
  ],
  taskBeingEdited: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Todo>) => {
      state.tasks.push(action.payload);
    },
    startEditTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        state.taskBeingEdited = task;
      }
    },
    saveTask: (state, action: PayloadAction<Todo>) => {
      state.tasks = state.tasks.map(task =>
        task.id === action.payload.id ? action.payload : task,
      );
      state.taskBeingEdited = null;
    },
    cancelEditTask: state => {
      state.taskBeingEdited = null;
    },
    completeTask: (state, action: PayloadAction<string>) => {
      state.tasks.map(task =>
        task.id === action.payload ? (task.isDone = true) : task,
      );
    },
    completeAllTasks: state => {
      state.tasks = state.tasks.map(task => ({ ...task, isDone: true }));
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    deleteAllTasks: state => {
      state.tasks = [];
    },
  },
});

export const {
  addTask,
  startEditTask,
  saveTask,
  cancelEditTask,
  completeTask,
  completeAllTasks,
  deleteTask,
  deleteAllTasks,
} = todoSlice.actions;
export default todoSlice.reducer;
