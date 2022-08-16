import React from 'react'

const LibrarySong = ({ song, songs, setSongs, currentSong, setCurrentSong, setIsPlaying, id }) => {

  // const songSelectHandler = () =>  {
  //   if (isPlaying){
  //     const playPromise = audioRef.current.play()
  //     setCurrentSong(song)
  //     if (playPromise !== undefined){
  //       playPromise.then((audio) => {
  //         audioRef.current.play()
  //       })
  //     }
  //   }
  // }

  const songSelectHandler = async () => {
    await setCurrentSong(song);
    setIsPlaying(true);
    const newSongs = songs.map((song) => {
     if (song.id === id){
      return {
        ...song,
        active: true,
      }
    }else {
        return {
          ...song,
          active: false,
        }
      }
  })
  setSongs(newSongs) 
};
  return (
    <div 
    onClick={songSelectHandler} 
    className={`library-song ${song.id === currentSong.id ? "selected" : ""} `}
    >
        <img alt={song.name} src={song.cover} />
        <p className="song-name">{song.name}</p>
        <h6 className="song-artist">{song.artist}</h6>
    </div>
  )
}

export default LibrarySong