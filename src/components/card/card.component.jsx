import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="developer"
      src={`https://robohash.org/${props.developer.id}?set=set2$size=180x180`}
    />
    <h2>{props.developer.name}</h2>
    <p>{props.developer.email}</p>
  </div>
);
