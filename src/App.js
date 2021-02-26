/* eslint-disable react/jsx-no-literals */
import React from 'react'
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom'
import Home from './Components/Home/Home'

/**
 * Main app
 * @returns {void} .
 */
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
    </Switch>
  </BrowserRouter>
)

export default App
