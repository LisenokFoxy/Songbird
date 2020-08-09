// import React, { Component } from './node_modules/react';
import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import './style.css';
import AudioPlayer from 'react-h5-audio-player';
import winAnswerSound from './win.mp3';
import errorAnswerSound from './error.mp3';
import congratsSound from './congratulations-sound.mp3';


class InstrumentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrectAnswer: false,
      instrumentInfo: null,
      score: 5,
    }
    this.nextLvlRef = React.createRef();
    this.congratsAudio = new Audio(congratsSound);
  }

  isCorrectAnswer = (instrumentInfo, e) => {
    if (e.target.tagName !== 'LI') return;
    this.setState({
      instrumentInfo: instrumentInfo,
    });
    if (document.querySelector('.correct-answer')) {
      this.setState({
        isCorrectInstrumentName: true,
      });
      return;
    };
    if (instrumentInfo.name === this.props.instrumentsData[this.props.currentRound][this.props.randomNumber].name) {
      const correctAnswerAudio = new Audio(winAnswerSound);
      correctAnswerAudio.play();
      e.target.firstChild.classList.add("correct-answer");
      this.nextLvlRef.current.classList.add("correct-answer-next-level");
      this.props.correctinstrumentName(instrumentInfo);
      this.props.changeScore(this.state.score);
      this.setState({
        isCorrectAnswer: true,
        score: 5,
      });
    } else {
      if (e.target.firstChild.classList.contains("incorrect-answer")) return;
      const incorrectAnswerAudio = new Audio(errorAnswerSound);
      incorrectAnswerAudio.play();
      e.target.firstChild.classList.add("incorrect-answer");
      this.setState({
        score: this.state.score - 1,
      });
    }
  }

  nextRound = () => {
    if (!this.state.isCorrectAnswer) return;
    this.nextLvlRef.current.classList.remove("correct-answer-next-level");
    const questionListLength = document.querySelector('.question-items').childNodes.length - 1;
    if (this.props.currentRound === questionListLength - 1) {
      this.nextLvlRef.current.firstChild.innerHTML = 'Посмотреть результат'
    }
    if (this.props.currentRound < questionListLength) {
      document.querySelector('.active').nextElementSibling.classList.add("active");
      document.querySelector('.active').classList.remove("active");
      this.setState({
        isCorrectAnswer: false,
        instrumentInfo: null,
      });
      this.props.nextRound();
      this.props.correctinstrumentName();
      document.querySelectorAll('.element').forEach((e) => {
        e.firstChild.classList.remove("correct-answer");
        e.firstChild.classList.remove("incorrect-answer");
      });
    } else {
      [document.querySelector('.question'), document.querySelector('.content-wrapper'), this.nextLvlRef.current].forEach((e) => {
        e.classList.add('hide');
      });
      document.querySelector('.result-container').classList.remove('hide');
      this.congratsAudio.play();
      setTimeout(() => this.congratsAudio.pause(), 3000);
    }
  }

  render() {
    const instrumentsData = this.props.instrumentsData;
    const instrumentsList = instrumentsData[this.props.currentRound].map((instrumentInfo, index) => {
      return <li className="element" key={instrumentInfo.id} onClick={this.isCorrectAnswer.bind(this, instrumentInfo)}><div className="point" />{instrumentInfo.name}</li>
    });
    return (
      <div>
        <div className="content-wrapper">
          <div className="instrument-list">
            <ul>{instrumentsList}</ul>
          </div>
          <InstrumentInfo instrumentInfo={this.state.instrumentInfo} key={this.state.instrumentInfo === null ? this.state.instrumentInfo : this.state.instrumentInfo.name} />
        </div>
        <div className="next-level" ref={this.nextLvlRef} onClick={this.nextRound}><p>Next Level</p></div>
      </div>
    );
  }
}



class InstrumentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumentInfoBlock: !this.props.instrumentInfo || (!document.querySelector('.correct-answer') && !document.querySelector('.incorrect-answer')) ? <div><p>Послушайте плеер.</p><p>Выберите инструмент из списка</p></div> :
        <div>
          <div className="instrument-description">
            <img src={this.props.instrumentInfo.image} alt="instrument" />
            <ul className="instrument-body">
              <li>{this.props.instrumentInfo.name}</li>
              <li>{this.props.instrumentInfo.species}</li>
              <li><AudioPlayer
                src={this.props.instrumentInfo.audio}
              /></li>
            </ul>
          </div>
          <p className="instrument-description-info">{this.props.instrumentInfo.description}</p>
        </div>
    }
  }
  render() {
    return (
      <div className="instrument-info">{this.state.instrumentInfoBlock}</div>
    );
  }
}


export default InstrumentList;
