import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import DeviceStack from "./components/devices";
import DisplayCircle from "./components/display";
import FrameChart from "./components/frame";
import logo from "./img/logo.png";
import Wifi from "./wifi";
import wifi from "./img/wifi.svg";
import breathe from "./img/breathe.svg";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectionStatus = (status) => {
    setIsConnected(status);
  };

  return (
    <Router>
      <div className="second-body">
        <nav className="ogodo">
          <ul>
            <li className="link-nav">
              <Link to="/">
                <object type="image/svg+xml" data={breathe}>
                  Your browser does not support SVG
                </object>
                Home
              </Link>
            </li>
            <li className="link-nav">
              <Link to="/wifi">
                <object type="image/svg+xml" data={wifi}>
                  Your browser does not support SVG
                </object>
                Wi-Fi Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`connection ${isConnected ? "connected" : "disconnected"}`}
        >
          <p>{isConnected ? "Connected" : "Disconnected"}</p>
          <div
            className={`status-connection ${
              isConnected ? "connected" : "disconnected"
            }`}
          ></div>
        </div>

        {/* <img src={logo} alt="logo" className="logo" /> */}
        <h1>Air Quality</h1>

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <DisplayCircle
                  onConnectionStatusChange={handleConnectionStatus}
                />
                <DeviceStack />
                <FrameChart />
              </>
            }
          />
          <Route path="/wifi" element={<Wifi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
