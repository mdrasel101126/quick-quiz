import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
import "./Quiz.css";

const Quiz = () => {
  const quizs = useLoaderData().data;
  const { name, total, questions } = quizs;
  const [correct, setCorrect] = useState([]);
  const [wrong, setWrong] = useState([]);
  const handleCorrectAnswer = (addedId) => {
    const remaining = wrong.filter((id) => id !== addedId);
    const exists = correct.find((id) => id === addedId);
    if (!exists) {
      const newCorrect = [...correct, addedId];
      setCorrect(newCorrect);
      setWrong(remaining);
    }
  };
  const handleWrongAnswer = (addedId) => {
    const remaining = correct.filter((id) => id !== addedId);
    const exists = wrong.find((id) => id === addedId);
    if (!exists) {
      const newWrong = [...wrong, addedId];
      setWrong(newWrong);
      setCorrect(remaining);
    }
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
      <div className="result-container">
        <h2>Your Result</h2>
        <p>Total Question: {total}</p>
        <p>Correct : {correct.length}</p>
        <p>Incorrect : {wrong.length}</p>
      </div>
    </div>
  );
};

export default Quiz;
