import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './pages/StarshipPage/StarshipPage'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Route
        exact path='/starship'
        render={({location}) => <StarshipPage />}
      />
      <StarshipList />
    </>
  )
}

export default App;
