import React, { useState } from 'react';

const BugExampleComponent = () => {
  // Intentional bug: using a non-existent variable name
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    // Intentional bug: referencing a non-existent variable
    setCounter(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default BugExampleComponent;
