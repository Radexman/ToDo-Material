import { Stack, Typography, Button } from "@mui/material";

import nounCat from "../../assets/noun-cat.svg";
import { useAppSelector } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import {
  completeAllTasks,
  deleteAllTasks,
} from "../../features/todo/todoSlice";
import getCurrentDate from "../../helpers/currentDate";
import Tracker from "../Tracker/Tracker";
import Task from "../Task/Task";

const TaskList = () => {
  const tasks = useAppSelector(state => state.todo.tasks);
  const dispatch = useAppDispatch();
  const currentDate = getCurrentDate();

  const handleCompleteAll = () => {
    dispatch(completeAllTasks());
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllTasks());
  };

  return (
    <>
      <Stack direction="column" padding={2}>
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" gap={2} alignItems="center">
            <Typography variant="h2">Tasks For Today</Typography>
            <Tracker />
          </Stack>
          <Stack direction="row" gap={1}>
            <Button
              onClick={handleCompleteAll}
              variant="contained"
              size="small"
              color="primary"
            >
              Complete All
            </Button>
            <Button
              onClick={handleDeleteAll}
              variant="contained"
              size="small"
              color="secondary"
            >
              Delete All
            </Button>
          </Stack>
        </Stack>
        <Typography data-testid="currentDate">{currentDate}</Typography>
      </Stack>
      <Stack direction="column" gap={1} padding={1}>
        {!tasks || tasks.length === 0 ? (
          <Stack justifyContent="center" alignItems="center">
            <Typography variant="h5" textAlign="center">
              No Tasks
            </Typography>
            <img src={nounCat} alt="Lazy cat" style={{ width: "150px" }} />
          </Stack>
        ) : (
          tasks.map(task => <Task key={task.id} task={task} />)
        )}
      </Stack>
    </>
  );
};

export default TaskList;
