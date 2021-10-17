import { useState, useEffect } from "react";
import axios from "axios";
import { SlipData } from "./interfaces/slip.interface";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState<string>();

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    try {
      const { data }: { data: SlipData } = await axios.get(
        "https://api.adviceslip.com/advice"
      );
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={getAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
