// ----- 基本套件導入 ----

import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
// import { CookiesProvider } from 'react-cookie'
import Context from './context';
import './styles/main_style.css';

// ------- 路由 -------

// 共用元件 「 Amber 」/ 註冊 「侑庭」
import Navigation from './components/Nav_Bar/Navigation';

// 首頁 「Amber」
import Home from './pages/Home/Home';

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
  const [ userInfo, setUserInfo ] = useState({})
  return (
    <Context.Provider
      value={{
        token,
        setToken,
        userInfo
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
            <Route path="/ActivityIntroduce" component={Activity_Introduce} exact />
            <Route path="/ActivityConduct" component={Activity_Conduct} exact />

            {/* 嚮導頁面 */}
            <Route path="/Guide" component={Guide} exact />
            <Route path="/GuidePersonal:gId" component={Guide_Personal}/>
            <Route path="/GuideJoin" component={Guide_Join}/>

            {/* 社群頁面 */}
            <Route path="/Society" component={Society_Container} exact />
            <Route path="/Society/Home" component={Society_Container} exact />
            <Route path="/Society/group/:id" component={Society_Container} exact />

            {/* 個人頁面 */}
            <Route path="/Personal/:id" component={Personal} exact />
            <Route path="/Personal/:id/:cate" component={Personal} excat />

            {/* 設定頁面 */}
            <Route path='/Setting' component={Setting} exact />
            {/* 錯誤處理頁面 [ 未完成 ] */}
            {/* <Route component={Error} />  */}
          </Switch>
        </div>
      </BrowserRouter>

    </Context.Provider>
  );
}

export default App;