import { useState } from "react";
import "./App.css";
import Phone from "./img/blank_name_airtag.png";
import Drum from "./img/pngwing.com.png";

function App() {
  const [name, setName] = useState();
  const [showDrum, setShowDrum] = useState(false);
  return (
    <div className="App">
      {!showDrum ? (
        <body className="App-Header">
          <p>Enter Your Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          ></input>
          <button onClick={() => setShowDrum(true)}>GO!</button>
        </body>
      ) : (
        <body className="background">
          <p className="name">{name}</p>
          <img src={Phone} alt="Phone" className="phone" />
          <img src={Drum} alt="Drum" className="drum" />
          <div className="drum-wave"></div>
        </body>
      )}
    </div>
  );
}

export default App;
