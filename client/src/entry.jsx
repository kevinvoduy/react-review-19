// Write your react here!
import React from 'react';

class Entry extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <ul>
        {this.props.entryDetails}
      </ul>
    )
  }
}

export default Entry;
