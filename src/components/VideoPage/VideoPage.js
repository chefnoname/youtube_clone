import "./VideoPage.css";

const VideoPage = ({ videoId }) => {
  const youtubeURL = `https://youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="container">
      <div className="mainVideo">
        <iframe src={youtubeURL} frameborder="0" width="650px" height="400px" />
      </div>
      <div className="sideVideos">
        <h1>this is where 5 videos will be rendered</h1>
      </div>
    </div>
  );
};

export default VideoPage;
