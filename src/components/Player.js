import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlay,
        faPause,
        faAngleLeft,
        faAngleRight
} from '@fortawesome/free-solid-svg-icons'


const Player = ({ songInfo, setSongInfo, audioRef, isPlaying, setIsPlaying, songs, currentSong, setCurrentSong }) => {

  const getTime =(time) =>{
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      )
  }

  // Event handlers
  const skipTrackHandler = (direction) => {
        let currentSongIndex = songs.findIndex(song => song.id === currentSong.id);
        console.log({currentSongIndex});
        if(direction === 'skip-forward'){
            setCurrentSong(songs[currentSongIndex+1 === songs.length ? 0 : currentSongIndex+1]);
        }
        if(direction === 'skip-back'){
            setCurrentSong(songs[currentSongIndex-1 < 0 ? songs.length-1 : currentSongIndex-1]);
        }
    }

const playSongHandler =()=>{
  if (!isPlaying)
  {audioRef.current.play()
  setIsPlaying(!isPlaying)}
  else return
}

const pauseSongHandler =()=>{
  if (isPlaying)
  {audioRef.current.pause()
  setIsPlaying(!isPlaying)}
  else return
}

const dragHandler =(e) => {
  audioRef.current.currentTime = e.target.value
  setSongInfo({...songInfo, currentTime: e.target.value})
}


  return (
    <div className="Player">
        <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" onChange={dragHandler} name="slider" id="slider" className="slider" />
            <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="back player-controls" icon={faAngleLeft} size="2x" style={{cursor: "pointer"}}/>
            { isPlaying ? <FontAwesomeIcon onClick={pauseSongHandler} className="pause player-controls" icon={faPause} size="2x" style={{cursor: "pointer"}} /> :  <FontAwesomeIcon onClick={playSongHandler} className="play player-controls" icon={faPlay} size="2x" style={{cursor: "pointer"}} /> }
            <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="forward player-controls" icon={faAngleRight} size="2x" style={{cursor: "pointer"}} />
        </div>
        
    </div>
  )
}

export default Player