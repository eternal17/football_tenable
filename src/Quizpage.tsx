import './Quizpage.css';
interface QuizProps {
  quizArr: Array<{ question: string; answers: Array<string> }>;
}

const QuizPage: React.FC<QuizProps> = ({ quizArr }) => {
  return <div className="quiz-container"></div>;
};

export default QuizPage;
