import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      text: '',
    }
  }
  updateText(value) {
    console.log('updateText', value);
    this.setState({
      text: value,
    })
  }
  render() {
    return (
      <div>
        <input onChange={(event) => this.updateText(event.target.value)}/>
        <button onClick={(event) => this.props.updateList(this.state.text)}>Add Sibling</button>
      </div>
    )
  }
}

export default Input;