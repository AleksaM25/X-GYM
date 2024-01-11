import "./App.css";
import React, { useState } from "react";
import Main from "./components/hero/Main";
import Hero from "./components/hero/Hero";
import Header from "./components/hero/Header";
import Service from "./components/hero/Service";
import Footer from "./components/hero/Footer";

function App() {
  const [admin, setAdmin] = useState(false);

  const handleLog = (log) => {
    setAdmin(log);
  };

  return (
    <div>
      <Header onLog={handleLog} />
      <div className="appWrapper">
        <Hero />
        <Service />
        <Main admin={admin} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
