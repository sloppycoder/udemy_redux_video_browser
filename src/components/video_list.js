import React from 'react';

/* eslint arrow-body-style: ["error", "always"] */
const VideoList = (props) => {
  return (
    <ul>
      {props.videos.length}
    </ul>
  );
};

export default VideoList;
