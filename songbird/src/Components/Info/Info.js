import React from "react";

export class Info extends React.Component {
  render() {
    const info = this.props.info;
    return <div className="info">{info}</div>;
  }
}
