import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    let interval = null;

    if (startCount) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startCount]);

  const Reset = () => {
    setStartCount(false);
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Test Basic React 2</h1>
      <div className="count">{count < 10 ? "0" + count : count}</div>
      <div className="btn-group">
        <button onClick={() => setStartCount(true)}>start</button>
        <button onClick={() => setStartCount(false)}>stop</button>
        <button onClick={() => Reset()}>reset</button>
      </div>
    </div>
  );
}
