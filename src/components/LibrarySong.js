import React from 'react'

const LibrarySong = ({ song, songs, setSongs, setCurrentSong, audioRef, isPlaying, isActive, setIsActive }) => {

  const songSelectHandler = () => {
    setCurrentSong(song)
    // Active toggle
    setSongs(songs.map((targetSong) =>{
      if (targetSong.id === song.id ){
        return {
        ...targetSong,
        active: true,
      }
    }else{
      return {
        ...targetSong,
        active: false,
      }
    }
    },
    setIsActive(!isActive)
    ))
    // check if song is playing
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
  return (
    <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={songSelectHandler}>
        <img alt={song.name} src={song.cover} />
        <p className="song-name"> {song.name}</p>
        <p className="song-artist">{song.artist}</p>
    </div>
  )
}

export default LibrarySong