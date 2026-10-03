# 🎮 Market Marauder

> A strategy-based multiplayer board game built with React and JavaScript.

## 🎯 What is Market Marauder?

Market Marauder is a strategy-based board game that I am building from scratch using React and JavaScript.

Players move around the game board, collect resources, manage their player state, and interact with different game actions.

The project is being developed incrementally to understand how React components, state management, and JavaScript game logic work together in a real application.

---

## 🛠️ Tech Stack

- React
- JavaScript
- Vite
- CSS
- Git & GitHub

---

## 🎮 Current Features

- 🎲 Dice-based player movement
- 👥 Multiplayer turn structure
- 🧍 Player position tracking
- ⛏️ Ore collection
- 🏭 Refinery system
- 💰 Resource management
- 🔄 Ore conversion system
- 🔁 End-turn functionality
- 🧩 Component-based React architecture
- 📦 Separated game logic from UI components

---

## 🌱 Game Resources

Players currently interact with four resources:

- 🪙 Gold
- 💳 Credits
- 🌱 Seeds
- ⛏️ Ore

Players can collect Ore and use the refinery system to convert it into other resources according to predefined game rules.

### Refinery Rates

| Resource | Ore Cost | Reward |
|----------|----------|--------|
| Gold | 2 Ore | 1 Gold |
| Credits | 2 Ore | 3 Credits |
| Seeds | 2 Ore | 2 Seeds |

---

## 📂 Project Structure

```text
src/
│
├── Components/
│   ├── ActionPanel.jsx
│   ├── Board.jsx
│   ├── PlayerInfo.jsx
│   └── Dice.jsx
│
├── game/
│   └── refinery.js
│
├── App.jsx
└── main.jsx

---

## 📚 What I Learned

Through this project, I have been developing practical experience with:

- React component architecture
- Props and component communication
- React state management
- JavaScript array methods such as `map()` and `filter()`
- Event handling
- Immutable state updates
- Managing game state
- Separating UI from game/business logic
- Debugging with browser DevTools
- Organizing reusable JavaScript modules
- Git and GitHub workflow