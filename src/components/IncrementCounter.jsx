import React, { useState } from 'react'

const IncrementCounter = () => {

  // Hook
  const [counter, setCounter] = useState(0)

  // Function 
  const incrementCounter = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  }

  // Function 
  const decrementCounter = (e) => {
    e.preventDefault();
    setCounter(counter - 1);
  }

  const counterStyle = {
    padding: "10px",
    border: "1px solid #eee",
    textAlign: "center"
  }

  const counterNumberStyle = {
    fontSize: "50px",
    marginBottom: "15px",
  }

  const counterBtnStyle = {
    padding: "10px",
    border: "1px solid blue",
    backgroundColor: "#00f",
    color: "#fff",
    cursor: "pointer",
    margin: "0 5px"
  }

  return (
    <div style={counterStyle}>
      <div style={counterNumberStyle}>{counter}</div>
      {/* On Click Event */}
      <button onClick={(e) => incrementCounter(e)} style={counterBtnStyle}>Increment</button>
      <button onClick={(e) => decrementCounter(e)} style={counterBtnStyle}>Decrement</button>
    </div>
  )
}

export default IncrementCounter