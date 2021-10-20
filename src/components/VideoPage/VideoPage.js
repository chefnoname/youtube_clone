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

  const youtubeURL = `https://youtube.com/embed/${
    clickedSideVid ? clickedSideVid.id.videoId : videoId
  }`;

  const tenResults = youtubeObj.slice(6, 16);

  return (
    <div className="videoPageContainer">
      <div className="mainVideo">
        <VideoCard
          url={youtubeURL}
          channelName={channelName}
          image={image}
          vidName={vidName}
        />
      </div>
      <div className="sideVideos">
        {tenResults.map((vid, i) => (
          <VideoTiles
            key={i}
            vid={vid}
            handleClickedSideVid={handleClickedSideVid}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
