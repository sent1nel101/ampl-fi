import React, {useState, useRef} from 'react'
import Player from './components/Player';
import Song from './components/Song';
import chillHop from './data'
import Library from './components/Library';

function App() {

  const [songs, setSongs] = useState(chillHop())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  
  //Ref
  const audioRef = useRef(null)

    const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })
  const timeUpdateHandler = (e) =>{
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({...songInfo, currentTime, duration })
  }
    // Event handlers


  return (
    <div className="App">
      <div className="inner-wrapper">
        <h1>Ampl-Fi</h1>
        <h3> &amp; Chill Out...</h3>
      </div>
      <div className="app-inner-wrapper">
        <Song currentSong={currentSong} />
        <Player 
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong} 
        songInfo={songInfo} 
        setSongInfo={setSongInfo}/>
      </div>
      <Library 
      audioRef={audioRef} 
      songs={songs} 
      setSongs={setSongs} 
      isPlaying={isPlaying}
      setCurrentSong={setCurrentSong} />
      <audio 
      onLoadedMetadata={timeUpdateHandler} 
      onTimeUpdate={timeUpdateHandler}
      src={currentSong.audio}
      ref={audioRef}>
      </audio>
    </div>
  );
}

export default App;
