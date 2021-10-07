import YouTubeCard from "../YouTubeCard/YouTubeCard";
import { useState } from "react";

import "./YouTubeVids.css";

const YouTubeVids = ({ youtubeObj, getTheHomepageVid }) => {
  const [clickedVideo, setClickedVideo] = useState("");

  const getTheVid = (e) => {
    setClickedVideo(e);
  };

  // console.log(clickedVideo, "is rendered in YouTubeVids");

  const getTheClickedVid = () => {
    getTheHomepageVid(clickedVideo);
  };

  getTheClickedVid();

  return (
    <div className="cardSpacing">
      {youtubeObj.map((youtubeVid, i) => (
        <YouTubeCard
          key={i}
          image={youtubeVid.snippet.thumbnails.high.url}
          vidName={youtubeVid.snippet.title}
          channelName={youtubeVid.snippet.channelTitle}
          videoId={youtubeVid.id.videoId}
          getTheVid={(e) => {
            getTheVid(e);
          }}
        />
      ))}
    </div>
  );
};

export default YouTubeVids;
