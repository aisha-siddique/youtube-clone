import React from 'react';
import './SideMenu.css';
import { FaHome, FaFire, FaHistory, FaPlayCircle, FaThumbsUp, FaMusic, FaGamepad, FaFilm, FaTachometerAlt } from 'react-icons/fa';
import { MdSubscriptions, MdVideoLibrary } from 'react-icons/md';

const sections = [
  {
    title: 'Home',
    items: [
      { icon: <FaHome />, text: 'Home' },
      { icon: <FaFire />, text: 'Trending' },
      { icon: <MdSubscriptions />, text: 'Subscriptions' },
    ],
  },
  {
    title: 'Library',
    items: [
      { icon: <MdVideoLibrary />, text: 'Library' },
      { icon: <FaHistory />, text: 'History' },
      { icon: <FaPlayCircle />, text: 'Your Videos' },
      { icon: <FaThumbsUp />, text: 'Liked Videos' },
    ],
  },
  {
    title: 'More',
    items: [
      { icon: <FaMusic />, text: 'Music' },
      { icon: <FaGamepad />, text: 'Gaming' },
      { icon: <FaFilm />, text: 'Movies' },
      { icon: <FaTachometerAlt />, text: 'Dashboard' },
    ],
  },
];

function SideMenu() {
  return (
    <div className="side-menu visible"> {/* Always use the visible class */}
      <ul className="menu-sections">
        {sections.map((section, index) => (
          <li key={index} className="menu-section">
            <h2 className="section-title">{section.title}</h2>
            <ul className="section-items">
              {section.items.map((item, idx) => (
                <li key={idx} className="menu-item">
                  <span className="icon">{item.icon}</span>
                  <span className="text">{item.text}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;