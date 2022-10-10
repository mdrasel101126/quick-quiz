import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "../QuizTopic/QuizTopic";
import "./Home.css";

const Home = () => {
  const topics = useLoaderData().data;
  return (
    <div>
      <div className="nav-bar">
        <h1>Welcome to Quick Quiz</h1>
        <p>
          Test your basic knowledege in the field of web development
          technologies
        </p>
      </div>
      <div className="topics-container">
        {topics.map((topic) => (
          <QuizTopic key={topic.id} topic={topic}></QuizTopic>
        ))}
      </div>
    </div>
  );
};

export default Home;
