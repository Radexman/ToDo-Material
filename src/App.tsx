import type { ChangeEvent } from "react";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  increment,
  decrement,
  editMultiple,
} from "./features/counter/counterSlice";

const App = () => {
  const [inputValue, setInputValue] = useState(0);

  const dispatch = useAppDispatch();
  const value = useAppSelector(state => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAddSubtractMultiple = () => {
    dispatch(editMultiple(inputValue));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };

  return (
    <Stack gap={2}>
      <Stack direction="column" gap={4}>
        <Typography variant="h1">Demo Redux Counter</Typography>
        <Typography variant="h2">{value}</Typography>
      </Stack>
      <ButtonGroup orientation="vertical">
        <Button onClick={handleIncrement} color="secondary" variant="contained">
          Increment
        </Button>
        <Button onClick={handleDecrement} color="secondary" variant="contained">
          Decrement
        </Button>
      </ButtonGroup>
      <Stack gap={2}>
        <TextField
          onChange={handleInputChange}
          type="number"
          label="Input a number"
        />
        <Button onClick={handleAddSubtractMultiple} variant="contained">
          Add / Subtract
        </Button>
      </Stack>
    </Stack>
  );
};

export default App;
