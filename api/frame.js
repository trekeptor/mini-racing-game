// server.js  (deploy to Vercel / Netlify Functions / Railway)
const express = require('express');
const app = express();

app.get('/frame', (req, res) => {
  const url = `https://${req.headers.host}`; // base URL of your site
  res.json({
    // Required fields
    "frameUrl": `${url}/`,
    "image": `${url}/preview.png`,
    // Buttons (max 4)
    "buttons": [
      {
        "label": "▶️ Play",
        "action": "post",               // opens the URL in a new tab
        "target": `${url}/`
      },
      {
        "label": "🏆 Share Score",
        "action": "post",
        "target": `${url}/share`       // you can make a tiny page that redirects to a pre‑filled cast
      }
    ],
    // Optional: post the current high‑score (if you expose an API)
    "postUrl": `${url}/api/highscore` // not required for a simple button
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Frame server listening on ${port}`));

