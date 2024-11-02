import React from 'react';
import Container from './style';
import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';
import PlayList from '../PlayList/PlayList';

const Sidebar = () => {
  return (
    <Container>
      <div className="top-link">
        <div className="logo">
          <img 
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" 
            alt="spotify" 
          />
        </div>
        <ul> 
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <PlayList/>
    </Container>
  );
};

export default Sidebar;
