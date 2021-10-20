import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

import "./VideoTiles.css";

const VideoTiles = ({ vid, handleClickedSideVid }) => {
  const [clickedSideVid, setClickedSideVid] = useState();

  const TIME_ARR = ["hours", "days", "months", "years"];

  const [uploadTime, setuploadTime] = useState(Math.ceil(Math.random() * 10));

  const [timeFrame, setTimeFrame] = useState(
    TIME_ARR[Math.floor(Math.random() * 4)]
  );

  const [views, setViews] = useState(Math.ceil(Math.random() * 20));

  const getRandomArbitrary = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  const [timeStamp, setTimeStamp] = useState({
    minutes: getRandomArbitrary(59, 10),
    seconds: getRandomArbitrary(59, 10),
  });

  useEffect(() => {
    setuploadTime(Math.ceil(Math.random() * 10));
    setViews(Math.ceil(Math.random() * 20));
    setTimeStamp({
      minutes: getRandomArbitrary(59, 10),
      seconds: getRandomArbitrary(59, 10),
    });
  }, []);

  const handleClickedVid = () => {
    handleClickedSideVid(clickedSideVid);
  };

  handleClickedVid();

  return (
    <div>
      <div className="sideContainer">
        <div
          className="sideImage"
          onClick={() => {
            setClickedSideVid(vid);
          }}
        >
          <img src={vid.snippet.thumbnails.medium.url} alt="" />
        </div>
        <div className="videoInfo">
          <Typography variant="subtitle2" sx={{ fontWeight: "bolder" }}>
            {vid.snippet.title.split(" ").length > 12
              ? vid.snippet.title.split(" ").slice(0, 11).join(" ") + "..."
              : vid.snippet.title}
          </Typography>
          <Typography
            varaiant="subtitle2"
            sx={{ fontSize: "80%", color: "#AAAAAA", mt: "5px" }}
          >
            {vid.snippet.channelTitle}
          </Typography>
          <Typography
            varaiant="subtitle2"
            sx={{ fontSize: "80%", color: "#AAAAAA", mb: "15px" }}
          >
            {`${views}K views ·  ${uploadTime} ${timeFrame} ago`}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default VideoTiles;
