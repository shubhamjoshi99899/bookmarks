import { Stack, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BookForm from "../../components/create-and-edit-book-component/book-form";
import EditHeading from "../../components/create-and-edit-book-component/edit-heading";
import Footer from "../../components/footer";
import Header from "../../components/header";
import bookFormValidationSchema from "../../utils/bookFormValidationSchema";

interface Props {
  query?: any;
}

const UpdateBooks: NextPage<Props> = ({ query }) => {
  console.log(query);
  const router = useRouter();
  const [book, setBook] = useState<any | {}>({});
  const getData = async () => {
    await axios
      .get(
        `https://63627f5466f75177ea311eef.mockapi.io/bookmarks/${query?.update}`
      )
      .then(function (res: any) {
        setBook(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    getData();
    console.log(book);
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: book?.id,
      date: book?.date,
      title: book?.title,
      tags: book?.tags,
      description: book?.description,
    },
    validationSchema: bookFormValidationSchema,
    onSubmit: (values: any, resetForm: any) => {
      console.log(values);
      handleSubmit(values);
      resetForm();
    },
  });
  const handleSubmit = (values: any) => {
    axios
      .put(
        `https://63627f5466f75177ea311eef.mockapi.io/bookmarks/${query?.update}`,
        values
      )
      .then(function (res: any) {
        console.log(res.success);
      })
      .catch(function (err) {
        console.log(err);
      });
    router.push("/book-listing");
  };
  console.log(book);

  return (
    <>
      <Header />
      <Stack
        sx={{
          height: "100vh",
        }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography gutterBottom variant="h5" fontWeight="600" color="red">
          Edit{" "}
        </Typography>
        <BookForm formik={formik} />
      </Stack>
      <Footer />
    </>
  );
};

export default UpdateBooks;

UpdateBooks.getInitialProps = async ({ query }) => {
  return {
    query,
  };
};
