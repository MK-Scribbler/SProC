import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const questions = [
  { id: 1, text: 'Write a pseudo code to print "Hello World"' },
  { id: 2, text: 'Write a pseudo code to find the sum of two numbers' },
  { id: 3, text: 'Write a pseudo code to check if a number is prime' },
];

const Pseudo = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [pseudoCode, setPseudoCode] = useState('');
  const [answers, setAnswers] = useState({});

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handlePseudoCodeChange = (e) => {
    setPseudoCode(e.target.value);
  };

  const handleSaveAnswer = () => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [currentQuestion]: pseudoCode }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-black">
      <div className="container bg-white p-4 rounded shadow-sm">
        <h2 className="text-center mb-4">Pseudo Code Competition</h2>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between mb-4">
            <button
              className="btn btn-primary"
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <span className="font-weight-bold">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <button
              className="btn btn-primary"
              onClick={handleNextQuestion}
              disabled={currentQuestion >= questions.length - 1}
            >
              Next
            </button>
          </div>
          <div className="mb-4">
            <h3 className="font-weight-bold mb-2">{questions[currentQuestion].text}</h3>
            <textarea
              className="form-control"
              rows="10"
              value={pseudoCode}
              onChange={handlePseudoCodeChange}
            />
          </div>
          <button
            className="btn btn-success"
            onClick={handleSaveAnswer}
          >
            Save Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pseudo;
