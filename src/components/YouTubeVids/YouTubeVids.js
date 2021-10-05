import { useEffect, useState } from "react";
import YouTubeCard from "../YouTubeCard/YouTubeCard";
import "./YouTubeVids.css";

const YouTubeVids = () => {
  const [youtubeObj, setYoutubeObj] = useState([]);

  let queryStr = "champions league highlights";

  useEffect(() => {
    const getYoutubeVidObject = async () => {
      const res = await fetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${queryStr}&part=snippet%2Cid&regionCode=UK&maxResults=50&order=date`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
            "x-rapidapi-key":
              "2895577f1amshc0eab35c83a8b00p17ae26jsnfc082aac1ef7",
          },
        }
      );

      const data = await res.json();

      setYoutubeObj(data.items);
    };

    getYoutubeVidObject();
  }, []);

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
// const snippet = youtubeVid.snippet;
// const thumbnails = snippet.thumbnails.high.url;
// console.log(snippet.title);

// <YouTubeCard image={thumbnails} vidName={snippet.title} />;

export default YouTubeVids;
