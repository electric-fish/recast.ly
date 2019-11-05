import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">

    {/* <div><VideoListEntry video={props.videos[0]} /></div>
    <div><VideoListEntry video={props.videos[1]} /></div>
    <div><VideoListEntry video={props.videos[2]} /></div>
    <div><VideoListEntry video={props.videos[3]} /></div>
    <div><VideoListEntry video={props.videos[4]} /></div> */}

    {/* {props.videos.map((video) => (
      <VideoListEntry video={video} />
    ))} */}

    {props.videos.map((video) => {
      return (
        <VideoListEntry onClick={props.onClick} video={video} />
      );
    })}

  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
