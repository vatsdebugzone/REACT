import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3">Tailwind CSS Implementation</h1>
      <Card name="Navneet Vats" post="Software Engineer" />
      <Card name="Diksha Chauhan"  />
    </>
  );
}

export default App;
