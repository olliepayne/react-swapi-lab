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
        <label>Name: </label>
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
        </Link>
      </div>
    )
  }
}

export default StarshipPage