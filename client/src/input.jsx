// Write your react here!
import React from 'react';

class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this);
    this.seeState = this.seeState.bind(this);
  }

  updateText(event) {
    this.setState({
      text: event.target.value
    })
  }

  seeState() {
    console.log('input: ', this.state, this.props);
  }

  render() {
    return (
      <div>
        hello Input
        <input onChange={this.updateText}/>
        <button onClick={() => this.props.addEntryFunction(this.state.text)}>Add Message</button>
        <button onClick={this.seeState}>See State</button>
      </div>
    )
  }
}

export default Input;
