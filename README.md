<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=260&text=SNAKE%20STRIKE&fontSize=85&color=0:000000,100:0a1a0a&fontColor=00e5ff&animation=fadeIn&fontAlignY=42&stroke=00e5ff&strokeWidth=2&desc=Neon%20Arcade%20%7C%20Built%20by%20Abdullah%20Javid&descSize=18&descAlignY=68&descColor=39ff14" width="100%"/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&size=20&duration=2500&pause=800&color=00E5FF&center=true&vCenter=true&repeat=true&width=600&lines=🐍+Classic+Snake+Arcade+Reborn+in+the+Browser;⚡+Neon+Terminal+Aesthetic+%2B+Web+Audio+API;🎮+Three+Difficulty+Levels+%7C+Instant+Play;🏆+Per-Mode+High+Score+%7C+Zero+Installation)](https://mabdullahab614-alt.github.io/snake-strike/)

<br/>

[![Play Live](https://img.shields.io/badge/🎮%20PLAY%20LIVE-snake--strike-00e5ff?style=for-the-badge&logoColor=black)](https://mabdullahab614-alt.github.io/snake-strike/)
[![Stars](https://img.shields.io/github/stars/mabdullahab614-alt/snake-strike?style=for-the-badge&color=39ff14&labelColor=0a0a0f&logo=github)](https://github.com/mabdullahab614-alt/snake-strike/stargazers)
[![Forks](https://img.shields.io/github/forks/mabdullahab614-alt/snake-strike?style=for-the-badge&color=00e5ff&labelColor=0a0a0f&logo=github)](https://github.com/mabdullahab614-alt/snake-strike/forks)
[![Issues](https://img.shields.io/github/issues/mabdullahab614-alt/snake-strike?style=for-the-badge&color=ff2d2d&labelColor=0a0a0f)](https://github.com/mabdullahab614-alt/snake-strike/issues)
[![License](https://img.shields.io/github/license/mabdullahab614-alt/snake-strike?style=for-the-badge&color=39ff14&labelColor=0a0a0f)](LICENSE)
[![Deploy](https://img.shields.io/github/actions/workflow/status/mabdullahab614-alt/snake-strike/deploy.yml?style=for-the-badge&label=CI%2FCD&labelColor=0a0a0f&color=39ff14)](https://github.com/mabdullahab614-alt/snake-strike/actions)

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?style=flat-square&logo=github&logoColor=white)
![Web Audio API](https://img.shields.io/badge/Web%20Audio%20API-FF6B6B?style=flat-square)
![Zero Dependencies](https://img.shields.io/badge/dependencies-zero-00e5ff?style=flat-square)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Controls](#-controls)
- [Difficulty Modes](#-difficulty-modes)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [File Structure](#-file-structure)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Changelog](#-changelog)
- [License](#-license)
- [Author](#-author)

---

## 🧠 Overview

**Snake Strike** is a fully browser-based neon arcade game — a complete reimagining of the classic Snake with a dark terminal aesthetic, procedural Web Audio sound effects, three difficulty tiers, a polished animated UI, and zero dependencies.

> No frameworks. No npm. No build step. Just open and play.

```
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║    ░██████╗███╗   ██╗ █████╗ ██╗  ██╗███████╗           ║
║    ██╔════╝████╗  ██║██╔══██╗██║ ██╔╝██╔════╝           ║
║    ╚█████╗ ██╔██╗ ██║███████║█████╔╝ █████╗             ║
║     ╚═══██╗██║╚██╗██║██╔══██║██╔═██╗ ██╔══╝             ║
║    ██████╔╝██║ ╚████║██║  ██║██║  ██╗███████╗           ║
║    ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝           ║
║                 S T R I K E                              ║
║         [ SYSTEM : ONLINE ]  [ STATUS : READY ]         ║
╚══════════════════════════════════════════════════════════╝
```

---

## 🌐 Live Demo

<div align="center">

### 🎮 [mabdullahab614-alt.github.io/snake-strike](https://mabdullahab614-alt.github.io/snake-strike/)

*Works on Desktop · Mobile · Tablet — no installation required*

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎮 Gameplay
- ✅ Wall collision — instant death on impact
- ✅ Self-collision detection
- ✅ Regular food **+10 pts** with pulse glow
- ✅ Rare golden ★ food **+50 pts** (timed, blinks warning)
- ✅ Auto-restart after Game Over (2.5 s countdown)
- ✅ Level system — speed increases every 50 pts
- ✅ Per-difficulty high score saved in localStorage

</td>
<td width="50%">

### 🖥️ Interface
- ✅ Neon terminal UI — Orbitron + Share Tech Mono
- ✅ Animated title with authentic CRT flicker
- ✅ Main menu: LAUNCH / MODE / SPECS / TERMINATE
- ✅ System Specifications screen
- ✅ Pause overlay — `P` key or button
- ✅ RESTART + EXIT on Game Over
- ✅ HUD bar flush-mounted above canvas

</td>
</tr>
<tr>
<td width="50%">

### 🔊 Web Audio Engine
- ✅ **Eat food** — layered sine + square blip
- ✅ **Eat golden ★** — triple ascending chime
- ✅ **Death** — sawtooth frequency crash
- ✅ **Level up** — 3-note ascending fanfare
- ✅ **UI clicks** — subtle square feedback
- ✅ Zero audio files — 100% procedural synthesis

</td>
<td width="50%">

### 📱 Accessibility
- ✅ Arrow keys + WASD support
- ✅ Mobile D-pad (auto-shown on touch)
- ✅ Responsive canvas (320px on small screens)
- ✅ Keyboard pause/resume
- ✅ High contrast neon colour scheme
- ✅ Works offline (static HTML)

</td>
</tr>
</table>

---

## 🕹️ Controls

<div align="center">

```
              [ W ] / [ ↑ ]
                   ▲
[ A ] / [ ← ] ◄   🐍   ► [ D ] / [ → ]
                   ▼
              [ S ] / [ ↓ ]

  [ P ]  →  Pause / Resume
  Mobile →  On-screen D-Pad (appears automatically)
```

</div>

---

## ⚙️ Difficulty Modes

<div align="center">

| Mode | Start Speed | Min Speed | Snake Colour | High Score |
|:----:|:-----------:|:---------:|:------------:|:----------:|
| 🔵 **LOW** | 220 ms/tick | 120 ms/tick | Blue | Separate |
| 🟢 **NORMAL** | 150 ms/tick | 70 ms/tick | Cyan | Separate |
| 🔴 **HIGH** | 90 ms/tick | 40 ms/tick | Red | Separate |

Speed increases every **50 points**. Each mode tracks its own all-time best.

</div>

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Markup | **HTML5** | Game shell, canvas, menus, overlays |
| Styling | **CSS3** | Flexbox layout, custom properties, keyframe animations |
| Logic | **Vanilla JS ES6+** | Game loop, collision, scoring, rendering |
| Graphics | **Canvas 2D API** | Snake, food, glow effects, death flash |
| Audio | **Web Audio API** | Oscillators, gain nodes, frequency ramps |
| Fonts | **Google Fonts** | Orbitron (titles) + Share Tech Mono (UI) |
| Hosting | **GitHub Pages** | Free static hosting via CI/CD |
| CI/CD | **GitHub Actions** | Auto-deploy on every push to `main` |

</div>

---

## 🚀 Quick Start

### Play instantly (no setup)
```
https://mabdullahab614-alt.github.io/snake-strike/
```

### Run locally
```bash
# Clone
git clone https://github.com/mabdullahab614-alt/snake-strike.git
cd snake-strike

# Open (no build step needed)
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

### Deploy your own fork
```bash
# Fork on GitHub, then:
git clone https://github.com/YOUR_USERNAME/snake-strike.git

# Enable GitHub Pages in Settings → Pages → Deploy from main branch
# Your live URL: https://YOUR_USERNAME.github.io/snake-strike/
```

---

## 📁 File Structure

```
snake-strike/
│
├── 📄 index.html                    # Game shell, all screens & canvas
├── 🎨 style.css                     # Neon terminal theme & layout
├── ⚙️  game.js                       # Game logic, audio engine, renderer
│
├── 📋 README.md                     # You are here
├── 📜 LICENSE                       # MIT License
├── 📝 CHANGELOG.md                  # Version history
├── 🔒 SECURITY.md                   # Security policy
├── 🤝 CONTRIBUTING.md               # Contribution guide
├── 🔧 .gitignore                    # Ignored files
│
└── 📁 .github/
    ├── 📁 workflows/
    │   └── deploy.yml               # CI/CD — auto deploy to Pages
    ├── 📁 ISSUE_TEMPLATE/
    │   ├── bug_report.md            # Bug report template
    │   └── feature_request.md       # Feature request template
    └── PULL_REQUEST_TEMPLATE.md     # PR checklist template
```

---

## 🗺️ Roadmap

- [ ] 🌈 Custom snake skin selector
- [ ] 💾 Global leaderboard (Supabase / Firebase)
- [ ] 🎵 Background music toggle
- [ ] 🌙 Additional colour themes (red neon, purple neon)
- [ ] 👻 Ghost mode (pass through self)
- [ ] ⏱️ Speed run / timed challenge mode
- [ ] 📊 Stats screen (games played, avg score)

> Have an idea? [Open a Feature Request](https://github.com/mabdullahab614-alt/snake-strike/issues/new?template=feature_request.md)

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

1. Fork the project
2. Create your branch: `git checkout -b feature/amazing-feature`
3. Commit: `git commit -m 'Add amazing feature'`
4. Push: `git push origin feature/amazing-feature`
5. Open a [Pull Request](https://github.com/mabdullahab614-alt/snake-strike/pulls)

---

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full version history.

**Latest:** `v2.0.0` — Neon UI, Web Audio, difficulty modes, wall collision, CI/CD

---

## 📜 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.

```
Copyright (c) 2026 Abdullah Javid
Free to use, modify, and distribute with attribution.
```

---

## 👤 Author

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,100:0a1a0a&height=130&text=Abdullah%20Javid&fontSize=38&fontColor=00e5ff&fontAlignY=45&stroke=0d3d0d&strokeWidth=1&desc=Undergraduate%20AI%20Engineer%20%7C%20Game%20Developer&descSize=15&descAlignY=72&descColor=39ff14" width="100%"/>

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-mabdullahab614--alt-00e5ff?style=for-the-badge&logo=github)](https://github.com/mabdullahab614-alt)
[![Email](https://img.shields.io/badge/Email-asoftwarer4.5%40gmail.com-ff2d2d?style=for-the-badge&logo=gmail&logoColor=white)](mailto:asoftwarer4.5@gmail.com)

*"Building intelligence, one line at a time."*

</div>

---

<div align="center">

**If Snake Strike made you smile, drop a ⭐ — it means the world.**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a1a0a,100:000000&height=120&section=footer&text=SNAKE%20STRIKE&fontSize=26&fontColor=00e5ff&animation=fadeIn&fontAlignY=65"/>

[![Play Now](https://img.shields.io/badge/🎮%20PLAY%20NOW-00e5ff?style=for-the-badge)](https://mabdullahab614-alt.github.io/snake-strike/)

</div>
