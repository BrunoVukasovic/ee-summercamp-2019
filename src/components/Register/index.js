import React from "react";
import { Link } from "react-router-dom";
import gif from "./gif/under-constuction.gif";
import ButtonSimple from "../ButonSimple";
export default () => (
  <div style={{ width: "16em", margin: "auto" }}>
    <img src={gif} alt="Working..." style={{ width: "15em", margin: "auto" }} />
    <h2 style={{ textAlign: "center" }}>Page is still under construction!</h2>
    <Link to="/">
      <ButtonSimple>Home</ButtonSimple>
    </Link>
    <Link to="/login">
      <ButtonSimple>Login</ButtonSimple>
    </Link>
  </div>
);
