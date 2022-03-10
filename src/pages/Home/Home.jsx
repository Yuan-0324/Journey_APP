import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import context from '../../context';

import { useLocation } from "react-router-dom";
import "./stylesheet/mainPage.css";
import Main_Section from "./components/Main_Section";
import Search_Bar from "./components/Search_Bar";
import Trending_City from "./components/Trending_City";
import Recommandation from "./components/Recommandation/Recommandation";
import Trending_Event from "./components/Trending_Event/Trending_Event";
import Trending_Guide from "./components/Trending_Guide/Trending_Guide";
import Weather_Section from "./components/Weather/Weather_Section";
import CTA from "./components/CTA";
import Community from "./components/Community/Community";
import Footer from "./components/Footer";

const Home = () => {
  const { setToken } = useContext(context);
  const { setUserInfo } = useContext(context);

  let history = useHistory();

  const location = useLocation();

  let code = location.search.substring(6, location.search.length - 12);

  console.log(code);

  async function SignInWithLine() {
    await Axios.post('http://localhost:8000/lineapi/login', { code })
      .then(async (res) => {
        // console.log(res);
        let myLoginData = {
          email: res.data.data.email
          // token: res.data.token
        }
        // console.log(myLoginData);
        await Axios.post('http://localhost:8000/api/login', myLoginData)
          .then(async (res) => {
            if (res.data == '信箱尚未被註冊') {
              await Axios.post('http://localhost:8000/api/signup', myLoginData)
                .then(async (res) => {
                  console.log(res);
                  await Axios.post('http://localhost:8000/api/login', myLoginData)
                    .then(async (res) => {
                      console.log(res);
                      Axios.defaults.headers.common["authorization"] = res.data.token; // axios 請求頭帶上 token
                      setToken(res.data.token); // 保存至 context
                      setUserInfo({
                        id: res.data.id,
                        email: res.data.email,
                        lastName: res.data.lastName,
                        firstName: res.data.firstName,
                        name: res.data.lastName + res.data.firstName,
                        api_selfie: res.data.api_selfie,
                        place: res.data.place,
                        interested: res.data.interested,
                        member_is_guide: res.data.member_is_guide
                      })
                      //保存到本地
                      localStorage.setItem('token', res.data.token)
                      localStorage.setItem('id', res.data.id)
                      localStorage.setItem('email', res.data.email)
                      localStorage.setItem('lastName', res.data.lastName)
                      localStorage.setItem('firstName', res.data.firstName)
                      localStorage.setItem('name', res.data.lastName + res.data.firstName)
                      localStorage.setItem('selfie', res.data.api_selfie)
                      localStorage.setItem('place', res.data.place)
                      localStorage.setItem('interested', res.data.interested)
                      localStorage.setItem('member_is_guide', res.data.member_is_guide)

                      let member_is_guide = localStorage.getItem('member_is_guide')
                      let email = localStorage.getItem('email')

                      //抓guide_id
                      if (member_is_guide == 1) {
                        await Axios.post('http://localhost:8000/login/guideID', { email })
                          .then((res) => {
                            console.log(res.data[0].guide_id);
                            localStorage.setItem('guide_id', res.data[0].guide_id)
                          })
                          .catch((err) => {
                            console.log(err);
                          })
                      }

                      if (localStorage.getItem('token') !== undefined) {
                        setTimeout(() => {
                          history.go(0);
                        }, 500);
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    })
                })
                .catch((err) => {
                  console.log(err);
                })
            }
            else {
              Axios.defaults.headers.common["authorization"] = res.data.token; // axios 請求頭帶上 token
              setToken(res.data.token); // 保存至 context
              setUserInfo({
                id: res.data.id,
                email: res.data.email,
                lastName: res.data.lastName,
                firstName: res.data.firstName,
                name: res.data.lastName + res.data.firstName,
                api_selfie: res.data.api_selfie,
                place: res.data.place,
                interested: res.data.interested,
                member_is_guide: res.data.member_is_guide
              })
              //保存到本地
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('id', res.data.id)
              localStorage.setItem('email', res.data.email)
              localStorage.setItem('lastName', res.data.lastName)
              localStorage.setItem('firstName', res.data.firstName)
              localStorage.setItem('name', res.data.lastName + res.data.firstName)
              localStorage.setItem('selfie', res.data.api_selfie)
              localStorage.setItem('place', res.data.place)
              localStorage.setItem('interested', res.data.interested)
              localStorage.setItem('member_is_guide', res.data.member_is_guide)

              let member_is_guide = localStorage.getItem('member_is_guide')
              let email = localStorage.getItem('email')

              //抓guide_id
              if (member_is_guide == 1) {
                await Axios.post('http://localhost:8000/login/guideID', { email })
                  .then((res) => {
                    console.log(res.data[0].guide_id);
                    localStorage.setItem('guide_id', res.data[0].guide_id)
                  })
                  .catch((err) => {
                    console.log(err);
                  })
              }


              if (localStorage.getItem('token') !== undefined) {
                setTimeout(() => {
                  history.go(0);
                }, 500);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    if (location.search.includes('code=') == true) {
      SignInWithLine();
    }
  }, []);


  return (
    <div style={{ backgroundColor: "#f8f8f8" }}>
      <Main_Section />
      <Weather_Section />
      <Search_Bar />
      <Trending_City />
      {/* <Recommandation /> */}
      <Trending_Event />
      <Trending_Guide />
      <CTA />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
