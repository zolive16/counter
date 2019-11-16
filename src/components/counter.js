import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setCount(parseInt(event.target.value))
  }

  return (
    <div>
      <p>Le compteur est  à : {count} </p>
      <div className="block">
      <input type="number" value={count} onChange={handleChange} ></input>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      </div>
    </div>
  );
}

export default Counter;