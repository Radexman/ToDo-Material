import type { ChangeEvent } from "react";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Stack,
  Typography,
  TextField,
  Container,
  Paper,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  increment,
  decrement,
  editMultiple,
} from "./features/counter/counterSlice";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
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
          borderRadius: "8px",
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
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
          <Stack gap={4}>
            <Box textAlign="center">
              <Typography variant="h1" gutterBottom>
                Demo Redux Counter
              </Typography>
              <Typography variant="h2" color="primary">
                {value}
              </Typography>
            </Box>
            <ButtonGroup fullWidth>
              <Button
                onClick={handleIncrement}
                color="primary"
                variant="contained"
              >
                Increment
              </Button>
              <Button
                onClick={handleDecrement}
                color="secondary"
                variant="contained"
              >
                Decrement
              </Button>
            </ButtonGroup>
            <Stack direction="row" gap={2} justifyContent="center">
              <TextField
                onChange={handleInputChange}
                type="number"
                label="Input a number"
                variant="outlined"
                size="small"
              />
              <Button
                onClick={handleAddSubtractMultiple}
                variant="contained"
                color="primary"
              >
                Add / Subtract
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
