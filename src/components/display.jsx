import React, { useState, useEffect } from "react";

export default function DisplayCircle({ onConnectionStatusChange }) {
  const [data, setData] = useState("...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thingspeak.com/channels/2506827/feeds.json?api_key=X7NQA0AIG289GWQK&results=2"
        );
        const result = await response.json();
        const latestFeed = result.feeds[result.feeds.length - 1]; // Get the latest data point
        setData(latestFeed.field1); // Assuming the data is in field1
        onConnectionStatusChange(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData("off");
        onConnectionStatusChange(false);
      }
    };

    fetchData(); // Fetch data on initial render

    const interval = setInterval(fetchData, 15000); // Fetch data every 15 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [onConnectionStatusChange]);

  const getClassName = (value) => {
    if (value <= 50) return "medium-green";
    if (value <= 100) return "yellow";
    if (value <= 150) return "light-orange";
    if (value <= 200) return "dark-orange";
    if (value <= 300) return "light-red";
    return "dark-red";
  };

  const getStatusText = (value) => {
    if (value <= 50) return "Excellent";
    if (value <= 100) return "Good";
    if (value <= 150) return "Slight";
    if (value <= 200) return "Moderate";
    if (value <= 300) return "Heavy";
    return "Severe";
  };

  const value = parseFloat(data);
  const className = isNaN(value) ? "" : getClassName(value);
  const statusText = isNaN(value) ? "Loading..." : getStatusText(value);

  return (
    <div className="outer">
      <p className={`status-text ${className}`}>{statusText}</p>
      <div className={`outer-status-circle ${className}`}>
        <div className="display-circle">
          <p>Target</p>
          <h1 id="read-api" className={className}>
            {data}
          </h1>
          <div className="status-danger-circle"></div>
        </div>
      </div>
    </div>
  );
}
