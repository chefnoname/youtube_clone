import Typography from "@mui/material/Typography";

import "./VideoTiles.css";

const VideoTiles = ({ youtubeObj }) => {
  // console.log(youtubeObj);

  const tenResults = youtubeObj.slice(0, 10);

  const didItClick = () => {
    console.log(tenResults[1].id.videoId, "clicked in videoPage component");
  };

  return (
    <div onClick={didItClick}>
      {tenResults.map((vid, i) => (
        <div className="sideContainer" key={i}>
          <div className="sideImage">
            <img src={vid.snippet.thumbnails.medium.url} alt="" />
            {/* {console.log(vid.snippet.thumbnails)} */}
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
              45K views ~ 7 years ago
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoTiles;
