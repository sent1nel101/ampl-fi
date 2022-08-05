import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlay,
        faPause,
        faAngleLeft,
        faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import '../styles/_player.scss'


const Player = ({songInfo, songs, currentSong, setCurrentSong, setSongInfo, isPlaying, setIsPlaying, audioRef}) => {
  
  //State

  const getTime =(time) =>{
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      )
  }

  // Event handlers
const playSongHandler =()=>{
  let playPromise = audioRef.current.play()
  if (playPromise !== undefined){
    playPromise.then(() => {
  if (!isPlaying)
  {audioRef.current.play()
  setIsPlaying(!isPlaying)
}  else return
  })
}
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

const skipTrackHandler = (direction) =>{
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id )
  if (direction === 'forward'){
    setCurrentSong(songs[(currentIndex + 1) % songs.length])
    if (isPlaying){
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined){
        playPromise.then((audio) => {
          audioRef.current.play()
        })
      }
    }
    audioRef.current.play()
   
  }else if (direction === 'back'){
    if (currentIndex > 0){
      setCurrentSong(songs[(currentIndex - 1)])
      if (isPlaying){
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined){
        playPromise.then((audio) => {
          audioRef.current.play()
        })
      }
    }
    audioRef.current.play()
    } else {
      setCurrentSong(songs[(songs.length - 1)])
     if (isPlaying){
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined){
        playPromise.then((audio) => {
          audioRef.current.play()
        })
      }
    }
    audioRef.current.play()
    }
  }
  
}


  return (
    <div className="Player">
        <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" onChange={dragHandler} name="slider" id="slider" className="slider" />
            <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon onClick={() => skipTrackHandler('back')} className="back player-controls" icon={faAngleLeft} size="2x" style={{cursor: "pointer"}}/>
            { isPlaying ? <FontAwesomeIcon onClick={pauseSongHandler} className="pause player-controls" icon={faPause} size="2x" style={{cursor: "pointer"}} /> :  <FontAwesomeIcon onClick={playSongHandler} className="play player-controls" icon={faPlay} size="2x" style={{cursor: "pointer"}} /> }
            <FontAwesomeIcon onClick={() => skipTrackHandler('forward')} className="forward player-controls" icon={faAngleRight} size="2x" style={{cursor: "pointer"}} />
        </div>
        
    </div>
  )
}

export default Player