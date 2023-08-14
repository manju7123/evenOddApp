import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    number: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const {number} = this.state
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({
      number: prevState.number + randomNumber,
    }))
  }

  render() {
    const {number} = this.state
    const text = number % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading"> Count {number}</h1>
          <p className="paragraph"> Count is {text}</p>
          <button className="btn" onClick={this.onIncrement} type="button">
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
