import React, { useState } from "react";
import PropTypes from "prop-types";

function Counter(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <button onClick={increment}>increment</button>
    </div>
  );
}

Counter.propTypes = {};

export default Counter;
