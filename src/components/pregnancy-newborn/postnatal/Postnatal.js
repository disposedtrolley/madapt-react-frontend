import React, { Component } from 'react';
import './Postnatal.css'
import { Player } from 'video-react';

class Postnatal extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <Player
        playsInline
        poster=""
        src="https://www.youtube.com/watch?v=FEEGO6SEw_g"
      />
    )
  }
}
export default Postnatal
