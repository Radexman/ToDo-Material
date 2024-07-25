import { Container, Paper, ThemeProvider, createTheme } from "@mui/material";
import Heading from "./components/Heading/Heading";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";

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
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ padding: "4px" }}>
        <Paper elevation={3} sx={{ borderRadius: "10px" }}>
          <Heading />
          <Form />
          <TaskList />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
