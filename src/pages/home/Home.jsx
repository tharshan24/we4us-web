import React from "react"
import Chart from "../../components/chart/Chart"
import "./home.css"
import { userData } from "../../dummyData";
//import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";

export default function Home(){
    return (
       <div className="home">
          <FeaturedInfo/>
          <Chart data={ userData } title="User Analytics" grid dataKey="Active User"/>
          <div className="homeWidgets">
            {/* <WidgetSm/> */}
            <WidgetLg/>
          </div>
       </div>
       
    )
}