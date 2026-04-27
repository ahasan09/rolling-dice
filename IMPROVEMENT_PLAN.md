# Improvement Plan: rolling-dice

## Overview
Vanilla JS dice simulation with bar chart visualization. Two separate HTML versions with likely duplicated code. No tests, no build pipeline.

## Improvements

### Code Quality
- Consolidate the two HTML versions (`index.html`, `index2.html`) into one configurable version or document the difference between them and remove the duplicate
- Extract the dice simulation logic and chart rendering into separate modules
- Convert to TypeScript and ES modules
- Add ESLint + Prettier

### Testing
- Add Jest unit tests for the dice simulation logic (test distribution of results, correct number of rolls, edge cases)
- Add Playwright visual regression tests for the chart rendering

### Features
- Add user controls: number of dice, number of sides per die (D4, D6, D8, D10, D12, D20), number of rolls
- Add a histogram toggle between bar chart and pie chart views
- Add statistical summary: mean, median, mode, standard deviation of results
- Add animation for the dice roll

### Build Pipeline
- Add Vite for ES module bundling and a hot-reload dev server
- Add GitHub Actions CI: lint + test + build

### Deployment
- Deploy to GitHub Pages automatically on push to `main`
