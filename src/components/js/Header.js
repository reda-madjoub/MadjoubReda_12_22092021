import React from 'react'
import PropTypes from "prop-types";
import '../sass/Header.scss'

const Header = (props) => {
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

Header.propTypes = {
    name: PropTypes.string.isRequired
}

export default Header