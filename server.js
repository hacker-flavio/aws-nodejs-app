const express = require("express");
const path = require("path");
const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// Static files
app.use(express.static(path.resolve(__dirname, "./frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
});

app.get("/test", (req, res) => {
  res.send("pain");
});

const port = process.env.PORT || 443;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
