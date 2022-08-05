import React, {useState, useRef} from 'react'
import Player from './components/Player';
import Song from './components/Song';
import chillHop from './data'
import Library from './components/Library';
import Nav from './components/Nav';
import './styles/style.css'

function App() {
// State
  const [songs, setSongs] = useState(chillHop())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })
  const [isActive, setIsActive] = useState(false)
  //Ref
  const audioRef = useRef(null)

  const timeUpdateHandler = (e) =>{
    const currentTime = e.target.currentTime
    const duration = e.target.duration || 0
    setSongInfo({...songInfo, currentTime, duration })
  }
    // Event handlers


  return (
    <div className="App">
      <Nav isActive={isActive} setIsActive={setIsActive} />
      <div className="app-inner-wrapper">
        <Song currentSong={currentSong} />
        <Player 
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong} 
        songInfo={songInfo} 
        setSongInfo={setSongInfo}/>
      </div>
      <Library 
      isActive={isActive}
      setIsActive={setIsActive}
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
