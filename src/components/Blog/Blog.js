import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>There are some common Q&A</h2>
      <div className="blog">
        <h3>What is The Purpose of React Router?</h3>
        <p>
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="blog">
        <h3>How Does Context API Work?</h3>
        <p>
          React.createContext() is all you need. It returns a consumer and a
          provider. Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store. Consumer as it so
          happens is a component that consumes and uses the state. More
          information can be found on React's documentation page
        </p>
      </div>
      <div className="div">
        <h3>Explain useRef() hook in React</h3>
        <p>
          The useRef Hook allows you to persist values between renders.It can be
          used to store a mutable value that does not cause a re-render when
          updated.It can be used to access a DOM element directly.If we tried to
          count how many times our application renders using the useState Hook,
          we would be caught in an infinite loop since this Hook itself causes a
          re-render.o avoid this, we can use the useRef Hook.
        </p>
      </div>
    </div>
  );
};

export default Blog;
