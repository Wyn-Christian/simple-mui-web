import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
      }}
    >
      <Typography variant="h1">Home Page</Typography>
    </Box>
  );
}

export default Home;
