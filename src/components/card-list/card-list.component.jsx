import React from "react";
import { Card } from "../card-component/card.component";
import "./card-list.styles.css";

export const CardList = (props) => {
  // console.log(props);
  // console.log(props.children);
  return (
    <div className="card-list">
      {props.guitars.map((guitar, i) => (
        <Card key={i} guitar={guitar} />
      ))}
    </div>
  );
};
