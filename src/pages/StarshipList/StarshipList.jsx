import React, { Component } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'
import { wrap } from 'module'

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
        <header style={{textAlign: 'center', backgroundColor: '#294952', color: 'white'}}>
          <h1>STAR WARS STARSHIPS</h1>
        </header>
        {this.state.results.length > 0 ?
        this.state.results.map((starship, index) => (
          <div
            key={index}
            style={{display: 'flex', justifyContent: 'center'}}
          >
            <button type="button" class="btn btn-secondary" style={{margin: '5px 0'}}>
              <Link
                to={{
                  pathname: '/starship',
                  state: {starship}
                }}
                style={{textDecoration: 'none', color: 'white'}}
              >
                {starship.name}
              </Link>
            </button>
          </div>
        ))
        :
        <>
          <p style={{textAlign: 'center'}}>Loading starships...</p>
        </>
        }
      </div>
    )
  }
}

export default StarshipList