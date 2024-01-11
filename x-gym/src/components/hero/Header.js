import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logging from "../admin/Logging";

const Header = (props) => {
  const [log, setLog] = useState();

  // const handleLogIn = () => {
  //   setLog(true);
  //   props.onLog(log);
  // };

  const scrollToSection = (sectionId) => {
    window.scrollTo(0, document.getElementById(sectionId).offsetTop);
  };

  const handleLog = (info) => {
    console.log(info);
    setLog(info);
  };

  return (
    <header id="header">
      <div className="logoImg">
        <img
          src="../img/heroBG.jpg"
          alt="logoImg"
          to="/hero"
          smooth={+true}
          onClick={() => scrollToSection("hero")}
        />
        <div className="logo">
          <h1>X-GYM</h1>
        </div>
      </div>
      <div className="links">
        <Link
          className="link"
          to="/section-1"
          smooth={+true}
          onClick={() => scrollToSection("section-1")}
        >
          <p>Galerija</p>
        </Link>
        <Link
          className="link"
          to="/section-2"
          smooth={+true}
          onClick={() => scrollToSection("section-2")}
        >
          <p>Clanarina</p>
        </Link>
        <Link
          className="link"
          to="/section-3"
          smooth={+true}
          onClick={() => scrollToSection("section-3")}
        >
          <p>Kontakt</p>
        </Link>
        {/* <Link>
          <Logging onLog={handleLog} />
        </Link>
        {log && <p style={{ color: "white" }}>Logovan</p>} */}
      </div>
    </header>
  );
};

export default Header;
