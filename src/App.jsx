import { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import SelectBuddy from "./components/SelectBuddy";

import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("landing");

  return (
    <div className="container">
      {screen === "landing" && <LandingScreen setScreen={setScreen} />}

      {screen === "select" && <SelectBuddy setScreen={setScreen} />}

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
