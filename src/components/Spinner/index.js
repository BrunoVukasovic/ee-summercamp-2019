import React from "react";
import spinner from "./gif/transparent-gif-spinner-1-original.gif";
export default () => (
  <div>
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </div>
);
