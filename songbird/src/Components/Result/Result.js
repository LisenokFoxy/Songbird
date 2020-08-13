// import React, { Component } from './node_modules/react'
import React from 'react';
import './style.css';
import victory from './victory.jpg';
import result from './result.gif';

class GameEnd extends React.Component {
  render() {
    const content = this.props.score === this.props.maxScore ?
      <div className="result-container hide">
        <h2 className="score result">ВЫ НАБРАЛИ МАКСИМАЛЬНОЕ КОЛИЧЕСТВО БАЛЛОВ! ПОЗДРАВЛЯЮ!</h2>
        <img src={victory} alt="victory"></img>
      </div>
      :
      <div className="result-container hide">
        <h2 className="score result">Поздравляю!</h2>
        <p>Вы прошли викторину и набрали {this.props.score} из {this.props.maxScore} возможных баллов</p>
        <img src={result} alt="result"></img>
        <div className="restart" onClick={this.props.restartGame}><p>Попробовать ещё раз!</p></div>
      </div>
    return (
      <div>{content}</div>
    );
  }
}


export default GameEnd;
