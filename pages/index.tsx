import { Box, Button, Container, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const handleAddRoute = () => {
    router.push("/books");
  };
  const handleAllBookRoute = () => {
    router.push("/book-listing");
  };
  return (
    <Box sx={{ height: "1000px", py: 10 }}>
      <Stack
        alignItems="center"
        justifyContent="flex-end"
        direction="column"
        spacing={6}
      >
        <Typography variant="h4" component="a">
          Welcome to BOOKMARKS
        </Typography>
        <Button
          onClick={handleAddRoute}
          sx={{ width: "200px" }}
          variant="contained"
        >
          Add a Book
        </Button>
        <Button
          onClick={handleAllBookRoute}
          sx={{ width: "200px" }}
          variant="contained"
        >
          View All BookMarks
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
