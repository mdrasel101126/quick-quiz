import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
import "./Quiz.css";

const Quiz = () => {
  const quizs = useLoaderData().data;
  const { name, total, questions } = quizs;

  return (
    <div>
      <h1>Quiz of {name}</h1>
      {questions.map((questionBlock) => (
        <SingleQuiz
          key={questionBlock.id}
          questionBlock={questionBlock}
        ></SingleQuiz>
      ))}
    </div>
  );
};

export default Quiz;
