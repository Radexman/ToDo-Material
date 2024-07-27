import { Stack, Typography } from "@mui/material";

import { useAppSelector } from "../../app/hooks";

const Tracker = () => {
  const tasks = useAppSelector(state => state.todo.tasks);

  const tasksLength = tasks.length;

  return (
    <Stack
      data-testid="tracker"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0AB6AB",
        width: "20px",
        height: "20px",
        padding: "4px",
        paddingTop: "6px",
        borderRadius: "50%",
      }}
    >
      <Typography>{Number(tasksLength)}</Typography>
    </Stack>
  );
};

export default Tracker;
