import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Content from './Content'
import NavbarHorizontale from './NavbarHorizontale'
import NavbarVerticale from './NavbarVerticale'


class Main extends Component {
    render () {
        // Get url params to choose which user dashboard it should render 
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
Main.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
          id: PropTypes.string.isRequired
        })
      }),
}

export default Main