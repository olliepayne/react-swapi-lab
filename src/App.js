import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import StarshipList from './pages/StarshipList/StarshipList'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <StarshipList />
    </>
  )
}

export default App;
