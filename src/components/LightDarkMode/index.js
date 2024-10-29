import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: false}

  toggleButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const modeClass = isClicked ? 'light-mode' : 'dark-mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClass}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="buttons" onClick={this.toggleButton}>
            {isClicked ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
