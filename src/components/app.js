import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyBSW9Oi7ffwrkDH58hVaxTBBjYbJv2iuLE';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('arduino');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => { // eslint-disable-line
      this.setState({
        videos,
        selectedVideo: videos[2]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
