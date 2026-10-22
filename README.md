# Random Password Generator

JavaScript password-generator practice using Web Crypto, unbiased character selection, keyboard copy controls and clipboard error feedback.

Part of my JavaScript practice work. Explore my complete projects on [GitHub](https://github.com/awaljanhematyar) or my [developer portfolio](https://hematyar-professional-portfolio.vercel.app/).

[Live demo](https://awaljanhematyar.github.io/random-password-generator/)

## Features

- Generate a 14-character value using Web Crypto.
- Use rejection sampling to avoid modulo bias.
- Copy with mouse or keyboard and show success/failure feedback.
- Avoid logging generated values or placing them in status messages.
- Refuse generation if secure random support is unavailable.

## Run locally

```sh
git clone https://github.com/awaljanhematyar/random-password-generator.git
cd random-password-generator
```

Serve the folder using VS Code Live Server and open `index.html`. There is no npm installation or build step. Use a modern browser.

## Source map

| File | Purpose |
| --- | --- |
| `index.html` | Interface structure |
| `style.css` | Layout and visual styles |
| `script.js` | Interaction logic |

## Verification and scope

Targeted local checks cover allowed characters, output length, differing outputs, clipboard failure and unavailable secure randomness.

A learning project, not an audited password manager. It does not store generated values. Clipboard access depends on browser permissions and secure-context support.

## Author

[Awal Jan Hematyar](https://github.com/awaljanhematyar), Front-End Developer | React Developer.
