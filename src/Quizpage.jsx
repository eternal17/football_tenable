import './Quizpage.css';
import { useState } from 'react';

const top10 = {
  question: 'Name the top 10 premier league top Scorers',
  answers: [
    'Alan Shearer - 260 goals',
    'Andrew Cole - 187 goals',
    'Thierry Henry - 175 goals',
    'Frank Lampard - 177 goals',
    'Robbie Fowler - 163 goals',
    'Jermain Defoe - 162 goals',
    'Michael Owen - 150 goals',
    'Les Ferdinand - 149 goals',
    'Teddy Sheringham - 146 goals',
    'Robin van Persie - 144 goals',
  ],
};

// when this page is initially rendered, send a get request to the backend to get a random top10 question and answers
const QuizPage = ({ quizArr }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    top10.answers.forEach((answer, index) => {
      if (answer.toLowerCase().split(' ').includes(input.toLowerCase())) {
        const answerDiv = document.getElementsByClassName('answer-row')[index];
        answerDiv.innerHTML = answer;
        answerDiv.classList.add('correct-answer');
      } else {
        // remove a life from the player
      }
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
            <span>{top10.question}</span>
          </div>
        </div>
        <div className="triangle-answers">
          <div className="triangle"></div>
          <div className="answers">
            <div className="answer-row">1</div>
            <div className="answer-row">2</div>
            <div className="answer-row">3</div>
            <div className="answer-row">4</div>
            <div className="answer-row">5</div>
            <div className="answer-row">6</div>
            <div className="answer-row">7</div>
            <div className="answer-row">8</div>
            <div className="answer-row">9</div>
            <div className="answer-row">10</div>
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
