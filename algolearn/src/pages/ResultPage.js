import React from "react";
import { useLocation } from "react-router-dom";

function ResultPage() {
  const { state } = useLocation();
  const { score, answeredQuestions, totalQuestions } = state || {
    score: 0,
    answeredQuestions: [],
    totalQuestions: 5,
  };

  // Filter out questions that were answered incorrectly
  const incorrectQuestions = answeredQuestions.filter(
    (question) => question.selectedOption !== question.correctAnswer
  );

  return (
    <div className="container result-container">
      <h2>Result Page</h2>
      <p>{`Your score is ${score} out of ${totalQuestions}.`}</p>
      {score >= totalQuestions / 2 ? (
        <p className="pass">Congratulations! You passed!</p>
      ) : (
        <p className="fail">Sorry, you failed.</p>
      )}
      <h3>Details:</h3>
      <ul>
        {incorrectQuestions.length > 0 ? (
          incorrectQuestions.map((question, index) => (
            <li key={index}>
              <p>{question.question}</p>
              <p>Your Answer: {question.options[question.selectedOption]}</p>
              <p>Correct Answer: {question.options[question.correctAnswer]}</p>
              <p>Explanation: {question.explanation}</p>
            </li>
          ))
        ) : (
          <p>All questions were answered correctly!</p>
        )}
      </ul>
    </div>
  );
}

export default ResultPage;
