import VideoCard from "./VideoCard";
import VideoTiles from "./VideoTiles";

import "./VideoPage.css";

const VideoPage = (props) => {
  const { channelName, image, vidName, videoId } = props.props;
  const youtubeURL = `https://youtube.com/embed/${videoId}?autoplay=1`;

  // console.log(props.props.videoId, "this is rendered in VideoPage");
  // console.log(props);

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
        <VideoTiles />
      </div>
    </div>
  );
};

export default VideoPage;
