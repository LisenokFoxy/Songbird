// import React, { Component } from './node_modules/react';
import React from 'react';
import './style.css';
import Header from '../Header/Header';
import Question from '../Question/Question';
import InstrumentList from '../InstrumentList/InstrumentList';
import Result from '../Result/Result';
import instrumentsData from './instrumentsData';
import instrumentImage from './instruments.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: this.randomNumber(instrumentsData[0].length),
      instrumentImage: instrumentImage,
      instrumentName: '*****',
      score: 0,
      currentRound: 0,
      maxScore: instrumentsData.length * instrumentsData[0].length - instrumentsData[0].length,
    }
  }

  randomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  correctinstrumentName = (instrumentInfo) => {
    if (!instrumentInfo) {
      this.setState({
        instrumentImage: instrumentImage,
        instrumentName: '******',
      });
      return;
    }
    this.setState({
      instrumentImage: instrumentInfo.image,
      instrumentName: instrumentInfo.name,
    });
  }

  changeScore = (counter) => {
    this.setState({
      score: this.state.score + counter,
    })
  }

  nextRound = () => {
    this.setState({
      currentRound: this.state.currentRound + 1,
      random: this.randomNumber(instrumentsData[0].length),
    });
  }

  restartGame = () => {
    this.setState({
      random: this.randomNumber(instrumentsData[0].length),
      instrumentImage: instrumentImage,
      instrumentName: '******',
      score: 0,
      currentRound: 0,
    });
    [document.querySelector('.question'), document.querySelector('.content-wrapper'), document.querySelector('.next-level')].forEach((e) => {
      e.classList.remove('hide');
    });
    document.querySelector('.result-container').classList.add('hide');
    this.correctinstrumentName();
    document.querySelectorAll('.element').forEach((e) => {
      e.firstChild.classList.remove("correct-answer");
      e.firstChild.classList.remove("incorrect-answer");
    });
    document.querySelector('.active').classList.remove("active");
    document.querySelector('.question-item').classList.add("active");
    document.querySelector('.next-level').firstChild.innerHTML = 'Next Level';
  }

  render() {
    return (
      <div className="container">
        <Header score={this.state.score} />
        <Question
          instrumentsData={instrumentsData}
          randomNumber={this.state.random}
          instrumentName={this.state.instrumentName}
          instrumentImage={this.state.instrumentImage}
          currentRound={this.state.currentRound}
        />
        <InstrumentList
          instrumentsData={instrumentsData}
          randomNumber={this.state.random}
          correctinstrumentName={this.correctinstrumentName}
          changeScore={this.changeScore}
          currentRound={this.state.currentRound}
          nextRound={this.nextRound}
        />
        <Result
          score={this.state.score}
          maxScore={this.state.maxScore}
          restartGame={this.restartGame}
        />
      </div>
    )
  }
}

export default App
