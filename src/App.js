import React from 'react';
import './App.css';
import HookTimer from './components/HookTimer';
// import Counter from './components/Counter';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// import ComponentC from './components/ComponentC';

// import DataFetchingTwo from './components/DataFetchingTwo'

// export const CountContext = React.createContext()

// const initialState = 0

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (

    <div className="app">
      <HookTimer />
    </div>

    // <div className="App">
    //   <DataFetchingTwo />
    // </div>

    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
    //   <div className="App">
    //     Count - {count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
  );
}

export default App;
