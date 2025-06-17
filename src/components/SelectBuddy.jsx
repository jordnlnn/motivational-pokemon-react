import FormInput from "./FormInput";

export default function SelectBuddy({ setScreen }) {
  return (
    <div className="select-screen">
      <h2>Select your Pokémon buddy</h2>
      <FormInput />
      <button onClick={() => setScreen("landing")}>Back</button>
    </div>
  );
}
