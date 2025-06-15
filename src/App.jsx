import { useState } from "react";
import FormInput from "./components/FormInput";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("landing");

  return (
    <div className="container">
      {screen === "landing" && (
        <div className="landing-screen">
          <h1 className="landing-heading">Pokémon Support Buddy</h1>
          <p className="landing-text">Welcome! Would you like to...</p>
          <button onClick={() => setScreen("select")}>Select Pokémon</button>
          <button onClick={() => setScreen("random")}>Randomize</button>
        </div>
      )}

      {screen === "select" && (
        <div className="select-screen">
          <h2>Select your Pokémon buddy</h2>
          <FormInput />
          <button onClick={() => setScreen("landing")}>Back</button>
        </div>
      )}

      {screen === "random" && (
        <div className="random-screen">
          <h2>Random Pokémon support incoming!</h2>
          {/* Code to fetch & show random Pokémon will go here */}
          <button onClick={() => setScreen("landing")}>Back</button>
        </div>
      )}

      <Footer />
    </div>
  );
}
