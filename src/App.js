import PrimarySearchAppBar from "./components/PrimarySearchAppBar/PrimarySearchAppBar";
import SideBar from "./components/SideBar/SideBar";
import YouTubeVids from "./components/YouTubeVids/YouTubeVids";
import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [youtubeObj, setYoutubeObj] = useState([]);
  const [searchResults, setSearchResults] = useState("");

  let queryStr = searchResults
    ? searchResults
    : "champions league highlights 2020";

  useEffect(() => {
    const getYoutubeVidObject = async () => {
      const res = await fetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${queryStr}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
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
  }, [queryStr]);

  const changeQueryString = (e) => {
    setSearchResults(e);
  };

  console.log("this is the search results ", searchResults);

  return (
    <>
      <PrimarySearchAppBar
        changeQueryString={(e) => {
          changeQueryString(e);
        }}
      />
      <div className="formatting">
        <SideBar />
        <YouTubeVids youtubeObj={youtubeObj} />
      </div>
    </>
  );
};

export default App;
