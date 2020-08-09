// import React, { Component } from './node_modules/react'
import React from 'react';
import './style.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="score">
          <div className="logo">
            <h1>Musical Instruments</h1>
          </div>
          <p className="score">Score: {this.props.score}</p>
        </div>
        <QuestionsList />
      </header>
    );
  }
}

class QuestionsList extends React.Component {
  render() {
    const questionArr = ['Разминка', 'Медные духовые', 'Ударные', 'Струнные щипковые', 'Струнные смычковые', 'Идиофоны'];
    const questionItems = questionArr.map((question, index) =>
      <li className={index ? "question-item" : "question-item active"} key={index}>{question}</li>
    );
    return (
      <ul className="question-items">{questionItems}</ul>
    )
  }
}

export default Header
