import React from 'react'
import {Link} from 'react-router-dom';
export const Navbar = ({handleColorCurrentPage}) => {

  return (
    <nav>
        <div><h1>Logo</h1></div>
        <ul>
            <li><Link onClick={handleColorCurrentPage} to='/'>Accueil</Link></li>
            <li><Link onClick={handleColorCurrentPage} to='/contact'>Contact</Link></li>
            <li><Link onClick={handleColorCurrentPage} to='/a-propos'>A propos</Link></li>
        </ul>
    </nav>
  )
}
