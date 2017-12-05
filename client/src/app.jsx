// Write your react here!
import React from 'react';
import ReactDOM from 'react-dom';

import List from './list.jsx';
import Input from './input.jsx';
import Filter from './filter.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      listOfThings: ['hello!', 'say something here', 'this is a review lecture', 'somethings on your github', 'read the docs', 'never stop saying it', 'writestuff!', 'lalala', 'da da daa ddaa', 'plenty of words', 'code review time'],
      filterBy: '',
      listToView: []
    }

    this.addEntry = this.addEntry.bind(this);
    this.updateViewList = this.updateViewList.bind(this);
    this.seeState = this.seeState.bind(this);
  }

  componentDidMount() {
    this.setState({ listToView: this.state.listOfThings })
  }

  addEntry(text) {
    // console.log([...this.state.listOfThings, text]);
    this.setState({
      listOfThings: [...this.state.listOfThings, text]
    }, this.updateViewList)
  }

  updateViewList() {

    if (arguments.length > 0) {
      this.setState({
        filterBy: arguments[0]
      }, this.updateViewList)
    } else if (this.state.filterBy) {
      let filtered = this.state.listOfThings.filter(element => element.toString().includes(this.state.filterBy))
      this.setState({
        listToView: filtered
      })
    } else {
      this.setState({
        listToView: this.state.listOfThings
      })
    }
  }

  seeState() {
    console.log('App: ', this.state, this.props);
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.seeState}>See App state</button> */}
        Enter stuff here!
        <Input addEntryFunction={this.addEntry}/>
        Filter stuff here!
        <Filter filterListFunction={this.updateViewList} />
        <List listToRender={this.state.listToView}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementsByClassName('app')[0]);
