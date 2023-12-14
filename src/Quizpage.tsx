import './Quizpage.css';
interface QuizProps {
  quizArr: Array<{ question: string; answers: Array<string> }>;
}

const QuizPage: React.FC<QuizProps> = ({ quizArr }) => {
  return (
    <div className="quiz-container">
      <div className="triangle-answers">
        <div className="triangle"></div>
        <div className="answers">
          <div className="answer-row">hidden answer</div>
          <div className="answer-row">2</div>
          <div className="answer-row">3</div>
          <div className="answer-row">4</div>
          <div className="answer-row">5</div>
          <div className="answer-row">6</div>
          <div className="answer-row">7</div>
          <div className="answer-row">8</div>
          <div className="answer-row">9</div>
          <div className="answer-row correct-answer">correct answer</div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
