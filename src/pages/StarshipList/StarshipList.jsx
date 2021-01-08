import React, { Component } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

class StarshipList extends Component {
  state = {
    results: []
  }

  async componentDidMount() {
    const starshipsData = await getAllStarships()
    this.setState({results: starshipsData.results})
  }

  render() {
    return (
      <div>
        <h1>Starships</h1>
        {this.state.results.length > 0 ?
        this.state.results.map((starship, index) => (
          <div 
            key={index}
          >
            <Link
              to={{
                pathname: '/starship',
                state: {starship}
              }}
            >
            {starship.name}
            </Link>
          </div>
        ))
        :
        <>
          <p>Loading starships...</p>
        </>
        }
      </div>
    )
  }
}

export default StarshipList