import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./teacherdashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import webFont from "webfontloader";


const TeacherDashboard = () => {




  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 500],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [3, 78],
      },
    ],
  };

  return (

    <div className="dashboard">
      
      <Sidebar/>

      <div className="dashboardContainer">
        <Typography component="h1">Teacher Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              {/* Total Amount <br /> ₹79 */}
              Total Amount
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>9</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>34</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>89</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
























