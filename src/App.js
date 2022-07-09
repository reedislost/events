import "./App.css";
import { useState } from "react";

function App() {
  const [frig, setFrig] = useState("");

  const onClick = () => {
    const frig = "ligma";
    setFrig(frig);
  };

  const onClickAgain = () => {
    console.log(frig);
  };
  return (
    <div className="App">
      <button onClick={onClick}>clickme</button>
      <button onClick={() => onClickAgain()}>again</button>
      <div>{frig}</div>
    </div>
  );
}

export default App;
