import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
import "./Quiz.css";

const Quiz = () => {
  const quizs = useLoaderData().data;
  const { name, total, questions } = quizs;
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const handleCorrectAnswer = () => {
    setCorrect(correct + 1);
  };
  const handleWrongAnswer = () => {
    setWrong(wrong + 1);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "rgb(7, 7, 118)" }}>
        Quiz of {name}
      </h1>
      {questions.map((questionBlock, index) => (
        <SingleQuiz
          key={questionBlock.id}
          questionBlock={questionBlock}
          index={index}
          handleCorrectAnswer={handleCorrectAnswer}
          handleWrongAnswer={handleWrongAnswer}
        ></SingleQuiz>
      ))}
      <div>
        <h2>Your Result</h2>
        <p>Correct : {correct}</p>
        <p>Incorrect : {wrong}</p>
      </div>
    </div>
  );
};

export default Quiz;
