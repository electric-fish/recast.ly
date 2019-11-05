import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // videos: {exampleVideoData},
      // currentVideo: {exampleVideoData[0]}
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };

    this.setNewVideo = this.setNewVideo.bind(this);
    this.setSearchedVideos = this.setSearchedVideos.bind(this);
    this.startSearch = this.startSearch.bind(this);
  }

  setNewVideo(video) {
    // console.log('video event happening');
    this.setState({
      currentVideo: video
    });
  }

  setSearchedVideos(videos) {
    this.setState({
      videos: videos
    });
  }

  startSearch(searchTerm){
    let searchOptions = {
      query: searchTerm,
      max: 5,
      key: YOUTUBE_API_KEY
    }
    searchYouTube(searchOptions, this.setSearchedVideos);
  }

  render() {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          {/* <div><h5><em>???search</em> view goes here</h5></div> */}
          <div><Search searchHandler={this.startSearch} /></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={this.state.currentVideo} /></div>
          {/* <div><VideoPlayer video={exampleVideoData[0]} /></div> */}
        </div>
        <div className="col-md-5">
          {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
          {/* <div><VideoList videos={exampleVideoData} /></div> */}
          {/* <div><VideoList onClick={this.setNewVideo} videos={this.props.videos} /></div> */}
          {/* <div><VideoList onClick={this.setNewVideo} videos={this.state.videos} /></div> */}
          <div><VideoList videos={this.state.videos} clickHandler={this.setNewVideo} /></div>
        </div>
      </div>
    </div>

    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

