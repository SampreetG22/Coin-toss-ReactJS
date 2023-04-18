import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {num: 0, Total: 0, HeadsCount: 0, TailsCount: 0}

  BtnClick = () => {
    const result = Math.floor(Math.random() * 2)
    const HT = result === 0 ? 'heads' : 'tails'
    if (HT === 'heads') {
      this.setState(prevState => ({
        Total: prevState.Total + 1,
        HeadsCount: prevState.HeadsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        Total: prevState.Total + 1,
        TailsCount: prevState.TailsCount + 1,
      }))
    }
    this.setState({num: result})
  }

  render() {
    const {num, Total, HeadsCount, TailsCount} = this.state
    const HEADS = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const TAILS = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const imageUrl = num === 0 ? HEADS : TAILS
    return (
      <div className="mainContainer">
        <div className="cardContainer">
          <h1 className="mainHead">Coin Toss Game</h1>
          <p className="mainPara">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="tossImage" />
          <button onClick={this.BtnClick} type="button" className="BtnCSS">
            Toss Coin
          </button>
          <div className="resultsList">
            <p className="listEl">Total: {Total}</p>
            <p className="listEl">Heads: {HeadsCount}</p>
            <p className="listEl">Tails: {TailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
