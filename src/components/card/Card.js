import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Card.css'

class Card extends Component {
  render() {
    return (
      <article className="card">
        <Link to={this.props.linkUrl}>
          <div>
            <img src={this.props.imgSrc} alt={this.props.titleText}/>
            <div className="text">
              <p>{this.props.titleText}</p>
            </div>
          </div>
        </Link>
      </article>
    )
  }
}

export default Card
