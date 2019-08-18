import React from 'react'
import CounterContext from './CounterContext'

function Logger({ message }) {
  console.log(message)
  return null
}

function Counter() {
  return (
    <CounterContext.Consumer>
      {counter => (
        <>
          <Logger message="You rendered the Counter"/>
          <h3>The count is {counter.count}</h3>
          <button onClick={counter.inc}>Increment</button>
          <button onClick={counter.dec}>Decrement</button>
        </>
      )}
    </CounterContext.Consumer>
  )
}

export default React.memo(Counter);