import PrimarySearchAppBar from "./components/PrimarySearchAppBar/PrimarySearchAppBar";
import SideBar from "./components/SideBar/SideBar";
import YouTubeVids from "./components/YouTubeVids/YouTubeVids";
import SearchPage from "./components/SearchPage/SearchPage";
import VideoPage from "./components/VideoPage/VideoPage";
import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [youtubeObj, setYoutubeObj] = useState([]);
  const [searchResults, setSearchResults] = useState("");
  const [searchPageClickedVidId, setSearchPageClickedVidId] = useState("");
  const [homePageClickedVid, setHomePageClickedVid] = useState();

  const queryStr = searchResults ? searchResults : "vegan meal prep";

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

  // FUNCTION TO CHANGE THE QUERY STRING USING THE INPUT APPBAR
  const changeQueryString = (e) => {
    setSearchResults(e);
  };

  const getTheSearchedVidId = (e) => {
    setSearchPageClickedVidId(e);
  };

  // FUNCTION TO COLLECT THE DATA NEEDED TO DISPLAY ON THE HOMEPAGE
  const getTheHomepageVid = (e) => {
    setHomePageClickedVid(e);
  };

  // DATA RECEIVED WHEN YOU CLICK ON A VIDEO ON THE HOMEPAGE, ALSO A SLICED ARRAY OF PART OF THE HOMEPAGE SEARCH RESULTS
  const videoDataFromHomepage = {
    homePageClickedVid,
    youtubeObj,
  };

  // console.log(suggestedVidDataStructure);

  return (
    <>
      <PrimarySearchAppBar
        changeQueryString={(e) => {
          changeQueryString(e);
        }}
      />
      <div className="formatting">
        <SideBar />
        {!searchResults && !homePageClickedVid && (
          <YouTubeVids
            youtubeObj={youtubeObj}
            getTheHomepageVid={(e) => {
              getTheHomepageVid(e);
            }}
          />
        )}
        {searchResults && (
          <SearchPage
            youtubeObj={youtubeObj}
            getTheSearchedVidId={(e) => {
              getTheSearchedVidId(e);
            }}
          />
        )}
        {homePageClickedVid && !searchResults && (
          <VideoPage props={videoDataFromHomepage} />
        )}
      </div>
    </>
  );
};

export default App;
