import React, { Component } from 'react'
import { render } from 'react-dom'
import ColorContext from './ColorContext'
import CounterContext from './CounterContext'
import ColorDisplay from './ColorDisplay'
import Counter from './Counter'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: {
        value: 'blue',
        change: this.changeColor.bind(this)
      },
      counter: {
        count: 0,
        inc: this.inc.bind(this),
        dec: this.dec.bind(this)
      }
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(color) {
    this.setState({
      color: { ...this.state.color, value: color }
    })
  }
  inc() {
    this.setState({
      counter: { ...this.state.counter, count: this.state.counter.count + 1 }
    })
  }
  dec() {
    this.setState({
      counter: { ...this.state.counter, count: this.state.counter.count - 1 }
    })
  }
  render() {
    return (
      <ColorContext.Provider value={this.state.color}>
        <CounterContext.Provider value={this.state.counter}>
          <h1>Welcome</h1>
          <ColorDisplay />
          <Counter />
        </CounterContext.Provider>
      </ColorContext.Provider>
    )
  }
}

render(<App />, document.getElementById('root'))
