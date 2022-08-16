import React, {useState, useRef} from 'react'
import Player from './components/Player';
import Song from './components/Song';
import chillHop from './data'
import Library from './components/Library';
import Nav from './components/Nav';

function App() {

  // Event handlers
    const timeUpdateHandler = (e) =>{
    const currentTime = e.target.currentTime
    const duration = e.target.duration || 0
    setSongInfo({...songInfo, currentTime, duration })
  }
  const autoPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }

  //  Ref
   const audioRef = useRef(null)

  //  State
  const [songs, setSongs] = useState(chillHop())
  const [currentSong, setCurrentSong] = useState(songs[2])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="App">
      <div className={`inner-wrapper ${isActive ? 'slide-active' : ''}`}>
        <Nav isActive={isActive} setIsActive={setIsActive} />
        <div className="inner-app-wrapper">
          <Song currentSong={currentSong} />
          <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} songInfo={songInfo} audioRef={audioRef} setSongInfo={setSongInfo}/>
        </div>
      </div>
      <Library setSongs={setSongs} isActive={isActive} setIsActive={setIsActive} isPlaying={isPlaying} setCurrentSong={setCurrentSong} audioRef={audioRef} songs={songs} songInfo={songInfo} currentSong={currentSong} />
      <audio onLoadedData={autoPlayHandler} onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
