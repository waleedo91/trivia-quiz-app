import { useState } from "react";

import { Form } from "react-bootstrap";

// TODO Figure out how to cross reference the right answer and wrong answers to the api. 

function QuizForm({ questions }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleChange = (e) => {
    setSelectedAnswers((prevAnswers) => [...prevAnswers, e.target.value]);
  };


  return (
    <>
      <Form>
        {questions.map((question, qIndex) => (
          <Form.Group key={qIndex}>
            <p>{question.question}</p>
            {question.incorrect_answers.map((wrong, index) => (
              <Form.Check
                type="radio"
                label={wrong}
                name={`answers ${qIndex}`}
                value={wrong}
                key={index}
                onChange={handleChange}
              />
            ))}
            <Form.Check
              type="radio"
              label={question.correct_answer}
              name={`answers ${qIndex}`}
              value={question.correct_answer}
              onChange={handleChange}
            />
          </Form.Group>
        ))}
      </Form>
    </>
  );
}

export default QuizForm;
