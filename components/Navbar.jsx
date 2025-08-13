import React from 'react'
import { NavLink } from 'react-router-dom'
 
function Navbar() {
  return (
     <div className="navbar">
         
        <li>
            <NavLink to="/Adventrous">ADVENTROUS</NavLink>
            
        </li>
        <li>
             <NavLink to="/Romance">ROMANCE</NavLink>
        </li>
        <li>
            <NavLink to="/Thriller">THRILLER</NavLink>
        </li>
        <li>
             <NavLink to="/Mystery">MYSTERY</NavLink>
        </li>
        <li>
             <NavLink to="/Horror">HORROR</NavLink>
        </li>
          
          
     </div>
  )
}

export default Navbar