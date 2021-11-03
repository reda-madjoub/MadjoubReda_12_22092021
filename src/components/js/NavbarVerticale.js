import React from 'react'
import {NavLink} from 'react-router-dom'
import '../sass/NavbarVerticale.scss'
import yoga from '../../img/yoga.svg'
import bike from '../../img/bike.svg'
import swim from '../../img/swim.svg'
import workout from '../../img/workout.svg'

export default function NavbarVerticale() {
    return (
        <div className="navbarLeft">
         <NavLink to='/18'>
            <img src={yoga} alt="yoga icon" />
        </NavLink>
        <NavLink to='/18'>
            <img src={bike} alt="bike icon" />
        </NavLink>
        <NavLink to='/18'>
            <img src={swim} alt="swim icon" />
        </NavLink>
        <NavLink to='/18'>
            <img src={workout} alt="workout icon" />
        </NavLink>
            <p>Copiryght, SportSee 2020</p>
        </div>
    )
}

