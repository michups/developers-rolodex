import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => (
  <div className="card-list">
    {props.developers.map((developer) => (
      <Card key={developer.id} developer={developer} />
    ))}
  </div>
);
