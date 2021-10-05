import YouTubeCard from "../YouTubeCard/YouTubeCard";
import "./YouTubeVids.css";

const YouTubeVids = ({ youtubeObj }) => {
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
