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

  // console.log(props);

  const handleClickedSideVid = (e) => {
    setClickedSideVid(e);
  };

  const youtubeURL = `https://youtube.com/embed/${
    clickedSideVid ? clickedSideVid.id.videoId : videoId
  }`;

  const videoCardChannelName = clickedSideVid
    ? clickedSideVid.snippet.channelTitle
    : channelName;

  const videoCardImage = clickedSideVid
    ? clickedSideVid.snippet.thumbnails.high.url
    : image;

  const videoCardVidName = clickedSideVid
    ? clickedSideVid.snippet.title
    : vidName;

  console.log(clickedSideVid, "videoPage compo");
  // console.log(scrollY, "scrollY");

  // const tenResults = youtubeObj.slice(6, 16);

  return (
    <div className="videoPageContainer">
      <div className="mainVideo">
        <VideoCard
          url={youtubeURL}
          channelName={videoCardChannelName}
          image={videoCardImage}
          vidName={videoCardVidName}
        />
      </div>
      <div className="sideVideos">
        {/* {tenResults.map((vid, i) => (
          <VideoTiles
            key={i}
            vid={vid}
            handleClickedSideVid={handleClickedSideVid}
            scrollY={scrollY}
          />
        ))} */}
        <VideoTiles
          // key={i}
          youtubeObj={youtubeObj}
          handleClickedSideVid={handleClickedSideVid}
        />
      </div>
    </div>
  );
};

export default VideoPage;
