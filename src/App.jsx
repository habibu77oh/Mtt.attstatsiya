import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import "./App.css";

import Card1 from "./Components/Cards/Card1";
import Card2 from "./Components/Cards/Card2";
import Card3 from "./Components/Cards/Card3";
import Card4 from "./Components/Cards/Card4";
import Card5 from "./Components/Cards/Card5";
import Card6 from "./Components/Cards/Card6";
import Card7 from "./Components/Cards/Card7";
import Card8 from "./Components/Cards/Card8";
import Card9 from "./Components/Cards/Card9";
import Card10 from "./Components/Cards/Card10";
import Card11 from "./Components/Cards/Card11";
import Card12 from "./Components/Cards/Card12";
import Card13 from "./Components/Cards/Card13";
import Card14 from "./Components/Cards/Card14";
import Card15 from "./Components/Cards/Card15";

import Addquestion1 from "./Pages/Admin/Addquestion1";
import Addquestion2 from "./Pages/Admin/Addquestion2";
import Addquestion3 from "./Pages/Admin/Addquestion3";
import Addquestion4 from "./Pages/Admin/Addquestion4";
import Addquestion5 from "./Pages/Admin/Addquestion5";
import Addquestion6 from "./Pages/Admin/Addquestion6";
import Addquestion7 from "./Pages/Admin/Addquestion7";
import Addquestion8 from "./Pages/Admin/Addquestion8";
import Addquestion9 from "./Pages/Admin/Addquestion9";
import Addquestion10 from "./Pages/Admin/Addquestion10";
import Addquestion11 from "./Pages/Admin/Addquestion11";
import Addquestion12 from "./Pages/Admin/Addquestion12";
import Addquestion13 from "./Pages/Admin/Addquestion13";
import Addquestion14 from "./Pages/Admin/Addquestion14";
import Addquestion15 from "./Pages/Admin/Addquestion15";

// Barcha importlaringiz ...

function App() {

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    
    return (
      <div onContextMenu={handleContextMenu} className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/card1" element={<Card1 />} />
          <Route path="/card2" element={<Card2 />} />
          <Route path="/card3" element={<Card3 />} />
          <Route path="/card4" element={<Card4 />} />
          <Route path="/card5" element={<Card5 />} />
          <Route path="/card6" element={<Card6 />} />
          <Route path="/card7" element={<Card7 />} />
          <Route path="/card8" element={<Card8 />} />
          <Route path="/card9" element={<Card9 />} />
          <Route path="/card10" element={<Card10 />} />
          <Route path="/card11" element={<Card11 />} />
          <Route path="/card12" element={<Card12 />} />
          <Route path="/card13" element={<Card13 />} />
          <Route path="/card14" element={<Card14 />} />
          <Route path="/card15" element={<Card15 />} />
          <Route path="/addquestion1" element={<Addquestion1 />} />
          <Route path="/addquestion2" element={<Addquestion2 />} />
          <Route path="/addquestion3" element={<Addquestion3 />} />
          <Route path="/addquestion4" element={<Addquestion4 />} />
          <Route path="/addquestion5" element={<Addquestion5 />} />
          <Route path="/addquestion6" element={<Addquestion6 />} />
          <Route path="/addquestion7" element={<Addquestion7 />} />
          <Route path="/addquestion8" element={<Addquestion8 />} />
          <Route path="/addquestion9" element={<Addquestion9 />} />
          <Route path="/addquestion10" element={<Addquestion10 />} />
          <Route path="/addquestion11" element={<Addquestion11 />} />
          <Route path="/addquestion12" element={<Addquestion12 />} />
          <Route path="/addquestion13" element={<Addquestion13 />} />
          <Route path="/addquestion14" element={<Addquestion14 />} />
          <Route path="/addquestion15" element={<Addquestion15 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
