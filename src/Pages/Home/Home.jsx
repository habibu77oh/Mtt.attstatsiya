import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Purchase from "./Purchase";
import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer'
import "./home.css";

function Home() {
  const [open, setOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showHomeCard, setShowHomeCard] = useState(true); // yangi holat qo‘shildi

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePurchaseComplete = () => {
    setShowButtons(true);
    setShowHomeCard(false); // Sotib olingandan so'ng home-card yashiringan bo‘ladi
    setOpen(false);
  };

  const handleNavigate = (day) => {
    window.location.href = `/${day}`;
  };

  // Testni ishlab bo'lgandan so'ng home-cardni qayta ko'rsatish uchun funksiya
  const handleTestComplete = () => {
    setShowHomeCard(true);
    setShowButtons(false);
  };

  return (
    <div className="home-media">
            <Header />
      <div className="home">
        <div className="hide_divs">
          <div className="pay">
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
              <DialogTitle>testCard sotib olish</DialogTitle>
              <DialogContent>
                <Purchase onPurchaseComplete={handlePurchaseComplete} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="success">
                  Bekor qilish
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          <div className="home-container">
            {showHomeCard && (
              <div className="home-card">
                <img className="testcard-img" src="./card-img.jpg" alt="" />
                <div className="home-info">
                  <p className="card-title">DMTT attestatsiya tayyorlov test</p>
                  <p className="card-title">harbir kun uchun 10 000 sum</p>
                  <button className="buy" onClick={handleOpen}>
                    Testlarni Sotib olish
                  </button>
                </div>
              </div>
            )}

            <div className="days-buttons">
              {showButtons &&
                Array.from({ length: 15 }, (_, i) => (
                  <Button
                    className="day-button"
                    key={i}
                    variant="contained"
                    color="primary"
                    onClick={() => handleNavigate(`card${i + 1}`)}
                  >
                    Kun{i + 1}
                  </Button>
                ))}
              {showButtons && (
                <Button
                  onClick={handleTestComplete}
                  color="success"
                  variant="contained"
                  className="show-card"
                >
                  yakunlash
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
