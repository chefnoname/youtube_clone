import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const ChipTags = ({ word }) => {
  const handleClick = () => {
    console.info(`You clicked the ${word}`);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label={capitalizeFirstLetter(word)}
        onClick={handleClick}
        sx={{
          fontWeight: "bolder",
          color: "white",
          backgroundColor: "#343434",
          "&:hover": {
            backgroundColor: "#4d4d4d",
          },
          border: "1px solid #5f5f5f",
          mr: 2,
          height: 32,
        }}
      />
    </Stack>
  );
};

export default ChipTags;
