import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SingleQuiz.css";

const SingleQuiz = ({
  questionBlock,
  index,
  handleCorrectAnswer,
  handleWrongAnswer,
}) => {
  console.log(questionBlock);
  console.log(index);
  const { id, question, options, correctAnswer } = questionBlock;

  const handleMatch = (id, option, correctAnswer) => {
    if (option === correctAnswer) {
      handleCorrectAnswer(id);
      notify("Wow! Correct Answer");
    } else {
      handleWrongAnswer(id);
      notify("Sory! Wrong Answer");
    }
  };
  const notify = (text) => toast(text);
  return (
    <div className="quiz-container">
      <p className="question">
        Quiz {index + 1}:{question}
      </p>
      <FontAwesomeIcon
        onClick={() => notify(correctAnswer)}
        title="Show Correct Answer"
        className="eye-icon"
        icon={faEye}
      ></FontAwesomeIcon>
      <div className="quiz-options">
        <div className="option">
          <input type="radio" name="option" id={options[0]} />
          <label htmlFor={options[0]}>
            <p onClick={() => handleMatch(id, options[0], correctAnswer)}>
              {options[0]}
            </p>
          </label>
        </div>
        <div className="option">
          <input type="radio" name="option" id={options[1]} />
          <label htmlFor={options[1]}>
            <p onClick={() => handleMatch(id, options[1], correctAnswer)}>
              {options[1]}
            </p>
          </label>
        </div>
        <div className="option">
          <input type="radio" name="option" id={options[2]} />
          <label htmlFor={options[2]}>
            <p onClick={() => handleMatch(id, options[2], correctAnswer)}>
              {options[2]}
            </p>
          </label>
        </div>
        {options[3] && (
          <div className="option">
            <input type="radio" name="option" id={options[3]} />
            <label htmlFor={options[3]}>
              <p onClick={() => handleMatch(id, options[3], correctAnswer)}>
                {options[3]}
              </p>
            </label>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleQuiz;
