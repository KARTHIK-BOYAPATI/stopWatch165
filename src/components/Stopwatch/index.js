import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {Seconds: 0}

  renderMinutes = () => {
    const {Seconds} = this.state
    const minutes = Math.floor(Seconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {Seconds} = this.state
    const seconds = Math.floor(Seconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  startButton = () => {
    this.timerId = setInterval(this.onClickStart, 1000)
  }

  StopButton = () => {
    clearInterval(this.timerId)
  }

  ResetButton = () => {
    clearInterval(this.timerId)
    this.setState({Seconds: 0})
  }

  onClickStart = () => {
    this.setState(prevState => ({Seconds: prevState.Seconds + 1}))
  }

  render() {
    const DisplayTime = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="MainContainer">
        <h1>Stopwatch</h1>
        <div className="CardContainer">
          <div className="MiniLogoContainer">
            <img
              className="MiniLogo"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="MiniLogoLabel">Timer</p>
          </div>
          <h1>{DisplayTime}</h1>
          <button
            onClick={this.startButton}
            type="button"
            className="ButtonStart Button"
          >
            Start
          </button>
          <button
            onClick={this.StopButton}
            type="button"
            className="Button ButtonStop"
          >
            Stop
          </button>
          <button
            onClick={this.ResetButton}
            type="button"
            className="Button ButtonReset"
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
