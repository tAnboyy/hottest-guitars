import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.guitar.id}?set=set2&size=180x180`}
        alt=""
      />
      <h3>{props.guitar.name}</h3>
      <p>{props.guitar.email}</p>
    </div>
  );
};
