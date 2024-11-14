import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./card.css";

function Card10() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isTestFinished, setIsTestFinished] = useState(false);

  const userName = localStorage.getItem("currentUserName");

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem("questions10")) || [];
    setQuestions(storedQuestions);
  }, []);

  const handleAnswerChange = (event) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: event.target.value,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    setIsTestFinished(true);

    if (userName) {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = storedUsers.map((user) => {
        if (user.name === userName) {
          return { ...user, score: calculatedScore };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  if (questions.length === 0) {
    return <div>Savollar yuklanmoqda...</div>;
  }

  return (
    <div className="card">
      <div className="testcard">
        <h1>Savol</h1>
        {!isTestFinished ? (
          <div className="answer-list">
            <h2>{questions[currentQuestionIndex].question}</h2>
            <h1>Javoblar</h1>
            <FormControl className="formcontrol" component="fieldset">
              <RadioGroup
                value={answers[currentQuestionIndex] || ""}
                onChange={handleAnswerChange}
              >
                
                <FormControlLabel
                  value="a"
                  control={<Radio />}
                  label={`A:${questions[currentQuestionIndex].options.a}`}
                />
                <FormControlLabel
                  value="b"
                  control={<Radio />}
                  label={`B:${questions[currentQuestionIndex].options.b}`}
                />
                <FormControlLabel
                  value="c"
                  control={<Radio />}
                  label={`C:${questions[currentQuestionIndex].options.c}`}
                />
                <FormControlLabel
                  value="d"
                  control={<Radio />}
                  label={`D:${questions[currentQuestionIndex].options.d}`}
                />
              </RadioGroup>
            </FormControl>
            <div className="conductor-button">
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextQuestion}
                className="button"
              >
                {currentQuestionIndex + 1 === questions.length
                  ? "Testni yakunlash"
                  : "Keyingi savol"}
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <h2>
              Natija: {score} / {questions.length}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card10;
