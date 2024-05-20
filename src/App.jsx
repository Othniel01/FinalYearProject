import React, { useState } from "react";
import DeviceStack from "./components/devices";
import DisplayCircle from "./components/display";
import FrameChart from "./components/frame";
import logo from "./img/logo.png";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectionStatus = (status) => {
    setIsConnected(status);
  };

  return (
    <div className="second-body">
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
      <img src={logo} alt="logo" className="logo" />
      <h1>Air Quality</h1>

      <DisplayCircle onConnectionStatusChange={handleConnectionStatus} />
      <DeviceStack />
      <FrameChart />
    </div>
  );
}

export default App;
