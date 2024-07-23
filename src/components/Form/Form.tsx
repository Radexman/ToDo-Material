import { Stack, Typography, TextField, Button } from "@mui/material";

const Form = () => {
  return (
    <Stack direction="column" gap={4} sx={{ padding: "8px" }}>
      <Typography alignSelf="center" variant="h2">
        Create Tasks For Today
      </Typography>
      <Stack direction="column" gap={2}>
        <TextField label="Task Name" size="small" />
        <TextField type="date" size="small" />
        <Button variant="contained">Add Task</Button>
      </Stack>
    </Stack>
  );
};

export default Form;
