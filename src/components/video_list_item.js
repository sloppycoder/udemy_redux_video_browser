import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const snippet = video.snippet;
  const imageUrl = snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" role="presentation" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
