import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface Props {
  query?: any;
}

const Book: NextPage<Props> = ({ query }) => {
  const router = useRouter();
  const [book, setBook] = useState<any | {}>({});
  const getData = async () => {
    let id = router.query.book;
    console.log(id);
    await axios
      .get(`https://63627f5466f75177ea311eef.mockapi.io/bookmarks/${id}`)
      .then(function (res: any) {
        setBook(res.data);
        console.log(res.data);
      });
  };
  const handleRoute = () => {
    router.push("/book-listing");
  };

  const handleClickEdit = (id: string) => {
    router.push(`/update-book/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box sx={{ padding: "100px", height: "100vh", mb: 10 }}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Box
          sx={{
            width: "950px",
            padding: "100px",
            border: "1px solid #efefef",
            borderRadius: "12px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontWeight="600" color="primary">
              {book?.title}
            </Typography>

            <Typography variant="h4" fontWeight="700">
              {book?.description}
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="700"
              marginBottom="20px"
            >
              {book?.publishedYear}
            </Typography>
            <Box
              sx={{
                border: "1px solid #100",
                width: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="700"
                marginBottom="20px"
              >
                {book?.tags}
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                width: "30%",
                fontSize: "20px",
                fontWeight: "600",
                background: "#041E49",
                mx: 1,
                borderRadius: "10px",
              }}
              onClick={() => handleClickEdit(book?.id)}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "50%",
                fontSize: "20px",
                fontWeight: "600",
                borderRadius: "10px",
              }}
              onClick={handleRoute}
            >
              Back to listing page
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Book;

Book.getInitialProps = async ({ query }) => {
  return {
    query,
  };
};
