import React from "react";

export class Name extends React.Component {
  render() {
    const name = this.props.name;
    return <div className="name-bird">{name}</div>;
  }
}
