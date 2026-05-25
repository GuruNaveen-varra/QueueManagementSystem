// Child.jsx

import { forwardRef } from "react";

const Child = forwardRef((props, ref) => {
  return (
    <div>
      <h2>Child Component</h2>

      {/* Child receives and connects reference */}
      <input
        ref={ref}
        type="text"
        placeholder="Type here..."
        className="bg-white "
      />
    </div>
  );
});

export default Child;
