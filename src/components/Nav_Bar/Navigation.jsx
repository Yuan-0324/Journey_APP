import React, { useState, useEffect, useRef } from "react";

import Log_In from "./components/Log_In";
import Logged_In from "./components/Logged_In";
import Scrolled from "./components/Scrolled";
import './stylesheet/index.css';
import './stylesheet/Login.css';

const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [logIn, setlogIn] = useState(true);
  const [loggedIn, setloggedIn] = useState(false);
  const [scrolled, setscrolled] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position);
    if (position >= 100) {
      setlogIn(false);
      setscrolled(true);
    } else if (position < 100) {
      setlogIn(true);
      setscrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      {logIn && <Log_In />}
      {loggedIn && <Logged_In />}
      {scrolled && <Scrolled setlogIn={setlogIn} setscrolled={setscrolled} />}
    </header>
  );
};

export default Navigation;
