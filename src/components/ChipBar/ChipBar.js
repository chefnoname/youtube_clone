import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useState, useEffect } from "react";

import "./ChipBar.css";

import ChipTags from "./ChipTags";

const ChipBar = () => {
  const [randomWordArray, setRandomWordArray] = useState([]);

  useEffect(() => {
    const getRandomWords = async () => {
      const res = await fetch(
        "https://random-words5.p.rapidapi.com/getMultipleRandom?count=20",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "random-words5.p.rapidapi.com",
            "x-rapidapi-key":
              "2895577f1amshc0eab35c83a8b00p17ae26jsnfc082aac1ef7",
          },
        }
      );

      const data = await res.json();

      setRandomWordArray(data);
    };

    getRandomWords();
  }, []);

  console.log(randomWordArray);

  return (
    <div className="mainBar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#202020",
            width: "100%",
            borderBottom: "1.5px solid #343434",
            borderTop: "1.5px solid #343434",
            boxShadow: "none",
          }}
        >
          <Toolbar variant="dense">
            <Chip
              label="All"
              sx={{
                color: "black",
                backgroundColor: "white",
                border: "1px solid #5f5f5f",
                mr: 3,
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
            {randomWordArray.map((word, i) => (
              <ChipTags word={word} key={i} />
            ))}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                position: "absolute",
                backgroundColor: "#212121ee",
                "&:hover": {
                  backgroundColor: "#212121ee",
                },
                height: 45,
                right: 75,
                width: 70,
                borderRadius: 0,
              }}
            >
              {/* <div className="rightArrow"> */}
              <ChevronRightIcon />
              {/* </div> */}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default ChipBar;
