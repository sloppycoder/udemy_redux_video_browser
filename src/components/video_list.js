import React from 'react';
import VideoListItem from './video_list_item';

/* eslint arrow-body-style: ["error", "always"] */
const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return (
    <ul className="col-mid-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
