import { Typography } from "@mui/material";
import React from "react";

interface Props {
  bookName?: string;
  authorName?: string;
}

const EditHeading: React.FC<Props> = ({ bookName, authorName }) => {
  return (
    <>
      <Typography gutterBottom variant="h5" fontWeight="600" color="red">
        Edit{" "}
        <Typography fontWeight="600" variant="h5" color="blue" component="span">
          {bookName}
        </Typography>{" "}
        by{" "}
        <Typography fontWeight="600" variant="h5" color="blue" component="span">
          {" "}
          {authorName}
        </Typography>
      </Typography>
    </>
  );
};

export default EditHeading;
