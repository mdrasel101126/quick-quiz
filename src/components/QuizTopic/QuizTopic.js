import React from "react";
import "./QuizTopic.css";

const QuizTopic = ({ topic }) => {
  console.log(topic);
  const { id, name, logo } = topic;
  return (
    <div className="topic-container">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="topic-info">
        <p>{name}</p>
        <button>Start Quiz</button>
      </div>
    </div>
  );
};

export default QuizTopic;
