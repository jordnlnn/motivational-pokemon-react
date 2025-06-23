import FormInput from "./FormInput";

export default function TrainerNameScreen() {
  return (
    <div className="trainer-screen">
      <p className="trainer-text">What's your name, Trainer?</p>
      <form id="trainer-form">
        <input
          type="text"
          placeholder="Enter your name here..."
          autofocus
          required
          autocomplete="off"
          class="trainer-input"
        />
        <input type="submit" class="next-button" value="next" />
      </form>
    </div>
  );
}
