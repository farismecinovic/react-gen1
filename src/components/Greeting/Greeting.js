import React from "react";

const Greeting = ({ name, handleParentClick }) => {
  return (
    <div>
      Hello, {name}
      <hr />
      <button onClick={() => handleParentClick(name)}>
        Click to change name
      </button>
    </div>
  );
};

export default Greeting;
