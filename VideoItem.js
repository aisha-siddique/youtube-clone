import React from 'react';
import './VideoItem.css';

function VideoItem({ video }) {
  return (
    <div className="video-item">
      <img src={video.thumbnail} alt={video.title} className="thumbnail" />
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-channel">{video.channel}</p>
        <p className="video-views">{video.views}</p>
      </div>
    </div>
  );
}

export default VideoItem;
