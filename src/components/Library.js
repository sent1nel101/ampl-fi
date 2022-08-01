import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ audioRef, songs, setCurrentSong, isPlaying}) => {
  return (
    <div className='library'>
        <h2 style={{color: 'white'}}>Library</h2>
        <div className="library-songs">
            {songs.map(song => (
            <LibrarySong 
            song={song} 
            songs={songs} 
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}  /> 
            ))}
        </div>

    </div>
  )
}

export default Library