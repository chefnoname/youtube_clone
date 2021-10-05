import "./YouTubeCard.css";
const YouTubeCard = ({ image, vidName, channelName, views, timePosted }) => {
  return (
    <div className="youtubeCard">
      <div className="thumbnail">
        <img srcSet={image} alt="" />
      </div>

      <div className="videoDetails">
        <div className="channelPic">
          <img srcSet={image} alt="" />
        </div>
        <div className="channelInfo">
          <p className="videoTitle">{vidName}</p>
          <p className="channelName">{channelName}</p>

          <div className="viewCount">
            <p>{views}</p> <p className="timePosted">{timePosted}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCard;
