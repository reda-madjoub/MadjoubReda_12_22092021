import React from 'react'
import '../sass/NavbarVerticale.scss'
import yoga from '../../img/yoga.svg'
import bike from '../../img/bike.svg'
import swim from '../../img/swim.svg'
import workout from '../../img/workout.svg'

export default function NavbarVerticale() {
    return (
        <div className="navbarLeft">
            <img src={yoga} alt="yoga icon" />
            <img src={bike} alt="bike icon" />
            <img src={swim} alt="swim icon" />
            <img src={workout} alt="workout icon" />
            <p>Copiryght, SportSee 2020</p>
        </div>
    )
}

