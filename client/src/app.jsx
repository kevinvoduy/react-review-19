import React from 'react';
import ReactDOM from 'react-dom';

import List from './list.jsx';
import Input from './input.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: ['Christine', 'Donnie', 'Christina'],
    }
  }

  updateList(value) {
    this.setState({
      list: [...this.state.list, value]
    })
  }

  render() {
    return (
      <div>
      Family Extender!
      <Input updateList={this.updateList.bind(this)}/>
      <List list={this.state.list}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))