import VideoCard from "./VideoCard";
import VideoTiles from "./VideoTiles";

import "./VideoPage.css";

const VideoPage = (props) => {
  const { homePageClickedVid, youtubeObj } = props.props;
  const { channelName, image, vidName, videoId } = homePageClickedVid;

  const youtubeURL = `https://youtube.com/embed/${videoId}?autoplay=1`;

  // console.log(suggestedVids, "this is the suggestVids");
  // console.log(youtubeObj, "this is the youtube obj");

  const didItClick = () => {
    console.log("clicked in videoPage component");
  };
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
        <VideoTiles youtubeObj={youtubeObj} onClick={didItClick} />
      </div>
    </div>
  );
};

export default VideoPage;
