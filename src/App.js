// ----- 基本套件導入 ----

import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
// import { CookiesProvider } from 'react-cookie'
import Context from './context';
import './styles/main_style.css';
import Axios from 'axios';

// ------- 路由 -------

// 共用元件 「 Amber 」/ 註冊 「侑庭」
import Navigation from './components/Nav_Bar/Navigation';

// 首頁 「Amber」
import Home from './pages/Home/Home';
import Error_Page from './pages/Error';

// 設定頁面 「侑庭」
import Setting from './pages/Settings/Settings';

// 個人頁面 「嘉原」
import Personal from './pages/Personal';

// 社群頁面 「與諶」
import Society_Container from './pages/Society/Society_Container';

// 嚮導頁面 「JUJU」
import Guide from './pages/Guide/Guide';
import Guide_Personal from './pages/Guide/Guide_Personal';
import Guide_Join from './pages/Guide/Guide_Join';

// 活動頁面 「翔翔」
import Activity_Conduct from './pages/Activity/Activity_Conduct';
import Activity_List from './pages/Activity/Activity_List';
import Activity_Introduce from './pages/Activity/Activity_Introduce'


// ----------------------

const App = () => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [searchResult, setSearchResult] = useState('JUJU');
  const [guide_id, setGuideId] = useState('')


  let email = localStorage.getItem('email');


  const [userInfo, setUserInfo] = useState({
    name: '',
    lastName: '',
    firstName: '',
    birthday: '',
    id: '',
    email: '',
    place: '',
    interested: '',
    guide_id: ''
  })

  // let getData = async () => {
  //   let result = await Axios.post('http://localhost:8000/context', { email });
  //   setUserInfo({
  //     name: result[0].lastName + result[0].firstName,
  //     lastName: result[0].lastName,
  //     firstName: result[0].firstName,
  //     birthday: result[0].birthday,
  //     id: result[0].id,
  //     email: result[0].email,
  //     place: result[0].place,
  //     interested: result[0].interested,
  //     // guide_id: result[0].guide_id
  //   })
  // }

  useEffect(async () => {
    await Axios.post('http://localhost:8000/context', { email })
      .then((res) => {
        // console.log(res);
        setUserInfo({
          name: res.data[0].lastName + res.data[0].firstName,
          lastName: res.data[0].lastName,
          firstName: res.data[0].firstName,
          birthday: res.data[0].birthday,
          id: res.data[0].id,
          email: res.data[0].email,
          place: res.data[0].place,
          interested: res.data[0].interested,
          // guide_id: res.data[0].guide_id
        })

        window.addEventListener('storage', function (e) {
          localStorage.setItem(e.key, e.oldValue)
        })
      })
      .catch((err) => {
        console.log(err);
      })
    // getData();
  }, []);

  // console.log(userInfo)

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        userInfo,
        setUserInfo,
        searchResult,
        setSearchResult,
        guide_id,
        setGuideId
      }}
    >
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            {/* 首頁 */}
            <Route path="/" component={Home} exact />

            {/* 活動頁面 */}
            <Route path="/Event" component={Activity_List} exact />
            <Route path="/ActivityIntroduce/:id" component={Activity_Introduce} exact />
            <Route path="/ActivityConduct/:id" component={Activity_Conduct} exact />

            {/* 嚮導頁面 */}
            <Route path="/Guide" component={Guide} exact />
            <Route path="/GuidePersonal/:gId" component={Guide_Personal} />
            <Route path="/GuideJoin" component={Guide_Join} />

            {/* 社群頁面 */}
            <Route path="/Society" component={Society_Container} exact />
            <Route path="/Society/Home" component={Society_Container} exact />
            <Route path="/Society/group/:id" component={Society_Container} exact />


            {/* 個人頁面 */}
            {/* ------- 嘉原 變動 ------ */}
            {/* <Route path="/Personal/:id" component={Personal} exact />
            <Route path="/Personal/:id/:cate" component={Personal} excat /> */}
            {
              userInfo.id ? <Route path="/Personal/:id" component={Personal} exact /> : <Route path="/Personal/:id" component={Home} exact />
            }
            {
              userInfo.id ? <Route path="/Personal/:id/:cate" component={Personal} excat /> : ''
            }
            {/* ------- 嘉原 變動 ------ */}

            {/* 設定頁面 */}
            <Route path='/Setting' component={Setting} exact />
            {/* 錯誤處理頁面 [ 未完成 ] */}
            <Route path='/:error' component={Error_Page} />
          </Switch>
        </div>
      </BrowserRouter>

    </Context.Provider>
  );
}

export default App;