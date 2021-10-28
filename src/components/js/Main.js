import React, { Component } from 'react'
import Content from './Content'
import NavbarHorizontale from './NavbarHorizontale'
import NavbarVerticale from './NavbarVerticale'

class Main extends Component {
    render () {
        return (
            <>
                <NavbarVerticale />
                <NavbarHorizontale />
                <Content />
            </>
        )
    }
}

export default Main