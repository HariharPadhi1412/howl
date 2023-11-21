import React from "react";
import "./Body.css";
import collaborations from "../Assets/collaborations.jpg";

function Body() {
  return (
    <>
      <section>
        <p className="para1">
          We exist because we want to help you navigate and harness the
          potential of this ever-changing digital landscape.
        </p>
        <img src={collaborations} alt="collab" className="collabImg" />
        <div className="growthText">
          <span className="text1">Your</span>
          <br />
          <span className="text2">Growth</span>
          <br />
          <span className="text3">Partners</span>
          <br />
        </div>
        <p className="para2">
          It's not a game of guesses,it's a game of numbers where growth is the
          ultimate goal.We leverage cutting-edge technology and data-driven
          insights to help you answer questions that unlock growth
        </p>
      </section>
    </>
  );
}

export default Body;
