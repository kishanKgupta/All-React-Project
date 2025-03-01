import { useState } from "react";

function Counter() {
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
    <div className="flex items-center justify-center">
      <div className=" border-black border p-10">
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <button onClick={() => math1("increment")}>Increment</button>
        <button onClick={() => math1("decrement")}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
