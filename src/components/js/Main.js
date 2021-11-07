import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import Content from './Content'
import NavbarHorizontale from './NavbarHorizontale'
import NavbarVerticale from './NavbarVerticale'


class Main extends Component {
    render () {
        const {id} = this.props.match.params
        return (
            <>
                <NavbarVerticale />
                <NavbarHorizontale />
                <Content id={id}/>
            </>
        )
    }
}
// Main.propTypes = {
//     id: PropTypes.number.isRequired
// }

export default Main