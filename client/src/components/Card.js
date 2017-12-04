import React from "react";

const Card = props => (
  <div className="card">
    <div class="card-body">{props.children}</div>
  </div>
);

export default Card;
