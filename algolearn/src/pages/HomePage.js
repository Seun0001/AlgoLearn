import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function HomePage() {
  return (
    <div className="container home-container">
      <h1>AlgoLearn</h1>
      <p>Select an algorithm to explore:</p>
      <ul>
        <li>
          <Link to="/quiz/bubble-sort">Bubble Sort Quiz</Link>
        </li>
        <li>
          <Link to="/quiz/merge-sort">Merge Sort Quiz</Link>
        </li>
        <li>
          <Link to="/quiz/binary-search">Binary Search Quiz</Link>
        </li>
        <li>
          <Link to="/quiz/stack">Stack Quiz</Link>
        </li>
        <li>
          <Link to="/quiz/queue">Queue Quiz</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
