import React, { useState } from "react";

export default function MoodScreen({ trainerName, setScreen, setMood }) {
  const [selectedMood, setSelectedMood] = useState("");
  const moods = [
    { label: "Happy", value: "happy" },
    { label: "Calm", value: "calm" },
    { label: "Anxious", value: "anxious" },
    { label: "Sad", value: "sad" },
    { label: "Angry", value: "angry" },
    { label: "Tired", value: "tired" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMood) {
      setMood(selectedMood);
      setScreen("select");
    } else {
      alert("Please select a mood.");
    }
  };

  return (
    <div className="mood-screen">
      <h2 className="mood-heading">
        {trainerName}, how are you feeling today?
      </h2>
      <form id="mood-form" onSubmit={handleSubmit}>
        <div className="mood-options">
          {moods.map((mood) => (
            <button
              key={mood.value}
              type="button"
              className={`mood-btn ${
                selectedMood === mood.value ? "selected" : ""
              }`}
              onClick={() => setSelectedMood(mood.value)}
            >
              {mood.label}
            </button>
          ))}
        </div>
        <input type="submit" className="next-button" value="next" />
      </form>
    </div>
  );
}
