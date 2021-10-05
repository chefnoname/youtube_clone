import YouTubeCard from "../YouTubeCard/YouTubeCard";
import "./YouTubeVids.css";

const YouTubeVids = ({ youtubeObj }) => {
  // let x = youtubeObj[0].snippet.publishedAt;
  // let y = x.toISOString();
  // console.log(y);

  // const { id } = youtubeObj[1];
  // const { videoId } = id;

  // const videoSrc = `https://youtube.com/embed/${x}`;
  // console.log(videoId);

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
      {/* <iframe src={videoSrc} frameborder="0" height="100%" width="100%" /> */}
    </div>
  );
};

export default YouTubeVids;
