import Topber from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import "./App.css";
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from './pages/userList/UserList';
import Notification from './pages/notification/Notification';
import View from './pages/notification/view'

function App() {
  return (
      <Router>
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
        </Switch> 
      </div>
      </Router>
  );
}

export default App;