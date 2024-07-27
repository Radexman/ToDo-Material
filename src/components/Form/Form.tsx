import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { Stack, Typography, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import type { Todo } from "../../types/appTypes.types";
import { useAppDispatch } from "../../app/hooks";
import { addTask } from "../../features/todo/todoSlice";

const Form = () => {
  const [taskNameValue, setTaskNameValue] = useState("");
  const [taskDateValue, setTaskDateValue] = useState("");

  const formatCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const formatedMonth = month < 10 ? `0${month + 1}` : month + 1;
    const day = date.getDate();
    const formattedDay = day < 10 ? `0${day}` : day;

    const correctDateFormat = `${year}-${formatedMonth}-${formattedDay}`;

    return correctDateFormat;
  };

  useEffect(() => {
    setTaskDateValue(formatCurrentDate());
  }, []);

  const dispatch = useAppDispatch();

  const handleTaskNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskNameValue(event.target.value);
  };

  const handleTaskDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskDateValue(event.target.value);
    console.log(event.target.value);
  };

  const handleTaskSubmit = () => {
    const todo: Todo = {
      name: taskNameValue,
      date: taskDateValue,
      isDone: false,
      id: uuidv4(),
    };

    dispatch(addTask(todo));
  };

  return (
    <Stack direction="column" gap={4} sx={{ padding: "8px" }}>
      <Typography alignSelf="center" variant="h2">
        Create Tasks For Today
      </Typography>
      <Stack direction="row" gap={2}>
        <TextField
          value={taskNameValue}
          onChange={handleTaskNameChange}
          label="Task Name"
          placeholder="Task Name"
          size="small"
          data-testid="taskName"
        />
        <TextField
          value={taskDateValue}
          onChange={handleTaskDateChange}
          type="date"
          placeholder="date"
          size="small"
          data-testid="taskDate"
        />
        <Button
          onClick={handleTaskSubmit}
          variant="contained"
          disabled={!taskNameValue || !taskDateValue}
        >
          Add Task
        </Button>
      </Stack>
    </Stack>
  );
};

export default Form;
