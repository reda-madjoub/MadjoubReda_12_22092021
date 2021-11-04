import React, { Component } from 'react'
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

export default Main