import PrimarySearchAppBar from "./components/PrimarySearchAppBar/PrimarySearchAppBar";
import YouTubeVids from "./components/YouTubeVids/YouTubeVids";
import SearchPage from "./components/SearchPage/SearchPage";
import VideoPage from "./components/VideoPage/VideoPage";
import DummyIcons from "./components/DummyIcons/DummyIcons";
import { useState, useEffect } from "react";

import "./App.css";
import ChipBar from "./components/ChipBar/ChipBar";

const App = () => {
  const [youtubeObj, setYoutubeObj] = useState([]);
  const [searchResults, setSearchResults] = useState("");
  const [searchPageClickedVid, setSearchPageClickedVid] = useState("");
  const [homePageClickedVid, setHomePageClickedVid] = useState();
  const [deleteTheSearchResults, setDeleteTheSearchResults] = useState(false);
  const [wordFromChipBar, setWordFromChipBar] = useState("");
  const [queryStr, setQueryStr] = useState("TopGear best moments");

  // const queryStr = searchResults ? searchResults : "TopGear best moments";

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

  useEffect(() => {
    clearingSearchResult();
  }, [searchPageClickedVid, homePageClickedVid]);

  useEffect(() => {
    if (searchResults) {
      setQueryStr(searchResults);
    } else if (wordFromChipBar) {
      setQueryStr(wordFromChipBar);
    }
  }, [searchResults, wordFromChipBar]);

  // FUNCTION TO CHANGE THE QUERY STRING USING THE INPUT APPBAR
  const changeQueryString = (e) => {
    setSearchResults(e);
    setDeleteTheSearchResults(false);
    setHomePageClickedVid();
  };

  // FUNCTION TO GET THE VIDEO OBJECT FROM A SEARCHED RESULT
  const getTheSearchedVid = (e) => {
    setSearchPageClickedVid(e);
  };

  // FUNCTION TO COLLECT THE DATA NEEDED TO DISPLAY ON THE HOMEPAGE
  const getTheHomepageVid = (e) => {
    setHomePageClickedVid(e);
  };

  // DATA RECEIVED WHEN YOU CLICK ON A VIDEO ON THE HOMEPAGE OR SEARCH PAGE,
  // ALSO A SLICED ARRAY OF PART OF THE HOMEPAGE OR SEARCH RESULTS
  const videoDataFromClickedVid = {
    homePageClickedVid,
    youtubeObj,
    searchPageClickedVid,
  };

  const clearVideoData = (e) => {
    setHomePageClickedVid(e);
    setSearchPageClickedVid(e);
    setDeleteTheSearchResults(e);
  };

  const clearingSearchResult = () => {
    if (
      (searchPageClickedVid && !deleteTheSearchResults) ||
      (homePageClickedVid && !deleteTheSearchResults)
    ) {
      setDeleteTheSearchResults(true);
    }
  };

  const getWordFromChipBar = (newSearchWord) => {
    setWordFromChipBar(newSearchWord);
  };

  console.log(wordFromChipBar, "in the app.js");

  return (
    <>
      <PrimarySearchAppBar
        changeQueryString={changeQueryString}
        clearVideoData={clearVideoData}
      />
      <ChipBar getWordFromChipBar={getWordFromChipBar} />
      <div className="formatting">
        {!deleteTheSearchResults && <DummyIcons />}

        {!searchResults && !homePageClickedVid && !searchPageClickedVid && (
          <YouTubeVids
            youtubeObj={youtubeObj}
            getTheHomepageVid={getTheHomepageVid}
          />
        )}

        {searchResults &&
          (!searchPageClickedVid || !deleteTheSearchResults) && (
            <SearchPage
              youtubeObj={youtubeObj}
              getTheSearchedVid={getTheSearchedVid}
            />
          )}

        {(homePageClickedVid || searchPageClickedVid) &&
          deleteTheSearchResults && (
            <VideoPage props={videoDataFromClickedVid} />
          )}
      </div>
    </>
  );
};

export default App;
