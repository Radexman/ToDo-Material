import { Stack, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import getCurrentDate from "../../helpers/currentDate";
import Task from "../Task/Task";

const TaskList = () => {
  const tasks = useAppSelector(state => state.todo.tasks);
  const currentDate = getCurrentDate();

  return (
    <>
      <Stack direction="column" padding={2}>
        <Typography variant="h2">Tasks For Today</Typography>
        <Typography data-testid="currentDate">{currentDate}</Typography>
      </Stack>
      <Stack direction="column" gap={1} padding={1}>
        {!tasks || tasks.length === 0 ? (
          <Typography variant="h5" textAlign="center">
            No Tasks Yet
          </Typography>
        ) : (
          tasks.map(task => <Task key={task.id} task={task} />)
        )}
      </Stack>
    </>
  );
};

export default TaskList;
