import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { Form, Button, Card } from "react-bootstrap";

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
        <Card>
          <Card.Text>
            {currentQuestion + 1}. {questions[currentQuestion].question}
          </Card.Text>
          <form>
            {questions[currentQuestion].answers.map((answer, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                {answer}
              </label>
            ))}
          </form>
          <Button onClick={handleSubmit} disabled={!selectedAnswer}>
            {currentQuestion + 1 < questions.length
              ? "NextQuestion"
              : "Finish Quiz"}
          </Button>
        </Card>
      ) : (
        <div className="text-center p-5">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="text-lg font-semibold">
            Your Score: {score} / {questions.length}
          </p>
          <h3 className="text-xl mt-4 font-bold">Review Your Answers:</h3>
          <div className="text-left mt-4">
            {userAnswers.map((answer, index) => (
              <div key={index} className="p-3 border rounded-lg mb-2">
                <p className="font-semibold">
                  {index + 1}. {answer.question.question}
                </p>
                <p
                  className={`p-1 rounded ${
                    answer.isCorrect ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Your Answer: {answer.userAnswer}
                </p>
                {!answer.isCorrect && (
                  <p className="text-green-600">
                    Correct Answer: {answer.question.correctAnswer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <Link to={"/"}>
        <Button>Reset?</Button>
      </Link>
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
