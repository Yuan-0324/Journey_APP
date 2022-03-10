import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import Login from './Login';


// Component
import Sign_up_index from './SignUp_group/Sign_up_index';
import Sign_up_name from './SignUp_group/Sign_up_name';
import Sign_up_mail from './SignUp_group/Sign_up_mail';
import Sign_up_password from './SignUp_group/Sign_up_password';
import Sign_up_birthday from './SignUp_group/Sign_up_birthday';
import Sign_up_phone from './SignUp_group/Sign_up_phone';
import Sign_up_position from './SignUp_group/Sign_up_position';
import Sign_up_interested from './SignUp_group/Sign_up_interested';
import Sign_up_finish from './SignUp_group/Sign_up_finish';
import ForgetPassword from './ForgetPassword';

// ---- 更新 ---- 

function Navigation() {
  //{/* Modal Hook */}
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [signIndex, setSignIndex] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [birthday, setBirthday] = useState(false);
  const [phone, setPhone] = useState(false);
  const [position, setPosition] = useState(false);
  const [interested, setInterested] = useState(false);
  const [finish, setFinish] = useState(false)
  const [forget, setForget] = useState(false);


  //{/* Data Hook */}
  const [totalData, setTotalData] = useState({
    email: '',
    password: '',
    lastName: '',
    firstName: '',
    place: '',
    birthday: '',
    phone: '',
    interested: ''
  });

  useEffect(() => {
    if (openLoginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [openLoginModal])

  useEffect(() => {
    if (signIndex) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [signIndex])

  useEffect(() => {
    if (name) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [name])

  useEffect(() => {
    if (email) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [email])

  useEffect(() => {
    if (password) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [password])

  useEffect(() => {
    if (birthday) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [birthday])

  useEffect(() => {
    if (phone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [phone])

  useEffect(() => {
    if (position) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [position])

  useEffect(() => {
    if (interested) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [interested])

  useEffect(() => {
    if (finish) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [finish])


  return (
    <>
      <header>
        <nav id='logIn'>
          <ul>
            <a href="/">
              <img className="logo" src={logo} alt="logo" /></a>
            <div className="navbar">

              <li>
                <a className="navLink" href="/Event">
                  活動
                </a>
              </li>
              <li>
                <a className="navLink" href="/Guide">
                  嚮導
                </a>
              </li>
              <li>
                <a className="navLink" href="/Society">
                  社群
                </a>
              </li>
              <li className="navLink"> <span onClick={() => { setOpenLoginModal(true) }}>登入</span></li>
            </div>
          </ul>
        </nav>
        {/* login */}
        {openLoginModal && < Login
          loginModal={setOpenLoginModal}
          signUpModal={setSignIndex}
          setForget={setForget}
        />}

        {/* signUp */}
        {signIndex && < Sign_up_index
          openLoginModal={openLoginModal}
          loginModal={setOpenLoginModal}
          signUpModal={setSignIndex}
          nameModal={setName}
        />}

        {/* name */}
        {name && <Sign_up_name
          signUpModal={setSignIndex}
          nameModal={setName}
          emailModal={setEmail}
          totalData={totalData}
          setTotalData={setTotalData}
        />}

        {/* email */}
        {email && <Sign_up_mail
          nameModal={setName}
          emailModal={setEmail}
          passwordModal={setPassword}
          totalData={totalData}
          setTotalData={setTotalData}

        />}

        {/* password */}
        {password && <Sign_up_password
          emailModal={setEmail}
          passwordModal={setPassword}
          birthdayModal={setBirthday}
          totalData={totalData}
          setTotalData={setTotalData}
        />}

        {/* birthday */}
        {birthday && <Sign_up_birthday
          passwordModal={setPassword}
          birthdayModal={setBirthday}
          phoneModal={setPhone}
          totalData={totalData}
          setTotalData={setTotalData}

        />}

        {/* phone */}
        {phone && <Sign_up_phone
          phoneModal={setPhone}
          birthdayModal={setBirthday}
          positionModal={setPosition}
          totalData={totalData}
          setTotalData={setTotalData}
        />}

        {/* position */}
        {position && <Sign_up_position
          positionModal={setPosition}
          phoneModal={setPhone}
          interestedModal={setInterested}
          totalData={totalData}
          setTotalData={setTotalData}
        />}

        {/* interested */}
        {interested && <Sign_up_interested
          interestedModal={setInterested}
          positionModal={setPosition}
          finishModal={setFinish}
          totalData={totalData}
          setTotalData={setTotalData}
        />}

        {/* finish */}
        {finish && <Sign_up_finish
          finishModal={setFinish}
        />}

        {/* 忘記密碼 */}
        {forget && <ForgetPassword setForget={setForget} forget={setForget}
          loginModal={setOpenLoginModal}
        />}
      </header>
    </>

  );
}

export default Navigation;