import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';

const API_KEY = 'AIzaSyBSW9Oi7ffwrkDH58hVaxTBBjYbJv2iuLE';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'arduino' }, (videos) => { // eslint-disable-line
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
