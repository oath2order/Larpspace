import React from "react";

const wrapStyle = {
  height: "100%",
  width: "100%",
  backgroundColor: "red"
}


const Wrapper = props => <main className="wrapper" {...props} style={wrapStyle}/>;

export default Wrapper;
