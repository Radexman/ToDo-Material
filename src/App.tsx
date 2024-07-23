import type { ChangeEvent } from "react";
import { useState } from "react";
import { Container, Paper, ThemeProvider, createTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  increment,
  decrement,
  editMultiple,
} from "./features/counter/counterSlice";
import Heading from "./components/Heading/Heading";
import Form from "./components/Form/Form";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0AB6AB",
    },
    secondary: {
      main: "#201F1F",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          maxWidth: "200px",
        },
      },
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <Container sx={{ padding: "4px" }}>
        <Paper elevation={3} sx={{ borderRadius: "10px" }}>
          <Heading />
          <Form />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
