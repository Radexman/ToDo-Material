import { Stack, Typography } from "@mui/material";

const Heading = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#0AB6AB",
        paddingTop: "22px",
        paddingBottom: "22px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <Typography variant="h1" alignSelf="center">
        Todo List
      </Typography>
    </Stack>
  );
};

export default Heading;
