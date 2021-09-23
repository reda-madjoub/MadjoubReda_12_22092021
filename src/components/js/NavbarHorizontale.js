import React from 'react'
import '../sass/NavbarHorizontale.scss'
import  logo from '../../img/logo.svg'

export default function NavbarHorizontale() {
    return (
        <div className="navbarTop">
            <img src={logo} alt="logo icon" />
            <ul>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </div>
    )
}
