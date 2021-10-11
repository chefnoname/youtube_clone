import VideoCard from "./VideoCard";
import VideoTiles from "./VideoTiles";
import { useState } from "react";

import "./VideoPage.css";

const VideoPage = (props) => {
  const [clickedSideVid, setClickedSideVid] = useState();

  const { homePageClickedVid, searchPageClickedVid, youtubeObj } = props.props;
  const { channelName, image, vidName, videoId } = homePageClickedVid
    ? homePageClickedVid
    : searchPageClickedVid;

  const handleClickedSideVid = (e) => {
    setClickedSideVid(e);
  };

  // setClickedSideVid("");
  // const { videoId: clickedSideVideoId } = clickedSideVid.id;
  console.log(homePageClickedVid);
  // console.log(clickedSideVideoId, "this is the clickedsidevideoid");

  const youtubeURL = `https://youtube.com/embed/${
    clickedSideVid ? clickedSideVid.id.videoId : videoId
  }?autoplay=1`;

  return (
    <div className="container">
      <div className="mainVideo">
        <VideoCard
          url={youtubeURL}
          channelName={channelName}
          image={image}
          vidName={vidName}
        />
      </div>
      <div className="sideVideos">
        <VideoTiles
          youtubeObj={youtubeObj}
          handleClickedSideVid={(e) => {
            handleClickedSideVid(e);
          }}
        />
      </div>
    </div>
  );
};

export default VideoPage;
