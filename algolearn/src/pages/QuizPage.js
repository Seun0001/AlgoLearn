import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import "../styles.css";

function QuizPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const questionList = useMemo(
    () => (Array.isArray(questions[name]) ? questions[name] : []),
    [name]
  );
  const totalQuestions = questionList.length;

  const handleNextQuestion = useCallback(() => {
    if (questionList.length === 0 || currentQuestion >= totalQuestions) return;

    const currentQuestionData = questionList[currentQuestion];
    if (
      currentQuestionData &&
      selectedOption === currentQuestionData.correctAnswer
    ) {
      setScore((prevScore) => prevScore + 1);
    }

    setAnsweredQuestions((prev) => [
      ...prev,
      { ...currentQuestionData, selectedOption },
    ]);

    setSelectedOption(null);
    setTimeLeft(60);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate("/result", {
        state: { score, answeredQuestions, totalQuestions },
      });
    }
  }, [
    currentQuestion,
    questionList,
    selectedOption,
    score,
    answeredQuestions,
    navigate,
    totalQuestions,
  ]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, handleNextQuestion]);

  if (questionList.length === 0) {
    return (
      <div className="no-questions">No questions available for this topic.</div>
    );
  }

  const currentQuestionData = questionList[currentQuestion];

  if (!currentQuestionData) {
    return <div className="no-questions">Loading question...</div>;
  }

  // Set color to green when timeLeft is 60, otherwise red
  const timeLeftColor = timeLeft === 60 ? "green" : "red";

  return (
    <div className="container quiz-container">
      <h2>{name.replace("-", " ").toUpperCase()} Quiz</h2>
      <p style={{ color: timeLeftColor }}>{`Time Left: ${timeLeft}s`}</p>
      <p>{currentQuestionData.question}</p>
      <ul>
        {currentQuestionData.options.map((option, index) => (
          <li
            key={index}
            onClick={() => setSelectedOption(index)}
            className={selectedOption === index ? "selected" : ""}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  );
}

export default QuizPage;
