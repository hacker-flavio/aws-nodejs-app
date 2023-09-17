// const express = require("express");
// const path = require("path");
// const app = express();

// // Static files
// app.use(express.static(path.resolve(__dirname, "./frontend/build")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
// });

// app.get("/test", (req, res) => {
//   res.send("much pain");
// });

// const port = process.env.PORT || 443;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static(path.resolve(__dirname, "./frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
});

app.get("/test", (req, res) => {
  res.send("much pain");
});

// Socket.io setup
io.on("connection", (socket) => {
  console.log("A user connected");

  // Join the "room1" room when a client connects
  socket.join("room1");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// POST route to emit an event to all clients in the "room1" room
app.post("/sendmessage", (req, res) => {
  // const message = req.body.message; // Assuming you have middleware to parse the request body
  const message = "hello world";
  // Emit the message to all clients in the "room1" room
  io.to("room1").emit("messageFromServer", { message });

  res.status(200).send("Message sent successfully");
});

const port = process.env.PORT || 443;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
