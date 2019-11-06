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
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      // videos: [],
      // currentVideo: {}
      // searchText: '',
      searchBarChange: false,
      searchBarText: ''
    };

    this.setNewVideo = this.setNewVideo.bind(this);
    this.setSearchedVideos = this.setSearchedVideos.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.searchWhileTyping = this.searchWhileTyping.bind(this);
  }

  componentDidMount() {
    this.startSearch('search');
    this.interval = setInterval(() => this.runOnInterval(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  runOnInterval() {
    //console.log('timer tick');

    if( this.state.searchBarChange === true ){
      //do search on searchBarText
      //console.log('run search here.');

      this.startSearch(this.state.searchBarText);

      this.setState({
        searchBarChange: false
      });
    }
  }

  searchWhileTyping(searchTerm) {
    //console.log('search while typing:' + searchTerm);

    this.setState({
      searchBarText: searchTerm,
      searchBarChange: true
    });
  }

  setNewVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  setSearchedVideos(videos) {
    this.setState({
      videos: videos,
      currentVideo: videos[0]
    });
  }

  startSearch(searchTerm){
    //console.log('search started.')
    let searchOptions = {
      query: searchTerm,
      max: 5,
      key: YOUTUBE_API_KEY
    }
    // searchYouTube(searchOptions, this.setSearchedVideos);
    this.props.searchYouTube(searchOptions, this.setSearchedVideos);  //PASS SEARCHYOUTUBE AS PROP
  }

  render() {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search searchHandler={this.startSearch} liveSearchHandler={this.searchWhileTyping} /></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={this.state.currentVideo} /></div>
        </div>
        <div className="col-md-5">
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

