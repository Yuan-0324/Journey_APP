import React, { useState, useEffect, useRef } from "react";

import Log_In from "./Nav/Log_In";
import Logged_In from "./Nav/Logged_In";
import Scrolled from "./Nav/Scrolled";

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
