import "./featuredInfo.css";
import { AccountBalance, Group, HomeWork, Restaurant, ShopTwo } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Public  <Group className="featuredIcon negative"/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">10</span>
          </div>
        </div>
      <div className="featuredItem">
        <span className="featuredTitle">NGO <AccountBalance className="featuredIcon negative"/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4</span>
          </div>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Care Home <HomeWork className="featuredIcon negative"/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2</span>
          </div>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Shop  <ShopTwo className="featuredIcon negative"/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1</span>
          </div>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Restaurant <Restaurant className="featuredIcon negative"/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4</span>
          </div>
        </div>
    </div>
  );
}
