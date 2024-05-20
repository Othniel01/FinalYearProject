import React from "react";

export default function FrameChart() {
  const exportData = async () => {
    const apiKey = "X7NQA0AIG289GWQK"; // Channel read API key
    const channelId = "2506827";
    const results = "60"; // Number of results you want to fetch

    const fetchUrl = `https://api.thingspeak.com/channels/${channelId}/feeds.csv?api_key=${apiKey}&results=${results}`;

    try {
      const response = await fetch(fetchUrl);
      const data = await response.text();

      // Create a Blob from the data
      const blob = new Blob([data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);

      // Create a link element and trigger the download
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "data.csv";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const resetChart = async () => {
    const accountApiKey = "208A34F7AR5JIEKU"; // Replace with your account-specific API key
    const channelId = "2506827";

    const confirmReset = window.confirm(
      "Are you sure you want to reset the chart? This will delete all feed data."
    );

    if (confirmReset) {
      try {
        const deleteUrl = `https://api.thingspeak.com/channels/${channelId}/feeds.json`;
        const response = await fetch(deleteUrl, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `api_key=${accountApiKey}`,
        });

        if (response.ok) {
          alert("Chart reset successfully!");
        } else {
          const errorText = await response.text();
          console.error("Failed to reset chart:", errorText);
          alert(`Failed to reset the chart. Error: ${errorText}`);
        }
      } catch (error) {
        console.error("Error resetting chart:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="frame-chart-section">
      <div className="chart-encompass">
        <button className="btn export-data" onClick={exportData}>
          Export Data
        </button>
        <button className="btn reset-chart" onClick={resetChart}>
          Reset Chart
        </button>
        <iframe
          className="chart-option"
          title="Thingspeak Chart"
          style={{ border: "1px solid #cccccc" }}
          src="https://thingspeak.com/channels/2506827/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&type=line&xaxis=Time&api_key=X7NQA0AIG289GWQK"
        ></iframe>
      </div>
      <div className="space"></div>
    </div>
  );
}
