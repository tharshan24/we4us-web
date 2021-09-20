import Login from "./components/login";
import Topber from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Notification from "./pages/notification/Notification";
import View from "./pages/notification/view";
import User from "./pages/user/User";
import WidgetSm from "./components/widgetSm/WidgetSm";
import Transactions from "./pages/transactions/Transactions";
//import Analytics from './pages/analytics/Analytics';
import DriverList from "./pages/driverList/DriverList";
import Availability from "./pages/availability/Availability";
import Request from "./pages/request/Request";
import ViewDriver from "./pages/driverList/ViewDriver";
import ViewAvailability from "./pages/availability/ViewAvailability";
import ViewRequest from "./pages/request/ViewRequest";
import CollectionPoint from "./pages/collectionPoint/CollectionPoint";
import ViewCollectionPoint from "./pages/collectionPoint/ViewCollectionPoint";
import SellingPoint from "./pages/sellingPoint/SellingPoint";
import ViewSellingPoint from "./pages/sellingPoint/ViewSellingPoint";
import Ngo from "./pages/userList/Ngo";
import Shops from "./pages/userList/Shop";
import Restaurant from "./pages/userList/Restaurant";
import Carehome from "./pages/userList/CareHome";
import ViewUser from "./pages/user/ViewUser";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Topber />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/home">
            <Home />
            {/* <Sidebar/>
            <Topber/> */}
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/ngo">
            <Ngo />
          </Route>
          <Route path="/shops">
            <Shops />
          </Route>
          <Route path="/restaurant">
            <Restaurant/>
          </Route>
          <Route path="/careHome">
            <Carehome/>
          </Route>
          <Route path="/viewUser/:userId">
            <ViewUser />
          </Route>
          <Route path="/notification">
            <Notification />
          </Route>
          <Route path="/view/">
            <View />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/user">
            <WidgetSm />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route path="/availability">
            <Availability />
          </Route>
          <Route path="/request">
            <Request />
          </Route>
          <Route path="/driverList">
            <DriverList />
          </Route>
          <Route path="/viewDriver/:userId">
            <ViewDriver />
          </Route>
          <Route path="/viewAvailability/:userId">
            <ViewAvailability />
          </Route>
          <Route path="/viewRequest/:userId">
            <ViewRequest />
          </Route>
          <Route path="/collectionPoint">
            <CollectionPoint />
          </Route>
          <Route path="/viewCollectionPoint/:userId">
            <ViewCollectionPoint />
          </Route>
          <Route path="/sellingPoint">
            <SellingPoint />
          </Route>
          <Route path="/viewSellingPoint/:userId">
            <ViewSellingPoint />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
