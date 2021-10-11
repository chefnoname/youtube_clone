import Typography from "@mui/material/Typography";

import "./SearchPageCard.css";

const SearchPageCard = (props) => {
  const { image, vidName, channelName, getTheVid } = props;
  const uploadTime = Math.ceil(Math.random() * 10);

  const TIME_ARR = ["hours", "days", "months", "years"];
  const TIME_FRAME = TIME_ARR[Math.floor(Math.random() * 4)];

  const views = Math.ceil(Math.random() * 20);

  const getVideo = () => {
    getTheVid(props);
  };

  // console.log("the current clicked videoId is ", clickedVideo);
  // console.log(props);
  return (
    <div className="searchPageCard" onClick={getVideo}>
      <div className="searchPageThumbnail">
        <img srcSet={image} alt="" />
      </div>

      <div className="searchPageVideoDetails">
        <div className="searchPageChannelInfo">
          <Typography variant="h6" sx={{ mt: "10px" }}>
            {vidName.split(" ").length > 10
              ? vidName.split(" ").slice(0, 7).join(" ") + "..."
              : vidName}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#848584" }}>
            {` ${views}K views ~ ${uploadTime} ${TIME_FRAME} ago  `}
          </Typography>

          <div className="searchPageUploadDetails">
            <div className="searchPageChannelPic">
              <img srcSet={image} alt="" />
            </div>
            <Typography
              variant="subtitle2"
              sx={{ mt: "10px", color: "#848584" }}
            >
              {channelName}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPageCard;
