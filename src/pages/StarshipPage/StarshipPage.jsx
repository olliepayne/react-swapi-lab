import React, { Component } from 'react'
import { getDetails } from '../../services/sw-api'

class StarshipPage extends Component {
  state = {
    url: this.props.location.state.starship.url, 
    starshipDetails: {}
  }

  async componentDidMount() {
    const starshipDetails = await getDetails(this.state.url)
    this.setState({starshipDetails})
  }

  render() {
    const {starshipDetails} = this.state

    return (
      <div>
        {starshipDetails.name}
      </div>
    )
  }
}

export default StarshipPage