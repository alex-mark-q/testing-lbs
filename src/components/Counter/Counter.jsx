import React, { useState } from "react";

function Counter ({initialCount}) {

	const [count, setCounter] = useState(0);

	const increment	= () => {
		setCounter((prev) => prev + 1);
	}
	const decrement = () =? {
		setCounter((prev) => prev - 1);
	}
	const restart = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };
	return (
		<div>
      <h1>
        Count: <h3 data-testid="count">{count}</h3>
      </h1>
      <div>
        <button onClick={increment}> Increment</button>
        <button onClick={decrement}> Decrement</button>
        <button onClick={restart}> Restart</button>
        <button onClick={switchSigns}> Switch Signs</button>
      </div>
    </div>
	)
}

export default Counter;