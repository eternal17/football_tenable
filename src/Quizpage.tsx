interface QuizProps {
  quizArr: Array<{ question: string; answers: Array<string> }>;
}

const QuizPage: React.FC<QuizProps> = ({ quizArr }) => {
  return <div>Quiz</div>;
};

export default QuizPage;
