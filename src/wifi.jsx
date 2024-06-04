import React, { useState } from "react";

function WifiHandle() {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://192.168.4.1", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `ssid=${encodeURIComponent(ssid)}&password=${encodeURIComponent(
        password
      )}`,
    });

    if (response.ok) {
      setMessage("Wi-Fi credentials updated! Rebooting...");
    } else {
      setMessage("Failed to update Wi-Fi credentials.");
    }
  };

  return (
    <div className="Wifi-body">
      <header className="App-header">
        <h1>Change Wi-Fi </h1>
        <form className="wifi-form" onSubmit={handleSubmit}>
          <label>SSID:</label>
          <input
            type="text"
            className="wifi-input"
            value={ssid}
            onChange={(e) => setSsid(e.target.value)}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            className="wifi-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button className="wifi-btn" type="submit">
            Submit
          </button>
        </form>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default WifiHandle;
