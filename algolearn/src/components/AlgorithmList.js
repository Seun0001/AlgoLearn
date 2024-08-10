import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function AlgorithmList() {
  const algorithms = [
    "Bubble Sort",
    "Merge Sort",
    "Binary Search",
    "Stack",
    "Queue",
  ];

  return (
    <ul className="home-page-algorithm-list">
      {algorithms.map((algo, index) => (
        <li key={index} className="home-page-algorithm-item">
          <Link
            to={`/quiz/${algo.replace(/\s+/g, "-").toLowerCase()}`}
            className="home-page-algorithm-link"
          >
            {algo}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default AlgorithmList;
