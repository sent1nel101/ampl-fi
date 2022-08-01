import React from 'react'

const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying }) => {

  const songSelectHandler = () => {

    if (isPlaying){
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined){
        playPromise.then((audio) => {
          audioRef.current.play()
        })
      }
    }
    setCurrentSong(song)
    audioRef.current.play()
  }
  return (
    <div className="library-song" onClick={songSelectHandler}>
        <img alt={song.name} src={song.cover} />
        <p className="song-name"> {song.name}</p>
        <p className="song-artist">{song.artist}</p>
    </div>
  )
}

export default LibrarySong