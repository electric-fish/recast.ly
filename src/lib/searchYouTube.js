var searchYouTube = (options, callback) => {
  // TODO

  let url = 'https://www.googleapis.com/youtube/v3/search';

  $.get(url,
    {
      part: 'snippet',
      maxResults: options.max,
      q: options.query,
      key: options.key,
      type: 'video',
    }
  ).done( (data) => callback(data.items) ).fail((error) => console.error('Failed to fetch from YouTube API.', error) );
  // ).done( (data) => { callback(data.items); console.log(data.items); } ).fail((error) => console.error('Failed to fetch from YouTube API.', error) );

};

export default searchYouTube;