import React, { useState, useEffect } from "react";
import Axios from "axios";

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
    // console.log(position);
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

  const [LoginType, setLoginType] = useState("");

  useEffect(() => {
    let myToken = localStorage.getItem('token');

    async function checkToken() {
      let success = 'ok';
      await Axios.post('http://localhost:8000/member/login/token', myToken)
        .then((res) => {
          if (res.data == success) {
            setLoginType(<Logged_In />);
          } else {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            localStorage.removeItem('lastName');
            localStorage.removeItem('firstName');
            localStorage.removeItem('email');
            setLoginType(<Log_In />);
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }

    if (myToken) {
      checkToken();
    } else {
      setLoginType(<Log_In />);
    }
  }, []);

  return (
    <header>
      {logIn && LoginType}
      {scrolled && <Scrolled setlogIn={setlogIn} setscrolled={setscrolled} />}
    </header>
  );
};

export default Navigation;
