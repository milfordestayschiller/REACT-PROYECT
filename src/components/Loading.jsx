import React from "react";
import "../components/assets/css/style.css"
import gif from "../react2.gif";
export default function Loading(){
  return (
    <div className="center text-center">
        <h1>Loading</h1>
     <img src={gif} alt="" style={{width: 200}} />
    </div>
  );
}