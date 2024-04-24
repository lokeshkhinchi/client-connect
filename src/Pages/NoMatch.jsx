import React, {useContext, useReducer} from 'react'
export const CounterContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function NoMatch() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CounterContext.Provider value={{
      countState: count,
      countDispatch: dispatch
    }}>      
      count = {count}
      <ComponetA />
      <ComponetB />
      <ComponetC />
    </CounterContext.Provider>
  )
}

function ComponetA () {
  const countContext = useContext(CounterContext)
  return (<div>
    Componet A
    <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
    <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
    <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>)
}

function ComponetB () {
  return (<div>Componet B</div>)
}

function ComponetC () {
  return (<div>Componet C</div>)
}

export default NoMatch