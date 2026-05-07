# Changelog

All notable changes to Snake Strike are documented here.

---

## [2.0.0] - 2026-05-08 — *Current Release*

### Added
- Full neon terminal UI — Orbitron font, CRT flicker animation
- Main menu with LAUNCH / MODE / SPECIFICATIONS / TERMINATE screens
- Three difficulty modes: LOW, NORMAL, HIGH — each with separate high score
- Procedural Web Audio sound engine (zero audio files)
  - Eat food: layered sine + square blip
  - Eat golden ★: triple ascending chime
  - Death: sawtooth crash drop
  - Level up: 3-note fanfare
  - UI clicks: subtle feedback beep
- Golden ★ special food (+50 pts, timed, blinking warning)
- Auto-restart after Game Over (2.5 second countdown)
- RESTART + EXIT buttons on Game Over overlay
- Pause / Resume with `P` key
- Mobile D-pad controls (auto-shown on touch devices)
- HUD bar (Score, Best, Level, Difficulty) flush-mounted to canvas
- Footer bar with key hints and author credit
- GitHub Pages live deployment
- GitHub Actions CI/CD workflow

### Changed
- Wall behaviour: now deadly (was wrap-around)
- Snake head colour matches selected difficulty
- Canvas grid lines removed for cleaner look
- Scanlines overlay removed

---

## [1.0.0] - 2026-05-07 — *Initial Release*

### Added
- Basic snake game with HTML5 Canvas
- Arrow keys + WASD controls
- Score tracking with localStorage high score
- Pulsing food animation
- Wall wrap-around movement
- Simple overlay screens
