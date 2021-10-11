import SearchPageCard from "./SearchPageCard";

import "./SearchPage.css";
import { useState } from "react";

const SearchPage = ({ youtubeObj, getTheSearchedVid }) => {
  const [clickedVideo, setClickedVideo] = useState("");

  const getTheVid = (e) => {
    setClickedVideo(e);
  };

  const getTheClickedVid = () => {
    getTheSearchedVid(clickedVideo);
  };

  getTheClickedVid();

  return (
    <div className="searchTiles">
      {youtubeObj.slice(0, 15).map((youtubeVid, i) => (
        <SearchPageCard
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

export default SearchPage;
