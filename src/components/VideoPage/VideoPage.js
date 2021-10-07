import VideoCard from "./VideoCard";
import VideoTiles from "./VideoTiles";

import "./VideoPage.css";

const VideoPage = (props) => {
  const { homePageClickedVid, suggestedVids } = props.props;
  const { channelName, image, vidName, videoId } = homePageClickedVid;

  const youtubeURL = `https://youtube.com/embed/${videoId}?autoplay=1`;

  // console.log(suggestedVids, "this is the suggestVids");

  return (
    <div className="container">
      <div className="mainVideo">
        <VideoCard
          url={youtubeURL}
          channelName={channelName}
          image={image}
          vidName={vidName}
        />
      </div>
      <div className="sideVideos">
        <VideoTiles suggestedVids={suggestedVids} />
      </div>
    </div>
  );
};

export default VideoPage;
