import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import VideoList from './VideoList';

function App() {
  const [isSideMenuVisible, setSideMenuVisible] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuVisible(!isSideMenuVisible);
  };

  return (
    <div className="App">
      <Navbar toggleSideMenu={toggleSideMenu} />
      <div className={`main-content ${isSideMenuVisible ? 'shifted' : ''}`}>
        {isSideMenuVisible && <SideMenu />}
        <VideoList />
      </div>
    </div>
  );
}

export default App;
