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
import Forget from './components/Nav_Bar/components/Forget';


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
import Activity_Edit from './pages/Activity/Activity_Edit'

// 聊天室 / 加號

import My_Button from './components/My_Button/My_Button';
import Chat_Room from './components/My_Button/Chat_Room/Chat_Room'
import Calendar from './components/My_Button/Calender/Member_calendar';

// ----------------------

const App = () => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [searchResult, setSearchResult] = useState('JUJU');

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
    guideId: ''
  })

  async function myContext() {
    await Axios.post('http://localhost:8000/context', { email })
      .then((res) => {
        // console.log(res);
        setUserInfo({
          name: res.data[0].lastName + res.data[0].firstName,
          selfie: res.data[0].api_selfie,
          lastName: res.data[0].lastName,
          firstName: res.data[0].firstName,
          birthday: res.data[0].birthday,
          id: res.data[0].id,
          email: res.data[0].email,
          place: res.data[0].place,
          interested: res.data[0].interested,
          member_is_guide: res.data[0].member_is_guide
          // guide_id: res.data[0].guide_id
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }


  useEffect(() => {
    myContext();
    window.addEventListener('storage', function (e) {
      localStorage.setItem(e.key, e.oldValue)
    })
  }, []);



  // console.log(userInfo);

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        userInfo,
        setUserInfo,
        searchResult,
        setSearchResult,
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
            <Route path="/ActivityEdit/:id" component={Activity_Edit} exact />

            {/* 嚮導頁面 */}
            <Route path="/Guide" component={Guide} exact />
            <Route path="/GuidePersonal/:gId" component={Guide_Personal} />
            <Route path="/GuideJoin" component={Guide_Join} />

            {/* 社群頁面 */}
            <Route path="/Society" component={Society_Container} exact />
            <Route path="/Society/Home" component={Society_Container} exact />
            <Route path="/Society/group/:id" component={Society_Container} exact />


            {/* 個人頁面 */}

            {
              userInfo.id ? <Route path="/Personal/:id" component={Personal} exact /> : ''
            }
            {
              userInfo.id ? <Route path="/Personal/:id/:cate" component={Personal} excat /> : ''
            }

            {/* 設定頁面 */}
            {
              userInfo.id ? <Route path='/Setting' component={Setting} exact /> : ''
            }
            {
              userInfo.id ? <Route path='/Setting/:cate' component={Setting} exact /> : ''
            }
            
            <Route patj='/forget' component={Forget} exact/>
            <Route path='/:error' component={Error_Page} />
          </Switch>

          {/* {userInfo.id ? <Calendar /> : ''}
          <Chat_Room /> */}
          <My_Button />

        </div>
      </BrowserRouter>

    </Context.Provider>
  );
}

export default App;