import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ isActive, songs, setSongs, setCurrentSong, songInfo, currentSong, audioRef, isPlaying, id }) => {
  return (
    <div className={`library ${isActive ? 'library-active' : ''}`}>
        <h2 className="absolute">Library</h2>
        <div className="library-songs">
            {songs.map((song, i) => (<LibrarySong setSongs={setSongs} key={i} song={song} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} songinfo={songInfo} setSongs={setSongs} audioRef={audioRef} isPlaying={isPlaying}/> ))}
        </div>

    </div>
  )
}

export default Library