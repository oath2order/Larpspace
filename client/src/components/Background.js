import React from "react";

const Background = props => (
  <div
    style={{ backgroundImage: `url(${props.backgroundImage})`, height: "100vh", width: "100vw"}}
  >
    {props.children}
  </div>
);

export default Background;
