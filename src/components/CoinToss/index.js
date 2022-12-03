// Write your code here
import {Component} from 'react'

import './index.css'

const head = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tail = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {coinImage: head, Total: 0, Heads: 0, Tails: 0}

  onclickCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    const Image = tossResult === 0 ? head : tail

    this.setState(prevState => ({
      coinImage: Image,
      Total: prevState.Total + 1,
      Heads: Image === head ? prevState.Heads + 1 : prevState.Heads + 0,
      Tails: Image === tail ? prevState.Tails + 1 : prevState.Tails + 0,
    }))
  }

  render() {
    const {coinImage, Total, Heads, Tails} = this.state

    return (
      <div className="mainBgContainer">
        <div className="cardContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={coinImage} alt="toss result" className="coinImage" />
          <button type="button" className="button" onClick={this.onclickCoin}>
            Toss coin
          </button>
          <div className="paraContainer">
            <p className="para">Total: {Total}</p>

            <p className="para">Heads: {Heads}</p>

            <p className="para">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
