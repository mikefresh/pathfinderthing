import React from "react";
import { Steps } from "antd";
import { Router } from "@reach/router";
import Start from "./start";
import Ancestry from "./ancestry";
import Background from "./background";
import Class from "./class";

const { Step } = Steps;

function CharacterCreation(props) {
  return (
    <section>
      <h1>Character Creation</h1>
      <Steps className="steps" current={0}>
        <Step title="Start" />
        <Step title="Ancestry" />
        <Step title="Background" />
        <Step title="Class" />
        <Step title="Eqipment" />
        <Step title="Details" />
      </Steps>

      <Router>
        <Start path="/" />
        <Ancestry path=":id/ancestry" />
        <Background path=":id/background" />
        <Class path=":id/class" />
      </Router>
    </section>
  );
}

export default CharacterCreation;
