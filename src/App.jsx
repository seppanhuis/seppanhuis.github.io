// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Teams from "./pages/Teams";
import { useState, useEffect } from "react";

export default function App() {
  const [teams, setTeams] = useState([]);

  // Laden uit localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("teams")) || [];
    setTeams(stored);
  }, []);

  // Opslaan naar localStorage
  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List teams={teams} setTeams={setTeams} />} />
        <Route path="/detail/:name" element={<Detail />} />
        <Route path="/teams" element={<Teams teams={teams} setTeams={setTeams} />} />
      </Routes>
    </BrowserRouter>
  );
}
