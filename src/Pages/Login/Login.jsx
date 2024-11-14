import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./login.css";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (name.trim() === "" || password.trim() === "") {
      alert("Bo'sh joylarni to'ldiring");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, password, correctAnswers: 0 });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Ro'yxatdan o'tish muvaffaqiyatli!");

    setName("");
    setPassword("");
  };

  const handleLogin = () => {
    if (name.trim() === "" || password.trim() === "") {
      alert("Bo'sh joylarni to'ldiring");
      return;
    }

    // Admin uchun maxsus tekshiruv
    if (name === "Admin" && password === "123456@") {
      alert("Admin sifatida kirish muvaffaqiyatli!");
      navigate("/admin");
      return;
    }

    // Foydalanuvchi ro'yxatiga asoslangan tekshiruv
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.name === name && u.password === password);

    if (user) {
      alert("Kirish muvaffaqiyatli!");
      setName("");
      setPassword("");
      navigate("/home");
    } else {
      alert("Ism yoki parol noto'g'ri.");
    }
  };

  return (
    <div className="Login">
      <div className="login-container">
        <h2>Ro'yxatdan o'tish / Kirish</h2>
        <div className="login-form">
          <TextField
            label="Ismingiz"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="login-input"
          />
          <TextField
            label="Parol"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <button onClick={handleSignup} className="login-button signup">
            Ro'yxatdan o'tish
          </button>
          <button onClick={handleLogin} className="login-button login">
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;