import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../../types/appTypes.types";

export interface TodoState {
  tasks: Todo[];
}

const initialState: TodoState = {
  tasks: [
    {
      name: "Clean room",
      date: "2024-07.25",
      isDone: false,
      id: "1",
    },
    {
      name: "Walk the dog",
      date: "2024-07.25",
      isDone: false,
      id: "2",
    },
    {
      name: "Read book",
      date: "2024-07.25",
      isDone: false,
      id: "3",
    },
    {
      name: "Workout",
      date: "2024-07.25",
      isDone: false,
      id: "4",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Todo>) => {
      state.tasks.push(action.payload);
    },
    completeTask: (state, action: PayloadAction<string>) => {
      state.tasks.map(task =>
        task.id === action.payload ? (task.isDone = true) : task,
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, completeTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
