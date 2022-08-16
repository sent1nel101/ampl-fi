import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ isActive, setIsActive }) => {

   

  return (
    <nav>
        <div className="inner-wrapper">
        <h1>Ampl-Fi</h1>
        <h3> &amp; Chill Out...</h3>
        </div>

        <FontAwesomeIcon onClick={() => setIsActive(!isActive)} icon={faMusic} />
      
    </nav>
  )
}

export default Nav