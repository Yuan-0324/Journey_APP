// ----- 基本套件導入 ----

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';


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
import Society from './pages/Society/Society';
import Society_Group from './pages/Society/Society_Group';
import Society_Group_Discussion from './pages/Society/Society_Group_Discussion';

// 嚮導頁面 「JUJU」
import Guide from './pages/Guide/Guide';
import Guide_Personal from './pages/Guide/GuidePersonal';
import Guide_Join from './pages/Guide/GuideJoin';

// 活動頁面 「翔翔」
import Activity_Conduct from './pages/Activity/Activity_Conduct';
import Activity_List from './pages/Activity/Activity_List';
import Activity_Introduce from './pages/Activity/Activity_Introduce'

// ----------------------

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            {/* 首頁 */}
            <Route path="/" component={Home} exact />

            {/* 活動頁面 */}
            <Route path="/Event" component={Activity_List} exact/>
            <Route path="/ActivityIntroduce" component={Activity_Introduce} exact/>
            <Route path="/ActivityConduct" component={Activity_Conduct} exact/>

            {/* 嚮導頁面 */}
            <Route path="/Guide" component={Guide} exact />
            <Route path="/GuidePersonal:gId" component={Guide_Personal}/>
            <Route path="/GuideJoin" component={Guide_Join}/>

            {/* 社群頁面 */}
            <Route path="/Society" component={Society} exact />
            <Route path="/Society/Home" component={Society} exact />
            <Route path="/Society/Group" component={Society_Group} exact />
            <Route path="/Scoiety/Group/Disscussion" component={Society_Group_Discussion} exact />

            {/* 個人頁面 */}
            <Route path="/Personal/:id" component={Personal} exact />
            <Route path="/Personal/:id/:cate" component={Personal} excat />
            
            {/* 設定頁面 */}
            <Route path='/Setting' component={Setting} exact/>
            {/* 錯誤處理頁面 [ 未完成 ] */}
            {/* <Route component={Error} />  */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;