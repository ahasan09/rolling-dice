# Rolling Dice

A browser-based dice simulation that rolls two dice 1000 times and visualizes the frequency distribution of results.

## Running

No installation needed. Open `index.html` in any modern browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or serve locally:

```bash
npx serve .
```

Then open [http://localhost:3000](http://localhost:3000).

## Files

| File | Description |
|------|-------------|
| `index.html` | Basic dice simulation — rolls two dice and shows frequency |
| `advance.html` | Advanced version with configurable rolls and chart |
| `index.js` / `advance.js` | Dice roll logic and DOM rendering |
| `style.css` / `advance.css` | Styles |

## Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)
