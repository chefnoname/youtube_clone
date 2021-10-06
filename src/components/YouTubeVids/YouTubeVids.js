import YouTubeCard from "../YouTubeCard/YouTubeCard";
import { useState } from "react";

import "./YouTubeVids.css";

const YouTubeVids = ({ youtubeObj, getTheHomepageVidId }) => {
  const [clickedVideoId, setClickedVideoId] = useState("");

  const getTheVidId = (e) => {
    setClickedVideoId(e);
  };

  // console.log(clickedVideoId, "is rendered in YouTubeVids");

  const getTheClickedVidId = () => {
    getTheHomepageVidId(clickedVideoId);
  };

  getTheClickedVidId();

  return (
    <div className="cardSpacing">
      {youtubeObj.map((youtubeVid, i) => (
        <YouTubeCard
          key={i}
          image={youtubeVid.snippet.thumbnails.high.url}
          vidName={youtubeVid.snippet.title}
          channelName={youtubeVid.snippet.channelTitle}
          videoId={youtubeVid.id.videoId}
          getTheVidId={(e) => {
            getTheVidId(e);
          }}
        />
      ))}
    </div>
  );
};

export default YouTubeVids;
