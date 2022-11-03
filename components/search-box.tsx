import React from "react";
import InputBase from "@mui/material/InputBase";
import Image from "next/image";
import { Box, IconButton, Stack, Theme } from "@mui/material";

interface SearchBoxProps {
  isDownload?: boolean;
  isSearch: boolean;
  placeholder?: string;
  handleChangeSearch?: any;
  onDownloadClick?: any;
}

const SearchBox: React.FunctionComponent<SearchBoxProps> = ({
  isDownload,
  isSearch,
  placeholder,
  handleChangeSearch,
  onDownloadClick,
}) => {
  const debounce = (func: any) => {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, 500);
    };
  };

  const handleOnChangeDebounce = debounce((event: any) =>
    handleChangeSearch(event)
  );

  return (
    <Stack direction="row" alignItems={"center"} spacing={2}>
      {isDownload ? (
        <IconButton onClick={onDownloadClick}>
          <Image
            width="18px"
            height="18px"
            src={"/icons/download.svg"}
            alt="download"
          />
        </IconButton>
      ) : null}
      {isSearch ? (
        <Box
          sx={{
            position: "relative",
          }}
        >
          <InputBase
            sx={{
              color: "black",
              "& .MuiInputBase-input": {
                padding: (theme: Theme) => theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: "15px",
                paddingRight: `calc(1em + ${(theme: Theme) =>
                  theme.spacing(4)})`,
                transition: (theme: Theme) => theme.transitions.create("width"),
                width: "100%",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                minWidth: "293px",
              },
            }}
            placeholder={placeholder}
            onChange={handleOnChangeDebounce}
            inputProps={{ "aria-label": "search" }}
          />
          <Box
            sx={{
              padding: (theme: Theme) => theme.spacing(0, 2),
              height: "100%",
              position: "absolute",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: 0,
              right: 0,
            }}
          >
            <Image width="20px" height="20px" src="/search.png" alt="search" />
          </Box>
        </Box>
      ) : null}
    </Stack>
  );
};

export default SearchBox;
