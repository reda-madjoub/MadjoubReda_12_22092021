import React from 'react'
import '../sass/Header.scss'

const Header = (props) => {

    // console.log(props);
    return (
        <header>
            <h2>Bonjour <span id="nameUser">{props?.name}</span></h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

export default Header