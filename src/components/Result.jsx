import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();

  // Get Score
  const score =
    localStorage.getItem("score") || 0;

  // Get Answers
  const answers = JSON.parse(
    localStorage.getItem("answers")
  ) || [];

  // Show / Hide Answers
  const [showAnswers, setShowAnswers] =
    useState(false);

  return (
    <div className="container">
      <h1>🎉 Quiz Completed</h1>

      {/* Score */}
      <div className="score">
        Your Score: {score} / 10
      </div>

      {/* Buttons */}
      <div className="result-buttons">
        <button onClick={() => navigate("/")}>
          🏠 Home
        </button>

        <button
          onClick={() =>
            setShowAnswers(!showAnswers)
          }
        >
          {showAnswers
            ? "❌ Hide Answers"
            : "📖 Show Answers"}
        </button>
      </div>

      {/* Answer Review */}
      {showAnswers && (
        <div className="answers-container">
          {answers.map((item, index) => {
            const isCorrect =
              item.selected === item.correct;

            return (
              <div
                key={index}
                className="answer-card"
              >
                {/* Question */}
                <h3>
                  Q{index + 1}. {item.question}
                </h3>

                {/* Selected Answer */}
                <p>
                  Your Answer:
                  <span
                    style={{
                      color: isCorrect
                        ? "green"
                        : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {item.selected}
                  </span>
                </p>

                {/* Correct Answer */}
                <p>
                  Correct Answer:
                  <span
                    style={{
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {item.correct}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Result;