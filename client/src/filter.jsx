// Write your react here!
import React from 'react';

class Filter extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this);
    this.seeState = this.seeState.bind(this);
  }

  updateText(event) {
    // let text = event.target.value;
    // this.setState({
    //   text
    // }, () => this.props.filterListFunction(text));

    // this.setState({
    //   text: event.target.value
    // }, () => this.props.filterListFunction(event.target.value));

    this.setState({
      text: event.target.value
    }, () => this.props.filterListFunction(this.state.text));
  }

  seeState() {
    console.log('Filter: ', this.state, this.props);
  }

  render() {
    return (
      <div>
        hello Filter
        <input onChange={this.updateText}/>
        {/* <button onClick={() => this.props.addEntryFunction(this.state.text)}>Add Message</button> */}
        <button onClick={this.seeState}>See State</button>
      </div>
    )
  }
}

export default Filter;
