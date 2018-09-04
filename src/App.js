import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Card from '@/widget/card'
import Data from '@/assets/data'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: Data
    }
    this.handlePlusClick = this.handlePlusClick.bind(this)
  }
  createCards = () => {
    let cards = []
    for (let idx in this.state.cards) {
      let card = this.state.cards[idx]
      cards.push(
        <CSSTransition key={idx} timeout={500} classNames="fade">
          <Card name={ card.name } age={ card.age } country={ card.country } />
        </CSSTransition>
      )
    }
    return cards
  }
  handlePlusClick() {
    let cards = this.state.cards.slice('')
    cards.push({
      "name": "New User",
      "age": 100,
      "country": "New Country"
    })
    this.setState({
      cards: cards
    })
  }
  render() {
    let cards = this.createCards() 

    return (
      <div className="App">
        <div className="header" >
          <span className="header__title"> User List </span>
          <span className="header__add-user" onClick={ this.handlePlusClick }> + </span>
        </div>
        
        <TransitionGroup className="cards">
          { cards }
        </TransitionGroup>
      </div>
    )
  }
}

export default App
