import React from 'react'

const LibrarySong = ({ song }) => {
  return (
    <div className="library-song">
        <img alt={song.name} src={song.cover} />
        <p className="song-name">{song.name}</p>
        <h6 className="song-artist">{song.artist}</h6>
    </div>
  )
}

export default LibrarySong