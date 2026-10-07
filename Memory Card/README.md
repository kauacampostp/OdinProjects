# Pokémon Memory Card Game

A memory card game built with React using data from the [PokéAPI](https://pokeapi.co/).

The goal is simple: click on Pokémon cards without clicking the same Pokémon twice. After every correct choice, the cards are shuffled. The game ends when the player repeats a Pokémon or successfully selects all cards.

## 🎮 Features

- 15 random Pokémon per game
- Pokémon data fetched from the PokéAPI
- Cards shuffled after every correct click
- Current score tracking
- Best score tracking
- Win and lose screens
- New random Pokémon when restarting the game
- Responsive interface

## 🛠️ Technologies

- React
- JavaScript
- Tailwind CSS
- Vite
- PokéAPI

## 🧠 How It Works

When the game starts, 15 unique Pokémon IDs are randomly generated.

For each ID, the application fetches the Pokémon data from the PokéAPI using:

```text
https://pokeapi.co/api/v2/pokemon/{id}

The requests are handled simultaneously using Promise.all().
Each Pokémon is stored with the information needed by the game:
{
  id,
  name,
  img
}

When a card is clicked:
1. The Pokémon ID is checked against the previously clicked Pokémon.
2. If it has not been clicked, the score increases.
3. The cards are shuffled using the Fisher-Yates algorithm.
4. If the Pokémon was already clicked, the player loses.
5. If all 15 Pokémon are selected without repetition, the player wins.
🚀 Running Locally
Clone the repository:
git clone YOUR_REPOSITORY_URL

Enter the project folder:
cd YOUR_PROJECT_FOLDER

Install dependencies:
pnpm install

Start the development server:
pnpm dev

📚 What I Practiced
This project was created to practice concepts such as:
- React components
- Props
- useState
- useEffect
- Conditional rendering
- Event handling
- Fetch API
- Async/Await
- Promise.all()
- Working with arrays and Sets
- State management
- Fisher-Yates shuffle algorithm
- Consuming an external API

🌐 API
Pokémon data is provided by:
PokéAPI

📸 Preview



📖 Project Context
This project was developed as part of my studies in The Odin Project – Full Stack JavaScript curriculum.
