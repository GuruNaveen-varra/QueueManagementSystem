import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
      <div>
        <h2 className="text-xl">Counter App</h2>

        <p>Counter Value is {state}</p>

        <button
          className="border-2 m-3 p-1 bg-blue-500 text-white"
          onClick={() => {
            setState(state + 1);
          }}
        >
          Increase
        </button>

        <button
          className="border-2 m-3 p-1 bg-black text-white"
          onClick={() => {
            setState(state - 1);
          }}
        >
          Decrease
        </button>

        <button
          className="border-2 m-3 p-1 bg-red-950 text-white"
          onClick={() => {
            (setState(0), setName(""));
          }}
        >
          Reset
        </button>
      </div>

      <input
        type="number"
        className="w-30 border-2 p-1 text-sm"
        value={name}
        placeholder="Enter Number"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button
        className="border-2 m-3 p-1 bg-green-950 text-white"
        onClick={() => {
          setState(Number(name));
        }}
      >
        Set As {name}
      </button>
    </>
  );
};

export default Counter;
