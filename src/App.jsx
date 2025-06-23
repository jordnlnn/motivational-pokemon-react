import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";

import Footer from "./components/Footer";
import "./App.css";
import TrainerNameScreen from "./components/TrainerNameScreen";

export default function App() {
  const [screen, setScreen] = useState("welcome");

  return (
    <div className="container">
      {screen === "welcome" && <WelcomeScreen setScreen={setScreen} />}

      {screen === "trainer" && <TrainerNameScreen setScreen={setScreen} />}

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
