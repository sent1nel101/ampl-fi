import React, {useRef, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlay,
        faPause,
        faAngleLeft,
        faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import '../styles/_player.scss'


const Player = ({currentSong, isPlaying, setIsPlaying}) => {
  
  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })
  const timeUpdateHandler = (e) =>{
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({...songInfo, currentTime, duration })
  }
  const getTime =(time) =>{
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      )
  }

  //Ref
  const audioRef = useRef(null)
  // Event handlers
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
            <FontAwesomeIcon className="back player-controls" icon={faAngleLeft} size="2x" style={{cursor: "pointer"}}/>
            { isPlaying ? <FontAwesomeIcon onClick={pauseSongHandler} className="pause player-controls" icon={faPause} size="2x" style={{cursor: "pointer"}} /> :  <FontAwesomeIcon onClick={playSongHandler} className="play player-controls" icon={faPlay} size="2x" style={{cursor: "pointer"}} /> }
            <FontAwesomeIcon className="forward player-controls" icon={faAngleRight} size="2x" style={{cursor: "pointer"}} />
        </div>
        <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player