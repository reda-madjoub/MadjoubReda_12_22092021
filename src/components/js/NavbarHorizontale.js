import React from 'react'
import {NavLink} from 'react-router-dom'
import '../sass/NavbarHorizontale.scss'
import  logo from '../../img/logo.svg'

export default function NavbarHorizontale() {
    return (
        <div className="navbarTop">
            <img src={logo} alt="logo icon" />
            <ul>
            <NavLink to='/'>
                <li>Accueil</li>
            </NavLink>
            <NavLink to='/'>
                <li>Profil</li>
            </NavLink>
            <NavLink to='/'>
                <li>Réglage</li>
            </NavLink>
            <NavLink to='/'>
                <li>Communauté</li>
            </NavLink>
            </ul>
        </div>
    )
}
