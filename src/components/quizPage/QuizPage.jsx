import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import QuizForm from "../quizForm/QuizForm";

function QuizPage() {
  const location = useLocation();
  const userData = location.state;
  const [questions, setQuestions] = useState([
    {
      id: "",
      question: "",
      answers: [],
      correctAnswer: "",
    },
  ]);

  useEffect(() => {
    async function getQuestions() {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${userData.category}&difficulty=${userData.difficulty}&type=multiple`,
        { setTimeout: 5000 }
      );
      const extractedData = response.data.results.map((item) => ({
        question: item.question,
        answers: [...item.incorrect_answers, item.correct_answer].sort(
          () => Math.random() - 0.5
        ),
        correctAnswer: item.correct_answer,
      }));

      setQuestions(extractedData);
    }
    getQuestions();
  }, [userData.category, userData.difficulty]);

  return (
    <>
      <QuizForm questions={questions} />
    </>
  );
}

export default QuizPage;
