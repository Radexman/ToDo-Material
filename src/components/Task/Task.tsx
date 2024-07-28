import { Stack, Typography, TextField, IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

import type { ChangeEvent } from "react";
import { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  completeTask,
  deleteTask,
  startEditTask,
  saveTask,
  cancelEditTask,
} from "../../features/todo/todoSlice";
import type { Todo } from "../../types/appTypes.types";

type TaskProps = {
  task: Todo;
};

const Task = ({ task }: TaskProps) => {
  const { name, date, isDone, id } = task;
  const dispatch = useAppDispatch();
  const taskBeingEdited = useAppSelector(state => state.todo.taskBeingEdited);

  const [editedName, setEditedName] = useState(name);
  const [editedDate, setEditedDate] = useState(date);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleCompleteClick = (todo: Todo) => {
    dispatch(completeTask(todo));
  };

  const handleEditClick = (todo: Todo) => {
    dispatch(startEditTask(todo));
  };

  const handleSaveClick = () => {
    dispatch(saveTask({ ...task, name: editedName, date: editedDate }));
  };

  const handleCancelClick = () => {
    dispatch(cancelEditTask());
  };

  const handleDeleteClick = (todo: Todo) => {
    dispatch(deleteTask(todo));
  };

  const handleEditNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedName(event.target.value);
  };

  const handleEditDateInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedDate(event.target.value);
  };

  const isEditing = taskBeingEdited?.id === id;

  useEffect(() => {
    if (isEditing && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <Stack
      data-testid="todo"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        padding: "8px",
        border: "1px solid darkgray",
        borderRadius: "5px",
      }}
    >
      {isEditing ? (
        <>
          <TextField
            value={editedName}
            inputRef={nameInputRef}
            onChange={handleEditNameInput}
            size="small"
            sx={{ width: "40%" }}
          />
          <TextField
            type="date"
            value={editedDate}
            inputRef={dateInputRef}
            onChange={handleEditDateInput}
            size="small"
            sx={{ width: "40%" }}
          />
          <Stack
            gap={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              onClick={handleSaveClick}
              aria-label="save task"
              data-testid="saveButton"
              size="small"
            >
              <SaveIcon />
            </IconButton>
            <IconButton
              onClick={handleCancelClick}
              aria-label="cancel edit"
              data-testid="cancelButton"
              size="small"
            >
              <CancelIcon />
            </IconButton>
          </Stack>
        </>
      ) : (
        <>
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
              onClick={() => handleCompleteClick(task)}
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
              onClick={() => handleDeleteClick(task)}
              aria-label="delete task"
              data-testid="deleteButton"
              size="small"
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default Task;
