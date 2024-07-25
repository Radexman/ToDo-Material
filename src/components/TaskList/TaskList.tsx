import { Stack, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import getCurrentDate from "../../helpers/currentDate";

const TaskList = () => {
  const tasks = useAppSelector(state => state.todo.tasks);
  const currentDate = getCurrentDate();

  return (
    <>
      <Stack direction="column" padding={2}>
        <Typography variant="h2">Tasks For Today</Typography>
        <Typography>{currentDate}</Typography>
      </Stack>
      <Stack direction="column" gap={1} padding={1}>
        {tasks.map(task => (
          <Stack
            id={task.id}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              padding: "8px",
              backgroundColor: "darkgray",
              borderRadius: "5px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ textDecoration: task.isDone ? "line-through" : null }}
            >
              {task.name}
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
              {task.date}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default TaskList;
