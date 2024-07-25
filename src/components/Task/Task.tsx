import { Stack, Typography, IconButton } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import type { Todo } from "../../types/appTypes.types";
import { completeTask, deleteTask } from "../../features/todo/todoSlice";

type TaskProps = {
  task: Todo;
};

const Task = ({ task }: TaskProps) => {
  const { name, date, isDone, id } = task;

  const dispatch = useAppDispatch();

  const handleCompleteClick = (id: string) => {
    dispatch(completeTask(id));
  };

  const handleDeleteClick = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <Stack
      data-testid="todo"
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
        sx={{ textDecoration: isDone ? "line-through" : null }}
      >
        {name}
      </Typography>
      <Stack
        gap={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          data-testid="data"
          sx={{ fontWeight: 600, fontSize: "12px" }}
        >
          {date}
        </Typography>
        <IconButton
          onClick={() => handleCompleteClick(id)}
          aria-label="finish-task"
          size="small"
        >
          {isDone ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>
        <IconButton
          onClick={() => handleDeleteClick(id)}
          aria-label="delete-task"
          size="small"
        >
          <DeleteOutlineIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Task;
