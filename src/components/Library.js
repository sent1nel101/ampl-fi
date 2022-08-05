import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ audioRef, songs, setSongs, setCurrentSong, isPlaying, isActive, setIsActive}) => {
  return (
    <div className={`library ${isActive ? 'active-library' : ''}`}>
        <h2 style={{color: 'white'}}>Library</h2>
        <div className="library-songs">
            {songs.map(song => (
            <LibrarySong 
            song={song} 
            songs={songs} 
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying} 
            isActive={isActive}
            setIsActive={setIsActive} /> 
            ))}
        </div>

    </div>
  )
}

export default Library