// Utils
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

// Components
import TopBar from "./components/navBar/TopBar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ResultsPage from "./components/resultsPage/ResultsPage";

// Styling
import "./App.css";
import QuizPage from "./components/quizPage/QuizPage";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<QuizPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
