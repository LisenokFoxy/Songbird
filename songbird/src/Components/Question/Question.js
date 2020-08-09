// import React, { Component } from './node_modules/react';
import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import './style.css';
import AudioPlayer from 'react-h5-audio-player';

class Question extends React.Component {
  render() {
    const instrumentsData = this.props.instrumentsData;

    const Player = () => (
      <AudioPlayer
        className="audio-player"
        src={instrumentsData[this.props.currentRound][this.props.randomNumber].audio}
      />
    );
    return (
      <div className="question">
        <img src={this.props.instrumentImage} alt="instrument" />
        <div>
          <p>{this.props.instrumentName}</p>
          {Player()}
        </div>
      </div>
    );
  }
}

export default Question
