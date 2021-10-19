import Typography from "@mui/material/Typography";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useEffect, useState } from "react";
import "./YouTubeCard.css";

const YouTubeCard = (props) => {
  const { image, vidName, channelName, getTheVid, scrollY, wordFromChipBar } =
    props;

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
  }, [scrollY < 0, wordFromChipBar]);

  const getClickedVid = () => {
    getTheVid(props);
  };

  return (
    <div className="youtubeCard" onClick={getClickedVid}>
      <div className="thumbnail">
        <div className="timeStamp">
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bolder", fontSize: "12px", ml: 0.5 }}
          >
            {`${timeStamp.minutes}:${timeStamp.seconds}`}
            {console.log("rendered")}
          </Typography>
        </div>
        <div className="vidIcons">
          <div className="clockwork">
            <div className="iconLabel">
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bolder", fontSize: "12px", mt: 0.5 }}
              >
                WATCH LATER
              </Typography>
            </div>

            <div className="icon">
              <WatchLaterOutlinedIcon />
            </div>
          </div>

          <div className="clockwork">
            <div className="iconLabel">
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bolder", fontSize: "12px", mt: 0.5 }}
              >
                ADD TO QUEUE
              </Typography>
            </div>

            <div className="icon">
              <PlaylistPlayOutlinedIcon />
            </div>
          </div>

          <div className="dots">
            <MoreVertOutlinedIcon sx={{ mt: 11, ml: 23 }} />
          </div>
        </div>
        <img srcSet={image} alt="" />
      </div>

      <div className="videoDetails">
        <div className="channelPic">
          <img srcSet={image} alt="" />
        </div>
        <div className="channelInfo">
          <Typography
            variant="subtitle2"
            sx={{ mt: "10px", width: "200px", fontWeight: "bolder" }}
          >
            {vidName.split(" ").length > 8
              ? vidName.split(" ").slice(0, 8).join(" ") + "..."
              : vidName}
          </Typography>

          <Typography variant="subtitle2" sx={{ mt: "10px", color: "#848584" }}>
            {channelName}
          </Typography>

          <Typography variant="subtitle2" sx={{ color: "#848584" }}>
            {`${uploadTime} ${timeFrame} ago ~  ${views}K views`}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCard;
