import { useState } from "react";
import "./Counter.css";

function App() {
  const [count, setCount] = useState(0);

  function math1(value) {
    if (value == "increment") {
      if (count >= 10) {
        setCount(0);
        return;
      }
      setCount(count + 1);
    } else if (value == "decrement") {
      if (count <= 1) {
        setCount(0);
        return;
      }
      setCount(count - 1);
    } else {
      console.log("Give real value!");
    }
  }

  return (
    <>
      <div className="main">
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <div>
          <button onClick={() => math1("increment")}>Increment</button>
          <button onClick={() => math1("decrement")}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
