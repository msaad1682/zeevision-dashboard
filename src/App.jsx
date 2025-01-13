import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';
import BarChartContainer from './Components/charts/Barchart/BarChartContainer';
import LineChartContainer from './Components/charts/Linechart/LineChartContainer';
import AxisChart from './Components/charts/AxisChart/AxisChart';
import DoughNutChart from './Components/charts/DoughNutChart/DoughNutChart';
// import FixedSidebarPage from './Pages/FixedSidebarPage';
import Layout from './Pages/Layout/Layout';
import Role from './Pages/Role/Role';
import List from './Pages/List/List';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <Router>
      <div className={`app ${sidebar ? "sidebar-expanded" : "sidebar-collapsed"}`}>
        <Sidebar sidebar={sidebar} />
        <div className="content">
          <Navbar setSidebar={setSidebar} sidebar={sidebar} />
          <Routes>
            {/* Default charts route */}
            <Route
              path="/"
              element={
                <>
                  {/* Charts */}
                  <BarChartContainer />
                  <LineChartContainer />

                  {/* Charts in one row */}
                  <div className="charts-row">
                    <AxisChart />
                    <DoughNutChart />
                  </div>
                </>
              }
            />

            {/* Fixed Sidebar Page Route */}
            <Route path="/Layout" element={<Layout />} />
            <Route path="/Role" element={<Role />} />
            <Route path="/List" element={<List />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
