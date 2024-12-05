import saveAs from "file-saver";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import "./App.css";
import Phone from "./img/blank_name_airtag.png";
import Drum from "./img/pngwing.com.png";

function App() {
  const bodyRef = useRef(null);

  const [name, setName] = useState();
  const [showDrum, setShowDrum] = useState(false);
  const [isDownload, setIsDownload] = useState(false);

  const handleDownload = async () => {
    if (!bodyRef.current) return;
    setIsDownload(true);
    try {
      const div = bodyRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, `${name} in drum.png`);
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    } finally {
      setIsDownload(false);
    }
  };

  return (
    <div className="App">
      {!showDrum ? (
        <body className="App-Header">
          <p>Enter Your Name</p>
          <form>
            <input
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            ></input>
            <button onClick={() => setShowDrum(true)}>GO DRUMMM</button>
          </form>
        </body>
      ) : (
        <body className="background" ref={bodyRef}>
          <p className="name">{name}</p>
          <img src={Phone} alt="Phone" className="phone" />
          <img src={Drum} alt="Drum" className="drum" />
          <div className="drum-wave"></div>
        </body>
      )}
      {showDrum && (
        <>
          <button
            className="download"
            onClick={() => {
              handleDownload();
            }}
            disabled={isDownload}
          >
            GET PNG
          </button>
          <button
            className="back"
            onClick={() => {
              setName("");
              setShowDrum(false);
            }}
          >
            BACK
          </button>
        </>
      )}
    </div>
  );
}

export default App;
