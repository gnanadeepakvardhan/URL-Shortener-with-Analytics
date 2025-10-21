import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const shortenUrl = async () => {
    const response = await fetch("https://url-shortener-backend1-7zt1.onrender.com/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    setShortenedUrl(data.shortenedUrl);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>URL Shortener</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        style={{ width: "300px", padding: "10px" }}
      />
      <button onClick={shortenUrl} style={{ marginLeft: "10px", padding: "10px" }}>
        Shorten
      </button>
      {shortenedUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>Shortened URL:</p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
