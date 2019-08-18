import React from 'react'
import ColorContext from './ColorContext'

function Logger({ message }) {
  console.log(message)
  return null
}

function ColorDisplay() {
  return (
    <ColorContext.Consumer>
      {color => (
        <>
          <Logger message="You rendered the ColorDisplay"/>
          <h3>The color is {color.value}</h3>
          <button onClick={() => color.change('green')}>Go Green</button>
          <button onClick={() => color.change('blue')}>Go Blue</button>
        </>
      )}
    </ColorContext.Consumer>
  )
}

export default React.memo(ColorDisplay)