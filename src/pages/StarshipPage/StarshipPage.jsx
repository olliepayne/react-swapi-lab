import React, { Component } from 'react'
import { getDetails } from '../../services/sw-api'
import { Link } from 'react-router-dom'

class StarshipPage extends Component {
  state = {
    url: this.props.location.state.starship.url,
    starshipDetails: {}
  }

  async componentDidMount() {
    console.log(this.state.url)
    const starshipDetails = await getDetails(this.state.url)
    this.setState({starshipDetails})
  }

  render() {
    const {starshipDetails} = this.state

    return (
      <div>
        <header style={{textAlign: 'center', backgroundColor: '#294952', color: 'white'}}>
          <h1>STAR WARS STARSHIPS</h1>
        </header>

        <div style={{textAlign: 'center'}}>
          <label>Name:  {starshipDetails.name}</label>
          <br></br>
          <label>Model: {starshipDetails.model}</label>
          <br></br>
          <Link
            to={{
              pathname: '/'
            }}
          >
            Return
          </Link>
        </div>

        {/* <label>Name: </label>
        {starshipDetails.name}
        <br></br>
        <label>Model: </label>
        {starshipDetails.model}
        <br></br>
        <Link
          to={{
            pathname: '/'
          }}
        >
          Return
        </Link> */}
      </div>
    )
  }
}

export default StarshipPage