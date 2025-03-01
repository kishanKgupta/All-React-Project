import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleCounter(action) {
    setCount((prev) => {
      if (action === "increment") return prev >= 10 ? 0 : prev + 1;
      if (action === "decrement") return prev <= 1 ? 0 : prev - 1;
      return prev;
    });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="border border-gray-400 bg-white shadow-lg rounded-lg p-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>
        <h1 className="text-3xl font-semibold text-blue-600">{count}</h1>
        <div className="mt-4 flex gap-4">
          <button
            onClick={() => handleCounter("increment")}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-600"
          >
            Increment
          </button>
          <button
            onClick={() => handleCounter("decrement")}
            className="px-4 py-2 bg-red-500 text-red-700 rounded-md hover:bg-red-600"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
