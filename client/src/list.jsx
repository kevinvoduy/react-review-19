// Write your react here!
import React from 'react';
import Entry from './entry.jsx';

class List extends React.Component {
  constructor() {
    super()
  }

  checkStates() {
    console.log('List: ', this.state, this.props);
  }

  render() {
    return (
      <div>
        hello List
        <button onClick={this.checkStates.bind(this)}>Click to See List</button>
        {this.props.listToRender.map((element, index) => {
          return (<Entry entryDetails={element} key={index}/>)
        })}
      </div>
    )
  }
}

export default List;
