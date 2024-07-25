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
      date: "25.07.2024",
      isDone: true,
      id: "1",
    },
    {
      name: "Walk the dog",
      date: "26.07.2024",
      isDone: false,
      id: "2",
    },
    {
      name: "Read book",
      date: "27.07.2024",
      isDone: true,
      id: "3",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
