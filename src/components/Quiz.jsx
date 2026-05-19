import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizData } from "../data/questions";
import QuestionCard from "./QuestionCard";

const Quiz = () => {
  const navigate = useNavigate();

  // Get selected category
  const category =
    localStorage.getItem("category");

  // Get questions from selected category
  const questions = [...quizData[category]].sort(
    () => Math.random() - 0.5
  );

  // States
  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] = useState(0);

  const [selectedAnswers, setSelectedAnswers] =
    useState([]);

  // Handle Answer
  const handleAnswer = (option) => {
    const current =
      questions[currentQuestion];

    // Store selected + correct answer
    const updatedAnswers = [
      ...selectedAnswers,
      {
        question: current.question,
        selected: option,
        correct: current.answer,
      },
    ];

    setSelectedAnswers(updatedAnswers);

    // Update score
    let updatedScore = score;

    if (option === current.answer) {
      updatedScore++;
      setScore(updatedScore);
    }

    // Next Question
    const nextQuestion =
      currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Save data in localStorage
      localStorage.setItem(
        "score",
        updatedScore
      );

      localStorage.setItem(
        "answers",
        JSON.stringify(updatedAnswers)
      );

      navigate("/result");
    }
  };

  // Progress bar
  const progress =
    ((currentQuestion + 1) /
      questions.length) *
    100;

  return (
    <div className="container">
      <h1>
        {category.toUpperCase()} Quiz 🚀
      </h1>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

      {/* Question Card */}
      <QuestionCard
        question={
          questions[currentQuestion]
            .question
        }
        options={
          questions[currentQuestion]
            .options
        }
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;