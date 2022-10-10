import React from "react";
import "./SingleQuiz.css";

const SingleQuiz = ({ questionBlock, index }) => {
  console.log(questionBlock);
  console.log(index);
  const { question, options } = questionBlock;
  return (
    <div className="quiz-container">
      <p className="question">
        Quiz {index + 1}:{question}
      </p>
      <div className="quiz-options">
        <div className="option">
          <input type="radio" name="option" id={options[0]} />
          <label htmlFor={options[0]}>
            <p>{options[0]}</p>
          </label>
        </div>
        <div className="option">
          <input type="radio" name="option" id={options[1]} />
          <label htmlFor={options[1]}>
            <p>{options[1]}</p>
          </label>
        </div>
        <div className="option">
          <input type="radio" name="option" id={options[2]} />
          <label htmlFor={options[2]}>
            <p>{options[2]}</p>
          </label>
        </div>
        {options[3] && (
          <div className="option">
            <input type="radio" name="option" id={options[3]} />
            <label htmlFor={options[3]}>
              <p>{options[3]}</p>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleQuiz;
