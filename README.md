# Pokémon Support Buddy

A friendly, interactive web app that turns your favorite Pokémon into a personal emotional-support companion—powered by Google Gemini and PokeAPI.

---

## Technologies

- **React** (Vite)
- **Google Generative AI (Gemini)** via `@google/generative-ai`
- **Axios** for PokeAPI calls
- **CSS** (custom, with Google Fonts)
- **Figma & FigJam** (UX flow & UI design)
- **Node.js & npm** (project tooling)
- **ChatGPT** (generated the background image asset)

---

## Features

- 🗨️ **In-Character Chat**  
  Converse with any Pokémon, complete with signature catchphrases and move references.
- 🖼️ **Sprite Display**  
  Automatically fetches and shows your chosen Pokémon’s official sprite.
- ⏳ **5-Turn Session**  
  Keeps chats focused—on the 4th turn your buddy reminds you time’s almost up; on the 5th turn you get a warm send-off.
- 💬 **Persona-Driven AI Prompts**  
  Rich prompt engineering (persona bio + few-shot example) to ensure on-brand, concise responses.

---

## Process

1. **Inspiration & Challenge**  
   I built this during the [Codedex Monthly Challenge](https://www.codedex.io/community/monthly-challenge/4QHMd8GadBZtZbq6W1wD) to level up my React and AI-prompting skills.
2. **Reference & Reboot**  
   Started by porting my old [Motivational Pokémon](https://motivational-pokemon.netlify.app/) project into React—but ran into roadblocks.
3. **User Journey & Design**  
   Mapped the flow in FigJam, designed wireframes and polished UIs in Figma.
4. **Iteration & AI Integration**  
   Integrated chat logic with ChatGPT and GitHub Copilot, but hit walls around AI-response hooks.
5. **Tutorial Pivot**  
   Erased the tangled code and followed [Codedex’s “Generate a Poem with Google Gemini” tutorial](https://www.codedex.io/projects/generate-a-poem-with-google-gemini).
6. **Success!**  
   With that guide as a blueprint, the AI chat feature lit up exactly as expected.

---

## Running the Project

### Prerequisites

- Node.js (v16+) and npm
- A Google Gemini API key
- (Optional) A modern browser to view sprites

### Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/pokemon-support-buddy.git
   cd pokemon-support-buddy
   ```
