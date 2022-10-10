import React from "react";
import "./SingleQuiz.css";

const SingleQuiz = ({ questionBlock }) => {
  console.log(questionBlock);
  const { question, options } = questionBlock;
  return (
    <div className="quiz-container">
      <p>{question}</p>
    </div>
  );
};

export default SingleQuiz;
