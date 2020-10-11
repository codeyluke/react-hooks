import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentD() {
  const countContext = useContext(CountContext)
  return (
    <div>
      <div>Component D - {countContext.countState}</div>
      <button onClick={() => countContext.countDispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => countContext.countDispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => countContext.countDispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default ComponentD
