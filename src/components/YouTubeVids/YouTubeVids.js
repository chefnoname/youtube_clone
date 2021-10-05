import { useEffect, useState } from "react";
import YouTubeCard from "../YouTubeCard/YouTubeCard";
import "./YouTubeVids.css";

const YouTubeVids = ({ youtubeObj }) => {
  // console.log("this is the youtube object", youtubeObj[1].snippet);

  // const youtubeObjectInform = () => {
  //   youtubeObj.map((youtubeItem) => {
  //     setSpecificYoutubeData(youtubeItem.snippet);
  //   });
  // };

  // youtubeObjectInform();

  console.log(youtubeObj[1]);

  // <div className="cardSpacing">

  // </div>

  return (
    <div className="cardSpacing">
      {youtubeObj.map((youtubeVid, i) => (
        <YouTubeCard
          key={i}
          image={youtubeVid.snippet.thumbnails.high.url}
          vidName={youtubeVid.snippet.title}
          channelName={youtubeVid.snippet.channelTitle}
        />
      ))}
    </div>
  );
};

export default YouTubeVids;
