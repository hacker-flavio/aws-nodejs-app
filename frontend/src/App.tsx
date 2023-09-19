// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const test = async () => {
//     axios
//       .get("/test")
//       .then(async (response) => {
//         alert(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Typescript
//         </a>

//         <button onClick={() => test()}>click me : )</button>
//         <div>Hi this is flavio herrera</div>
//         <div>
//           welcome to my shitty app i still dont have ssl, someone please help me
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [image, setImage] = React.useState("");
  const [message, setMessage] = React.useState("");

  const test = async () => {
    const queryParams = {
      image: image,
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
      message: message,
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with Typescript
          </a>
          <input
            type="text"
            placeholder="enter image url"
            name=""
            id=""
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button onClick={() => test()}>click me : )</button>
          <div>Hi this is flavio herrera</div>
          <div>
            welcome to my shitty app i still dont have ssl, someone please help
            me
          </div>
          <div>yea this website sucks ass but who cares : )</div>
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
            type="text"
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
