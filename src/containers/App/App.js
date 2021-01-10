import React from 'react';
import './App.css';
import { Contests } from '../../components/contests/contests';
import { Suggestions } from '../../components/suggestions/suggestions';
import { Playlists } from '../../components/playlists/playlists';
import { Characters } from '../../components/characters/characters';
import { LastNews } from '../../components/last-news/last-news';

function App() {
  return (
    <div className="container">
      <div className="first-section">
        <Contests />
        <Suggestions />
      </div>
      <Playlists />
      <Characters />
      <LastNews />
    </div>
  );
}

export default App;