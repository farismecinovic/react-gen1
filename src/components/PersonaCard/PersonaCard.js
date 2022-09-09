import React from "react";
import "./PersonaCard.css";

const PersonaCard = ({ image, name, occupation, verification }) => {
  return (
    <div>
      <div
        className="card"
        // style={{
        //   backgroundColor: verification && "green",
        // }}
      >
        <img src={image} alt="Slika" style={{ width: 200, heigth: 200 }} />
        <div className="container">
          {/* <h4>{verification ? <b>{name} ✅</b> : <b>{name}</b>}</h4> */}
          <h4>
            {name} {verification && "✅"}
          </h4>
          <p>{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;
