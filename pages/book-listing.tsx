import { SettingsBrightness } from "@mui/icons-material";
import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchBox from "../components/search-box";
import { handleGetFullDateWithoutTime } from "../utils/dataModifiers";

const tableHeading = ["Id", "Date", "Title", "Description", "Tags"];

interface Props {
  query?: any;
}

const BookListing: NextPage<Props> = () => {
  const router = useRouter();
  const [books, setBooks] = useState([]);

  const getData = async () => {
    await axios
      .get("https://63627f5466f75177ea311eef.mockapi.io/bookmarks")
      .then(function (res) {
        setBooks(res.data);
      })
      .catch(function (err: any) {});
  };

  const handleAddBook = () => {
    router.push("/create-book");
  };
  console.log(books.reverse);

  const handleDelete = async (id: any) => {
    await axios
      .delete(`https://63627f5466f75177ea311eef.mockapi.io/bookmarks/${id}`)
      .then(function (res) {
        getData();
      })
      .catch(function (err: any) {});
  };

  const handleEditBook = (id: any) => {
    router.push(`/update-book/${id}`);
  };

  const handleGotoSingleView = (id: any) => {
    router.push(`/book/${id}`);
  };

  const handleSearch = (e: any) => {
    const searchedBooks = books?.filter(function isSearch(book: any) {
      return (
        book?.title?.toLowerCase()?.includes(e.target.value) ||
        book?.title?.includes(e.target.value)
      );
    });

    console.log(e.target.value);
    setBooks(searchedBooks);
    if (e.target.value?.length === 0) {
      getData();
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box sx={{ padding: "100px" }}>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Button
          onClick={handleAddBook}
          variant="contained"
          sx={{ marginBottom: "20px" }}
        >
          Add BookMarks
        </Button>
        <SearchBox
          isSearch
          placeholder={"Search by Title"}
          handleChangeSearch={(e: any) => handleSearch(e)}
        />
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <TableCell
                sx={{ fontWeight: 700, fontSize: "16px" }}
                align="left"
              >
                Title
              </TableCell> */}

              {tableHeading.map((heading: string, index: number) => (
                <TableCell
                  sx={{ fontWeight: 700, fontSize: "16px" }}
                  key={index}
                  align="left"
                >
                  {heading}
                </TableCell>
              ))}
              <TableCell
                sx={{ fontWeight: 700, fontSize: "16px" }}
                align="center"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {books?.map((book: any, index: number) => (
              <TableRow sx={{ fontSize: "14px" }} key={index}>
                <TableCell align="left" component="th" scope="row">
                  {book?.id}
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {handleGetFullDateWithoutTime(book?.date)}
                </TableCell>
                <TableCell component="th" scope="row">
                  {book?.title}
                </TableCell>
                <TableCell>{book?.description}</TableCell>

                <TableCell align="right">{book?.tags}</TableCell>

                <TableCell align="right">
                  <Button
                    onClick={() => handleGotoSingleView(book.id)}
                    variant="contained"
                    sx={{ mx: 2 }}
                  >
                    View
                  </Button>
                  <Button
                    onClick={() => handleEditBook(book.id)}
                    variant="outlined"
                    sx={{ mx: 2 }}
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => handleDelete(book.id)}
                    variant="contained"
                    sx={{ mx: 2, background: "red" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BookListing;

BookListing.getInitialProps = ({ query }) => {
  return {
    query,
  };
};
