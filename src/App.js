import React from 'react'
import './App.scss'
import NavbarHorizontale from './components/js/NavbarHorizontale'
import NavbarVerticale from './components/js/NavbarVerticale'


function App() {
  return (
    <div className="App">
        <NavbarVerticale />
        <NavbarHorizontale />
    </div>
  )
}

export default App
