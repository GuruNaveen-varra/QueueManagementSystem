// App.jsx

import { useRef } from "react";
import Input from "./Input.jsx";

function App() {
  // Parent creates reference
  const inputRef = useRef();

  // Parent controls child input
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Parent Component</h1>

      {/* Parent sends reference to Child */}
      <Input ref={inputRef} />

      <br />
      <br />

      <button onClick={focusInput}>Focus Child Input</button>
    </div>
  );
}

export default App;
