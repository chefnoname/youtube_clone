import YouTubeCard from "../YouTubeCard/YouTubeCard";

const VideoTiles = ({ suggestedVids }) => {
  // console.log(suggestedVids);

  return <div>{suggestedVids.map((vid, i) => console.log(i))}</div>;
};

export default VideoTiles;
// {}
