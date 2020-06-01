import React from 'react';
import './style.scss';
import GiphyGifs from './containers/GiphyGifs';
import DisplayLogo from './components/DisplayLogo/DisplayLogo';

function App() {
  return (
    <div className="container">
      <DisplayLogo />
      <GiphyGifs />
    </div>
  );
}

export default App;
