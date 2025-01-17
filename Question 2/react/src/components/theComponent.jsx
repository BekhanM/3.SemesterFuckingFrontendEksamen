import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(20); 

  const increment = () => {
    setCount(count + 1); 
  };

  return (
    <div>
      <h1>$$$$: {count}</h1>
      <button onClick={increment}>Cash</button>
    </div>
  );
};

export default Counter;
