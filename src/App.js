import React, {useState} from 'react'
import Player from './components/Player';
import Song from './components/Song';
import chillHop from './data'
import Library from './components/Library';

function App() {

  const [songs, setSongs] = useState(chillHop())
  const [currentSong, setCurrentSong] = useState(songs[2])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <div className="inner-wrapper">
        <h1>Ampl-Fi</h1>
        <h3> &amp; Chill Out...</h3>
      </div>
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library songs={songs} currentSong={currentSong} />
    </div>
  );
}

export default App;
