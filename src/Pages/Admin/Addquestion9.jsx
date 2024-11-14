import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

function Addquestion9() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState({ a: "", b: "", c: "", d: "" });
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("questions9")) || [];
    setQuestions(storedQuestions);
  }, []);

  const handleAddQuestion = () => {
    if (
      !question ||
      !options.a ||
      !options.b ||
      !options.c ||
      !options.d ||
      !correctAnswer
    ) {
      alert("Iltimos, barcha test qo'shish maydonlarni to'ldiring!");
      return;
    }

    const newQuestion = { question, options, correctAnswer };
    const updatedQuestions = [...questions, newQuestion];
    localStorage.setItem("questions9", JSON.stringify(updatedQuestions));
    setQuestions(updatedQuestions);
    setQuestion("");
    setOptions({ a: "", b: "", c: "", d: "" });
    setCorrectAnswer("");
    alert("Savol muvaffaqiyatli qo'shildi!");
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    localStorage.setItem("questions9", JSON.stringify(updatedQuestions));
    setQuestions(updatedQuestions);
  };

  return (
    <div className="add-question">
      <h3>Test Savol Qo'shish</h3>
      <TextField
        label="Savol"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Javob A"
        value={options.a}
        onChange={(e) => setOptions({ ...options, a: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Javob B"
        value={options.b}
        onChange={(e) => setOptions({ ...options, b: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Javob C"
        value={options.c}
        onChange={(e) => setOptions({ ...options, c: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Javob D"
        value={options.d}
        onChange={(e) => setOptions({ ...options, d: e.target.value })}
        fullWidth
        margin="normal"
      />
      <div>
        <h4>To'g'ri Javobni Tanlang:</h4>
        <RadioGroup
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        >
          <FormControlLabel
            value="a"
            control={<Radio />}
            label={`A: ${options.a}`}
          />
          <FormControlLabel
            value="b"
            control={<Radio />}
            label={`B: ${options.b}`}
          />
          <FormControlLabel
            value="c"
            control={<Radio />}
            label={`C: ${options.c}`}
          />
          <FormControlLabel
            value="d"
            control={<Radio />}
            label={`D: ${options.d}`}
          />
        </RadioGroup>
      </div>

      <Button variant="contained" color="primary" onClick={handleAddQuestion}>
        Savolni qo'shish
      </Button>

      <div className="questions-list">
        <h3>Qo'shilgan Test Savollari</h3>
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <div key={index}>
              <h4>{question.question}</h4>
              <p>
                <strong>To'g'ri Javob:</strong>{" "}
                {question.correctAnswer.toUpperCase()}
              </p>

              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteQuestion(index)}
              >
                O'chirish
              </Button>
            </div>
          ))
        ) : (
          <p>Savollar mavjud emas</p>
        )}
      </div>
    </div>
  );
}

export default Addquestion9;