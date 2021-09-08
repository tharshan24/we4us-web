import Topber from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import "./App.css";
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from './pages/userList/UserList';

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
        </Switch> 
      </div>
      </Router>
  );
}

export default App;