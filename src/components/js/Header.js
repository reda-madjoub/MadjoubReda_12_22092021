import React from 'react'
import '../sass/Header.scss'

const Header = (props) => {

    // console.log(props);
    return (
        <header>
            <br />
            <h2>Bonjour <span id="nameUser">{props?.name}</span></h2>
            <br />
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <br />
        </header>
    )
}

export default Header