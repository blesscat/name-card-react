import React, { Component } from 'react'
import avatar from '@/assets/user.svg'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="card__avatar" src={avatar} alt="avatar"/>
        <div className="card__info">
          <span className="card__info--name"> Name : { this.props.name } </span>
          <span className="card__info--age"> Age : { this.props.age } </span>
          <span className="card__info--country"> Country : { this.props.country } </span>
        </div>
      </div>
    )
  }
}

export default Card