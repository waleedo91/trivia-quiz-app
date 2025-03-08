import { useState } from "react";

import { Form, Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./QuizForm.css";
import Results from "../resultsPage/Results";

// TODO Figure out how to cross reference the right answer and wrong answers to the api.

function QuizForm({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  console.log(questions.length);
  console.log(currentQuestion + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect =
      selectedAnswer === questions[currentQuestion].correctAnswer;
    console.log(userAnswers);
    setUserAnswers([
      ...userAnswers,
      {
        question: questions[currentQuestion],
        userAnswer: selectedAnswer,
        isCorrect,
      },
    ]);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      console.log(quizCompleted);
    } else {
      setQuizCompleted(true);
      console.log(quizCompleted);
    }

    if (questions.length === 0) {
      return <p>Loading!!!</p>;
    }

    if (quizCompleted) {
      return (
        <div>
          <h2>Quiz Completed</h2>
          <p>
            Your Score: {score}/ {questions.length}
          </p>
        </div>
      );
    }
  };

  return (
    <>
      {!quizCompleted ? (
        <Card className="question-container">
          <Card.Text>
            {currentQuestion + 1}. {questions[currentQuestion].question}
          </Card.Text>
          <Form className="answers-container">
            {questions[currentQuestion].answers.map((answer, index) => (
              <Form.Check
                key={index}
                className="radio-answers"
                type="radio"
                name="answer"
                label={answer}
                value={answer}
                checked={selectedAnswer === answer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
              />
            ))}
          </Form>
          <div className="button-container">
            <div className="next-button">
              <Button
                className="next-button"
                onClick={handleSubmit}
                disabled={!selectedAnswer}
              >
                {currentQuestion + 1 < questions.length
                  ? "NextQuestion"
                  : "Finish Quiz"}
              </Button>
            </div>
            <div className="reset-button">
              <Link to={"/"}>
                <Button>Reset?</Button>
              </Link>
            </div>
          </div>
        </Card>
      ) : (
        <Results
          score={score}
          questions={questions}
          userAnswers={userAnswers}
        />
      )}
    </>

    // <>
    //   <Form onSubmit={handleSubmit}>
    //     {questions.map((question, i) => (
    //       <Form.Group key={i}>
    //         <p>
    //           {currentQuestion + 1}. {question.question}
    //         </p>
    //         {question.answers.map((answer, index) => (
    //           <Form.Check
    //             key={index}
    //             type="radio"
    //             name={`answer ${i}`}
    //             id={`answer ${i}`}
    //             label={answer}
    //             value={answer}
    //           />
    //         ))}
    //       </Form.Group>
    //     ))}
    //     <Button type="submit">Submit!</Button>
    //   </Form>
    // </>
  );
}

export default QuizForm;
