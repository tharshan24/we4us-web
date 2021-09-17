import Login from './components/login';
import Topber from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import "./App.css";
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from './pages/userList/UserList';
import Notification from './pages/notification/Notification';
import View from './pages/notification/view'
import User from './pages/user/User';
import WidgetSm from './components/widgetSm/WidgetSm';
import Transactions from './pages/transactions/Transactions';
//import Analytics from './pages/analytics/Analytics';
import DriverList from './pages/driverList/DriverList';
import Availability from './pages/availability/Availability';
import Request from './pages/request/Request';

function App() {
  return (
      <Router>
        <Route exact path="/">
            <Login/>
          </Route>
       <Topber/> 
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/users">
            <UserList/>
          </Route>
          <Route  path="/notification">
            <Notification/>
          </Route>
          <Route  path="/view/">
            <View/>
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route  path="/user">
            <WidgetSm/>
          </Route>
          <Route path="/transactions">
            <Transactions/>
          </Route>
          <Route path="/availability">
            <Availability/>
          </Route>
          <Route path="/request">
            <Request/>
          </Route>
          <Route path="/driverList">
            <DriverList/>
          </Route>
        </Switch>  
      </div>
      </Router>
  );
}

export default App;