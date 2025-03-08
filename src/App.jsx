// Utils
import { Routes, Route } from "react-router-dom";

// Components
import TopBar from "./components/navBar/TopBar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import QuizPage from "./components/quizPage/QuizPage";

// Styling
import "./App.css";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<QuizPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
