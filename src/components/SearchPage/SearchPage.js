import SearchPageCard from "./SearchPageCard";

import "./SearchPage.css";

const SearchPage = ({ youtubeObj }) => {
  return (
    <div className="searchTiles">
      {youtubeObj.slice(0, 15).map((youtubeVid, i) => (
        <SearchPageCard
          key={i}
          image={youtubeVid.snippet.thumbnails.high.url}
          vidName={youtubeVid.snippet.title}
          channelName={youtubeVid.snippet.channelTitle}
        />
      ))}
    </div>
  );
};

export default SearchPage;
