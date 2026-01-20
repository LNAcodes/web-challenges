import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  // Parent
  const [count, setCount] = useState(0); // State
  return (
    <div className="counter">
      <h1>{count}</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => setCount(count - 1)}
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
