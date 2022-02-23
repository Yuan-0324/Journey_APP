import React, { useState, useEffect, useRef } from "react";

import Log_In from "./components/Log_In";
import Logged_In from "./components/Logged_In";
import Scrolled from "./components/Scrolled";
import './stylesheet/index.css';
import './stylesheet/Login.css';
import { IoImageOutline } from "react-icons/io5";

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

  // let token = localStorage.getItem('token') || null;
  const [ token, setToke ] = useState(localStorage.getItem('token'))
  let LoginType = '';
  // if (token == '') {
  //   LoginType = <Log_In />;
  // }else if(token == undefined){
  //   LoginType = <Log_In />;
  // }
  //  else {
  //   LoginType = <Logged_In />;
  // }
  // let myCookie = document.cookie
  // console.log(myCookie);
  
  if ( token ) {
    LoginType = <Logged_In />;
    // setType(<Logged_In />)
  } else {
    LoginType = <Log_In />;
    // setType(<Log_In />)
  }

  console.log(token)
  return (
    <header>
      {logIn && LoginType}
      {/* { logIn && ( token !== undefined? <Logged_In />:<Log_In /> ) } */}
      {scrolled && <Scrolled setlogIn={setlogIn} setscrolled={setscrolled} />}
    </header>
  );
};

export default Navigation;
