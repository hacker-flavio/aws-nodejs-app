import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [image, setImage] = React.useState("");
  const [channel, setChannel] = React.useState("");
  const [message, setMessage] = React.useState("");

  const test = async () => {
    const queryParams = {
      image: image,
      password: password,
    };

    axios
      .get("/sendmessage", {
        params: queryParams,
      })
      .then(async (response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendMessage = async () => {
    const queryParams = {
      channel: channel,
      message: message,
      password: password,
    };

    axios
      .get("/channelMessage", {
        params: queryParams,
      })
      .then(async (response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkPassword = async () => {
    const queryParams = {
      password: password,
    };

    axios

      .get("/checkPassword", {
        params: queryParams,
      })
      .then(async (response) => {
        if (response.data === "correct") {
          setIsLoaded(true);
        } else {
          alert("incorrect password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("image", image);
  }, [image]);

  return (
    <div className="App">
      {isLoaded ? (
        <header className="App-header">
          <div>Hi this is flavio herrera</div>
          <div>
            welcome to my shitty app i still dont have ssl, someone please help
            me
          </div>
          <div>yea this website sucks ass but who cares : )</div>
          <br />
          <input
            type="text"
            placeholder="enter image url"
            name=""
            id=""
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button onClick={() => test()}>click me : )</button>

          <br />
          <input
            type="text"
            placeholder="enter channel id"
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
          />
          <input
            type="text"
            placeholder="send message as flavio to np server, please dont get me mutted : ("
            style={{ width: "900px" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={() => sendMessage()}>send message : )</button>
        </header>
      ) : (
        <div>
          enter password
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => checkPassword()}>submit</button>
        </div>
      )}
    </div>
  );
}

export default App;
