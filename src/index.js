// TODO: Render the `App` component to the DOM
import searchYouTube from './lib/searchYouTube.js';
import App from './components/App.js';
//import exampleVideoData from './data/exampleVideoData.js';

// ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById("app")); //PASS SEARCHYOUTUBE AS PROP
