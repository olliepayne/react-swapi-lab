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
        {this.state.results.length > 0 ?
        <div className="icon-container">
          {this.state.results.map((starship) => (
            <div id="starshipDiv" key={starship.index}>
              <Link
                to={{
                  pathname: '/starship',
                  state: {starship}
                }}
              >
              {starship.name}
              </Link>
            </div>
          ))}
        </div>
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