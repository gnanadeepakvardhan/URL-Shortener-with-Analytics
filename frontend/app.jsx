import React, { useState } from 'react';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shorten = async () => {
    const res = await fetch('/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ longUrl }),
    });
    const data = await res.json();
    setShortUrl(data.shortUrl);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>URL Shortener</h1>
      <input 
        value={longUrl} 
        onChange={e => setLongUrl(e.target.value)} 
        placeholder="Enter URL" 
      />
      <button onClick={shorten}>Shorten</button>
      {shortUrl && <p>Short URL: <a href={`https://${shortUrl}`} target="_blank">{shortUrl}</a></p>}
    </div>
  );
}

export default App;
