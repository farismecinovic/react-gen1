import React from "react";
import "./Title.css";

const Title = ({ name, age, clickHandler }) => {
  return (
    <h3 onClick={clickHandler} className="neka-klasa">
      Zdravo
    </h3>
  );
};

export default Title;
