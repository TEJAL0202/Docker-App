const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Project</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          color: white;
          text-align: center;
        }
        .container {
          margin-top: 100px;
        }
        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 1.2rem;
        }
        .box {
          background: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 10px;
          display: inline-block;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 DevOps Project Live</h1>
        <p>Deployed using Docker + GitHub Actions + Render</p>

        <div class="box">
          <p>🐳 Dockerized App</p>
          <p>⚙️ CI/CD Pipeline</p>
          <p>☁️ Cloud Deployment</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});