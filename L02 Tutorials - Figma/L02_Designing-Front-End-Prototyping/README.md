# FED Tutorial 2 - Figma Prototyping

## Project: Aegis Lite — Beginner-Friendly Dashboard Prototype

Aegis Lite is a beginner-friendly stock dashboard UI designed to demonstrate how a front-end developer can plan, wireframe, and prototype a real-world web application using Figma before writing any code.

---

## Figma Prototype Link

> **<[FIGMA](https://www.figma.com/design/fLDlfsIQvHLnYSNJLJrSe4/Aegis-Lite-FED-Prototype?node-id=0-1&p=f&t=4UJ3tjW8TEESz6w6-0)>**

---

## Completed Work

- Created Figma account / used Figma Starter plan
- Chose website revamp subject: **Aegis Lite** — a dashboard for searching stock quotes, managing a watchlist, and calculating a simple portfolio allocation
- Created low-fidelity desktop wireframe (`01_low_fidelity_desktop`) with:
  - Header / Logo / Theme Toggle
  - Hero intro + CTA buttons + Hero summary card
  - Dashboard info cards (Latest symbol, Last price, Signal verdict, Allocation total)
  - Quote search card
  - Watchlist card
  - Strategy signal demo
  - Portfolio calculator
  - About / disclaimer footer
- Created low-fidelity mobile wireframe (`02_low_fidelity_mobile`) with stacked single-column layout
- Converted both to high-fidelity desktop (`03_high_fidelity_desktop`) and mobile (`04_high_fidelity_mobile`) with:
  - Dark background theme
  - Real typography and colour palette (teal accent, cyan highlight)
  - Live-data placeholder values (AAPL, $214.37, Neutral, 100%)
  - Functional-looking buttons (Try the quote search, Read the disclaimer, Search quote, Calculate allocation)
  - Populated watchlist (NTVDIA, FF, AAPL, MSFT) with Load/Remove buttons
  - Portfolio calculator with Growth/Income/Cash bucket breakdown
- Created prototype flow frame (`05_prototype_flow`) documenting 4 linked frames:
  1. **Home / Dashboard** — Hero, cards, quote search entry
  2. **Quote Search Result** — Displays AAPL result and status message
  3. **Watchlist Updated** — Symbol saved/removed from localStorage
  4. **Portfolio Calculated** — Shows allocation total and bucket split
- Prototype interactions:
  - Try quote search → Navigate to Quote Search Result
  - Add / Remove → Navigate to Watchlist Updated
  - Calculate allocation → Navigate to Portfolio Calculated
- Enabled vertical scroll overflow for long desktop and mobile frames
- Added design rationale note (dashboard layout, dark interface pattern, accessibility-aware labels)

---

## Evidence

| File | Description |
|---|---|
| `01 Low Fidelity.png` | Desktop and mobile low-fidelity wireframe overview |
| `02 High Fidelity.png` | Desktop and mobile high-fidelity prototype |
| `03 Prototype Flow.png` | Prototype flow diagram with linked frames and interactions |

> Screenshots are located in this folder (`L02_Designing-Front-End-Prototyping/`).
