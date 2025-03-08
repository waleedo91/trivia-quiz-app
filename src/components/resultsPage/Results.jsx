import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./Results.css";

function ResultsPage({ score, questions, userAnswers }) {
  return (
    <div className="text-center p-5">
      <h2 className="text-2xl font-bold">All Done!</h2>
      <p className="text-lg font-semibold">
        Your Score:{" "}
        <strong className={score < 7 ? "low-score" : "high-score"}>
          {score}
        </strong>{" "}
        / {questions.length}
      </p>
      <h3 className="text-xl mt-4 font-bold">Let's see how ya did!</h3>
      <div className="text-left mt-4">
        {userAnswers.map((answer, index) => (
          <div key={index} className="results-card">
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
            {!answer.isCorrect ? (
              <p className="text-green-600">
                Correct Answer: {answer.question.correctAnswer}
              </p>
            ) : (
              <span style={{ color: "green" }}>&#x2714; Nice!</span>
            )}
          </div>
        ))}
      </div>
      <div className="reset-button">
        <Link to={"/"}>
          <Button>Reset?</Button>
        </Link>
      </div>
    </div>
  );
}

export default ResultsPage;
