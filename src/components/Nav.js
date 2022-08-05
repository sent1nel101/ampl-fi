import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ isActive, setIsActive}) => {

   return (
    <nav>
        <div className="inner-wrapper">
        <h1>Ampl-Fi</h1>
        <h3> &amp; Chill Out...</h3>
      </div>
        <button onClick={() => setIsActive(!isActive)}>Library
            <FontAwesomeIcon icon={faMusic} />
        </button>
    </nav>
  )
}

export default Nav