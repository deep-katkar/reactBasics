import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);

  const addValue = () => {
    setcounter(counter + 1);
  };

  const decValue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello World Deep!</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={decValue}>Decrement</button>
    </>
  );
}

export default App;
