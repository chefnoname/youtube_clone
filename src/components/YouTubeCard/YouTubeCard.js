import Typography from "@mui/material/Typography";

import "./YouTubeCard.css";
const YouTubeCard = ({ image, vidName, channelName }) => {
  console.log(vidName.includes("&#39;t"));

  const uploadTime = Math.ceil(Math.random() * 10);

  const TIME_ARR = ["hours", "days", "months", "years"];
  const TIME_FRAME = TIME_ARR[Math.floor(Math.random() * 4)];

  const views = Math.ceil(Math.random() * 20);

  return (
    <div className="youtubeCard">
      <div className="thumbnail">
        <img srcSet={image} alt="" />
      </div>

      <div className="videoDetails">
        <div className="channelPic">
          <img srcSet={image} alt="" />
        </div>
        <div className="channelInfo">
          <Typography variant="subtitle2" sx={{ mt: "10px", mb: "20px" }}>
            {vidName.split(" ").length > 10
              ? vidName.split(" ").slice(0, 8).join(" ") + "..."
              : vidName}
          </Typography>

          <Typography variant="subtitle2" sx={{ mt: "10px", color: "#848584" }}>
            {channelName}
          </Typography>

          <Typography variant="subtitle2" sx={{ color: "#848584" }}>
            {`${uploadTime} ${TIME_FRAME} ago ~  ${views}K views`}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCard;
