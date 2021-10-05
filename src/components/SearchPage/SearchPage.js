import SearchPageCard from "./SearchPageCard";

import "./SearchPage.css";
import { useState } from "react";

const SearchPage = ({ youtubeObj, getTheSearchedVidId }) => {
  const [clickedVideoId, setClickedVideoId] = useState("");

  const getTheVidId = (e) => {
    setClickedVideoId(e);
  };

  const getTheClickedVidId = () => {
    getTheSearchedVidId(clickedVideoId);
  };

  getTheClickedVidId();

  return (
    <div className="searchTiles">
      {youtubeObj.slice(0, 15).map((youtubeVid, i) => (
        <SearchPageCard
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

export default SearchPage;
