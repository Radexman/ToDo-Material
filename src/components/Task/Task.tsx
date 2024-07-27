import { Stack, Typography, IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

import { useAppDispatch } from "../../app/hooks";
import { completeTask, deleteTask } from "../../features/todo/todoSlice";
import type { Todo } from "../../types/appTypes.types";

type TaskProps = {
  task: Todo;
};

const Task = ({ task }: TaskProps) => {
  const { name, date, isDone, id } = task;

  const dispatch = useAppDispatch();

  const handleCompleteClick = (id: string) => {
    dispatch(completeTask(id));
  };

  const handleEditClick = (task: Todo) => {};

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
          aria-label="finish task"
          data-testid="finishButton"
          size="small"
        >
          {isDone ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>
        <IconButton
          onClick={() => handleEditClick(task)}
          aria-label="update task"
          data-testid="editButton"
          size="small"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => handleDeleteClick(id)}
          aria-label="delete task"
          data-testid="deleteButton"
          size="small"
        >
          <DeleteOutlineIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Task;
