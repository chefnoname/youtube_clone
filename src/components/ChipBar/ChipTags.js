import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useState } from "react";

import "./ChipTags.css";

const ChipTags = ({ word, getSelectedWord, wordFromChipTag }) => {
  const handleClick = () => {
    getSelectedWord(word);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label={capitalizeFirstLetter(word)}
        onClick={handleClick}
        className={wordFromChipTag === word ? "active chip" : "chip"}
      />
    </Stack>
  );
};

export default ChipTags;
