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
app.get("/sendmessage", (req, res) => {
  const { image, password } = req.query;
  console.log(image);
  console.log(password);
  // const message = req.body.message; // Assuming you have middleware to parse the request body
  const message = "hello world";
  // Emit the message to all clients in the "room1" room
  io.to("room1").emit("messageFromServer", {
    image: image,
    password: password,
  });

  res.status(200).send("Message sent successfully...");
});

app.get("/channelMessage", (req, res) => {
  const { channel, message, password } = req.query;
  console.log(channel);
  console.log(message);
  console.log(password);
  // const message = req.body.message; // Assuming you have middleware to parse the request body

  // Emit the message to all clients in the "room1" room
  io.to("room1").emit("messageFromServer", {
    channel: channel,
    message: message,
    password: password,
  });

  res.status(200).send("Message sent successfully to channel");
});

// Define an API route for checking the password
app.get("/checkPassword", async (req, res) => {
  const { password } = req.query;

  // Replace this with your actual password check logic
  // For demonstration purposes, we'll check against a hardcoded password.
  if (password === "myPassword") {
    res.status(200).json("correct");
  } else {
    res.status(401).json("incorrect");
  }
});

const port = process.env.PORT || 443;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
