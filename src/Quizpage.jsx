import './Quizpage.css';
import { useState } from 'react';

const QuizPage = ({ quizArr }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    console.log('send the text to be handled on the backend', input);

    // fetch post request to the backend for checking answer
    const answerObj = {
      answer: input,
    };
    fetch('/handleAnswer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answerObj),
    });

    setInput('');
  };

  const handleEnterPressed = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <>
      <div className="title">
        <span>FOOTBALL TENABLE</span>
      </div>
      <div className="quiz-container">
        <div className="box">
          <div className="question text">
            <span>Name the Top 10 Premier League Scorers</span>
          </div>
        </div>
        <div className="triangle-answers">
          <div className="triangle"></div>
          <div className="answers">
            <div className="answer-row">hidden answer</div>
            <div className="answer-row">2</div>
            <div className="answer-row">3</div>
            <div className="answer-row">4</div>
            <div className="answer-row">5</div>
            <div className="answer-row correct-answer">Rooney</div>
            <div className="answer-row">7</div>
            <div className="answer-row">8</div>
            <div className="answer-row">9</div>
            <div className="answer-row correct-answer">correct answer</div>
          </div>
        </div>
        <div className="box">
          <div className="answer-lives text">
            <div className="lives">❤❤❤</div>
            <input
              style={{ color: 'black' }}
              type="text"
              onKeyDown={handleEnterPressed}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Tenable?</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
