import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss'
import Main from './components/js/Main'
import NotFound from './components/js/NotFound'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route path="/:id" component={Main} />
      <Route component={NotFound}/>
    </Switch>
    </div>
    </BrowserRouter>

  )
}

export default App
