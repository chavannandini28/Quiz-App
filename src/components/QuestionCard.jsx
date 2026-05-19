const QuestionCard = ({
  question,
  options,
  handleAnswer,
}) => {
  return (
    <div className="card">
      <h2>{question}</h2>

      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
