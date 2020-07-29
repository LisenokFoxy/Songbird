import React from "react";
import { Section } from "./section";

export class Header extends React.Component {
  render() {
    const score = this.props.score;

    return (
      <div>
        <div className="header-logo">
          <div className="logo"></div>
          <div className="score">
            Score: <span className="span-score">{score}</span>
          </div>
        </div>
        <Section></Section>
      </div>
    );
  }
}
