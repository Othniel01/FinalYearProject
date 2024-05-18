import React, { useState } from "react";
import DeviceStack from "./components/devices";
import DisplayCircle from "./components/display";

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
      <h1>Air Quality</h1>

      <DisplayCircle onConnectionStatusChange={handleConnectionStatus} />
      <DeviceStack />
    </div>
  );
}

export default App;
