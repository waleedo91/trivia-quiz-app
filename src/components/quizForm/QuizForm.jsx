import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

// TODO Figure out how to cross reference the right answer and wrong answers to the api.

function QuizForm({ questions }) {
  const [selectedAnswers, setSelectedAnswers] = useState([
    {
      selectedAnswer: "",
      correctAnswer: "",
    },
  ]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedAnswers([
      ...selectedAnswers,
      {
        selectedAnswer: e.target.value,
        correctAnswer: questions.map((answer) => answer.correct_answer),
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/results", { state: selectedAnswers });
    console.log(selectedAnswers);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {questions.map((question, i) => (
          <Form.Group key={i}>
            <p>{question.question}</p>
            {question.answers.map((answer, index) => (
              <Form.Check
                key={index}
                type="radio"
                name={`answer ${i}`}
                id={`answer ${i}`}
                label={answer}
                onChange={handleChange}
                value={answer}
              />
            ))}
          </Form.Group>
        ))}
        <Button type="submit">Submit!</Button>
      </Form>
    </>
  );
}

export default QuizForm;
