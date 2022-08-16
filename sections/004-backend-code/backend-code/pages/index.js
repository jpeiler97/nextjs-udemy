import { useRef } from "react";
import axios from "axios";

function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;
    const body = { email: email, feedback: feedback };
    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" ref={emailRef}></input>
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackRef}></textarea>
        </div>
        <button>Send feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
