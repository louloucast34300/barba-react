import React from 'react'
import {Link} from 'react-router-dom';
export const Navbar = ({handleColor}) => {
  return (
    <nav>
        <div><h1>Logo</h1></div>
        <ul>
            <li><Link onClick={handleColor} to='/'>Accueil</Link></li>
            <li><Link onClick={handleColor} to='/contact'>Contact</Link></li>
            <li><Link onClick={handleColor} to='/a-propos'>A propos</Link></li>
        </ul>
    </nav>
  )
}
