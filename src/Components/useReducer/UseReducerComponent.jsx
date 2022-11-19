import React, { useState, useReducer } from 'react'
const OPERATIONS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT"
};

export default function UseReducerComponent() {
  const [number, updateNumber] = React.useState(0);

  // const [state, dispatch] = React.useReducer((stat0
  //   /* implement the reducer which should update the state based on the action */
  //   return state;
  // }, 0);


  const reducer = (state, action) => {
    if (action.type == "ADD") {
      updateNumber(state + 1)

      return state + 1

    }
    else if (action.type == "SUBTRACT") {
      updateNumber(state - 1)
      return state - 1
    }
  }
  const handleNumberChange = e => updateNumber((e.target.value));
  const [state, dispatch] = useReducer(reducer, number);
  return (
    <div>
      <div>
        <div id="result">{state}</div>
        <div>
          <button id="add" onClick={() => dispatch({ type: 'ADD' })}>Add</button>
          <button id="subtract" onClick={() => dispatch({ type: 'SUBTRACT' })}>Subtract</button>
        </div>
        <div>
          <input type="text" value={number} onChange={handleNumberChange} />
        </div>
      </div>
    </div>
  )
}
