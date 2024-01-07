import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {

    //setCounter(counter+1);
    setCounter((prev)=>prev+ 1);
    setCounter((prev)=>prev+ 1);
  };

  return (
    <>
      <div>
        <h2>Create React Counter</h2>
        <h4>Update Counter Value is : {counter}</h4>
        <button onClick={updateCounter}>Press Me </button>
      </div>
    </>
  );
}

export default App;
