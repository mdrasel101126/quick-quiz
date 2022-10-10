import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
import "./Quiz.css";

const Quiz = () => {
  const quizs = useLoaderData().data;
  const { name, total, questions } = quizs;

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
        ></SingleQuiz>
      ))}
    </div>
  );
};

export default Quiz;
