import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="App">
      <h1>Test Basic React</h1>
      <div>
        <button onClick={() => decrement()}>-</button>
        <span>{count}</span>
        <button onClick={() => increment()}>+</button>
      </div>
    </div>
  );
}
