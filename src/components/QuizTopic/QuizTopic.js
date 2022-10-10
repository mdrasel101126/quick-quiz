import React from "react";
import { Link } from "react-router-dom";
import "./QuizTopic.css";

const QuizTopic = ({ topic }) => {
  const { id, name, logo } = topic;
  return (
    <div className="topic-container">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="topic-info">
        <p>{name}</p>
        <Link to={`/quiz/${id}`}>
          <button>Start Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default QuizTopic;
