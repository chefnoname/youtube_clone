import PrimarySearchAppBar from "./components/PrimarySearchAppBar/PrimarySearchAppBar";
import SideBar from "./components/SideBar/SideBar";
import YouTubeVids from "./components/YouTubeVids/YouTubeVids";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState("");

  return (
    <>
      <PrimarySearchAppBar />
      <div className="formatting">
        <SideBar />
        <YouTubeVids />
      </div>
    </>
  );
};

export default App;
