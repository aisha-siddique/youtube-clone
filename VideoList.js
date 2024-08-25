import React from 'react';
import './VideoList.css';
import VideoItem from './VideoItem';

const videoData = [
  {
    id: 1,
    title: 'How to Learn React in 2023',
    channel: 'Coding Academy',
    views: '1M views • 1 month ago',
    thumbnail: 'https://via.placeholder.com/320x180',
  },
  {
    id: 2,
    title: 'Top 10 JavaScript Tips',
    channel: 'JS Mastery',
    views: '500K views • 2 weeks ago',
    thumbnail: 'https://via.placeholder.com/320x180',
  },
  {
    id: 3,
    title: 'Building a YouTube Clone',
    channel: 'Dev Tutorials',
    views: '750K views • 3 months ago',
    thumbnail: 'https://via.placeholder.com/320x180',
  },
  {
    id: 4,
    title: 'CSS Grid vs Flexbox',
    channel: 'Frontend Focus',
    views: '800K views • 2 weeks ago',
    thumbnail: 'https://via.placeholder.com/320x180',
  },
  {
    id: 5,
    title: 'Mastering Git & GitHub',
    channel: 'Version Control',
    views: '1.2M views • 1 month ago',
    thumbnail: 'https://via.placeholder.com/320x180',
  },
  {
    id: 6,
    title: 'Deploying React Apps',
    channel: 'Deployment Guru',
    views: '900K views • 1 week ago',
    thumbnail: 'https://via.placeholder.com/320x180',
  },
  {
    id: 7,
    title: 'Understanding Redux',
    channel: 'React Mastery',
    views: '1.1M views • 1 month ago',
    thumbnail: 'https://via.placeholder.com/320x180',
  },
  {
    id: 8,
    title: 'Advanced CSS Techniques',
    channel: 'CSS Experts',
    views: '600K views • 2 weeks ago',
    thumbnail: 'https://via.placeholder.com/320x180',
  },
 
];

function VideoList() {
  return (
    <div className="video-list">
      {videoData.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideoList;
