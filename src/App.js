import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery';

// ----- 等待刪除 -----
// import Society from './components/Society';
// import Guide from './components/Guide';
// import Home from './components/Home';

// ------------------

import Event from './components/Event';
import Login from './components/Login';
import Error from './components/Error';


// ----- 路由修正完畢 -----

// Shared
import Navigation from './components/Navigation';

// Amber
import Home from './pages/Home/Home';

// 原
import Personal from './pages/Personal';

// 諶
import Society from './pages/Society/Society';
import Society_Group from './pages/Society/Society_Group';
import Society_Group_Discussion from './pages/Society/Society_Group_Discussion';

// Ju
import Guide from './pages/Guide/Guide';
import Guide_Personal from './pages/Guide/GuidePersonal';
import Guide_Join from './pages/Guide/GuideJoin';

// Show 
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
            <Route path="/" component={Home} exact />

            <Route path="/Event" component={Activity_List} exact/>
            <Route path="/ActivityIntroduce" component={Activity_Introduce} exact/>
            <Route path="/ActivityConduct" component={Activity_Conduct} exact/>

            <Route path="/Guide" component={Guide} exact />
            <Route path="/GuidePersonal:gId" component={Guide_Personal}/>
            <Route path="/GuideJoin" component={Guide_Join}/>

            <Route path="/Society" component={Society} exact />
            <Route path="/Society/Home" component={Society} exact />
            <Route path="/Society/Group" component={Society_Group} exact />
            <Route path="/Scoiety/Group/Disscussion" component={Society_Group_Discussion} exact />

            <Route path="/Login" component={Login} exact />

            <Route path="/Personal/:id" component={Personal} exact />
            <Route path="/Personal/:id/:cate" component={Personal} excat />

            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;