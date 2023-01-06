import React, { useState } from "react";
import "./App.css";
import Box from "./box";

function App() {
  const [state, setState] = useState({
    blueNo: "0",
    bluePrefix: "",
    blueRow: "",
    color: "purple",
  });

  const [state1, setState1] = useState({
    redNo: "0",
    redPrefix: "",
    redRow: "",
    color: "red",
  });

  const [load, setLoad] = useState(false);

  console.log(state);

  const handleClear = () => {
    setLoad(false);
    Array.from(document.querySelectorAll('input')).forEach(e => e.value='')
  };

  return (
    <>
      <div className="mainContainer">
        <div className="item">
          <h2>Token Generator Application</h2>
        </div>

        <div className="item">
          Number of Blue Tokens -
          <input
            onChange={(e) => setState({ ...state, blueNo: e.target.value })}
          />
        </div>
        <div className="item">
          Blue Token Prefix -
          <input
            onChange={(e) => setState({ ...state, bluePrefix: e.target.value })}
          />
        </div>
        <div className="item">
          Blue Token per Row -
          <input
            onChange={(e) => setState({ ...state, blueRow: e.target.value })}
          />
        </div>
        <div className="item">
          Number of Red Tokens -
          <input
            onChange={(e) => setState1({ ...state1, redNo: e.target.value })}
          />
        </div>
        <div className="item">
          Red Token Prefix -
          <input
            onChange={(e) =>
              setState1({ ...state1, redPrefix: e.target.value })
            }
          />
        </div>
        <div className="item">
          Red Token per Row -
          <input
            onChange={(e) => setState1({ ...state1, redRow: e.target.value })}
          />
        </div>
        <div className="item">
          <input type="button" id="btn" value="Generate" onClick={() => setLoad(true) } />
          <input type="button" id="btn" value="Clear" onClick={handleClear} />
        </div>
        <div className="item">
          {load &&
            [...new Array(parseInt(state.blueNo))].map((e, i) => {
              return (
                <>
                  {Math.floor(i + 1) % parseInt(state.blueRow) === 0 ? (
                    <>
                      <Box
                        key={i}
                        prefix={state.bluePrefix}
                        color={state.color}
                        num={i + 1}
                      />
                      <br></br>
                    </>
                  ) : (
                    <Box
                      key={i}
                      prefix={state.bluePrefix}
                      color={state.color}
                      num={i + 1}
                    />
                  )}
                </>
              );
            })}
        </div>
        <div className="item">
          <br></br>
          {load &&
            [...new Array(parseInt(state1.redNo))].map((e, i) => {
              return (
                <>
                  {Math.floor(i + 1) % parseInt(state1.redRow) === 0 ? (
                    <>
                      <Box
                        key={i}
                        prefix={state1.redPrefix}
                        color={state1.color}
                        num={i + 1}
                      />
                      <br></br>
                    </>
                  ) : (
                    <Box
                      key={i}
                      prefix={state1.redPrefix}
                      color={state1.color}
                      num={i + 1}
                    />
                  )}
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
