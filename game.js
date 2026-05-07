// ── Audio ──────────────────────────────────────────────────────────────────
let AC = null;

function unlockAudio() {
  if (AC) return;
  AC = new (window.AudioContext || window.webkitAudioContext)();
}

function beep(type, hz, endHz, vol, dur, delayOffset) {
  if (!AC) return;
  const t   = AC.currentTime + (delayOffset || 0) + 0.01;
  const osc = AC.createOscillator();
  const g   = AC.createGain();
  osc.connect(g);
  g.connect(AC.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(hz, t);
  if (endHz) osc.frequency.exponentialRampToValueAtTime(endHz, t + dur);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.start(t);
  osc.stop(t + dur + 0.05);
}

function soundEat()     { beep('sine',     300, 700,  0.6, 0.12, 0);
                          beep('square',   300, 700,  0.3, 0.10, 0); }
function soundSpecial() { beep('sine',     660, 1320, 0.6, 0.13, 0.00);
                          beep('sine',     880, 1760, 0.6, 0.13, 0.11);
                          beep('sine',    1100, 2200, 0.6, 0.13, 0.22); }
function soundDeath()   { beep('sawtooth', 400,   60, 0.7, 0.50, 0.00);
                          beep('square',   200,   40, 0.4, 0.40, 0.05); }
function soundLevelUp() { beep('sine',     523, 1047, 0.5, 0.15, 0.00);
                          beep('sine',     659, 1318, 0.5, 0.15, 0.14);
                          beep('sine',     784, 1568, 0.5, 0.18, 0.28); }
function soundClick()   { beep('square',   220,  440, 0.2, 0.06, 0); }

// ── Difficulty ─────────────────────────────────────────────────────────────
const DIFF_MODES = ['LOW', 'NORMAL', 'HIGH'];
let diffIndex = 1;

const DIFF = {
  LOW:    { startSpeed: 220, minSpeed: 120, stepMs: 8,  color: '#60a5fa', hudClass: 'low'    },
  NORMAL: { startSpeed: 150, minSpeed: 70,  stepMs: 12, color: '#00e5ff', hudClass: ''       },
  HIGH:   { startSpeed: 90,  minSpeed: 40,  stepMs: 16, color: '#ff2d2d', hudClass: 'high'   },
};

function currentDiff() { return DIFF_MODES[diffIndex]; }

// ── Canvas / DOM ───────────────────────────────────────────────────────────
const canvas         = document.getElementById('gameCanvas');
const ctx            = canvas.getContext('2d');
const GRID = 20, COLS = canvas.width / GRID, ROWS = canvas.height / GRID;

const scoreEl        = document.getElementById('score');
const highScoreEl    = document.getElementById('highScore');
const levelEl        = document.getElementById('level');
const overlay        = document.getElementById('overlay');
const overlayCode    = document.getElementById('overlayCode');
const overlayTitle   = document.getElementById('overlayTitle');
const overlayMessage = document.getElementById('overlayMessage');
const startBtn       = document.getElementById('startBtn');
const diffBadge      = document.getElementById('diffBadge');

const menuScreen      = document.getElementById('menuScreen');
const specsScreen     = document.getElementById('specsScreen');
const terminatedScreen= document.getElementById('terminatedScreen');
const gameScreen      = document.getElementById('gameScreen');
const modeLabel       = document.getElementById('modeLabel');
const specsBest       = document.getElementById('specsBest');

// ── High score ─────────────────────────────────────────────────────────────
function getHSKey() { return `snakeHS_${currentDiff()}`; }
function loadHS()   { return parseInt(localStorage.getItem(getHSKey()) || '0'); }
function saveHS(v)  { localStorage.setItem(getHSKey(), v); }

// ── Game state ─────────────────────────────────────────────────────────────
let snake, dir, nextDir, food, specialFood;
let score, highScore, level, speed, loopTimer, paused, running, frame;

function initGame() {
  const cfg = DIFF[currentDiff()];
  snake       = [{ x:10,y:10 }, { x:9,y:10 }, { x:8,y:10 }];
  dir         = { x:1, y:0 };
  nextDir     = { x:1, y:0 };
  score = 0; level = 1; speed = cfg.startSpeed;
  paused = false; running = true; specialFood = null; frame = 0;
  highScore   = loadHS();
  scoreEl.textContent = 0; levelEl.textContent = 1;
  highScoreEl.textContent = highScore;
  placeFood();
}

// ── Food ───────────────────────────────────────────────────────────────────
function randomCell() { return { x:Math.floor(Math.random()*COLS), y:Math.floor(Math.random()*ROWS) }; }
function onSnake(c)   { return snake.some(s => s.x===c.x && s.y===c.y); }
function placeFood()  { do { food = randomCell(); } while (onSnake(food)); }

function maybeSpawnSpecial() {
  if (!specialFood && score > 0 && score % 30 === 0) {
    do { specialFood = randomCell(); }
    while (onSnake(specialFood) || (specialFood.x===food.x && specialFood.y===food.y));
    specialFood.ttl = 80;
  }
}

// ── Tick ───────────────────────────────────────────────────────────────────
function tick() {
  if (paused || !running) return;
  dir = nextDir;
  const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
  // Wall collision
  if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
    soundDeath(); endGame(); return;
  }
  // Self collision
  if (onSnake(head)) { soundDeath(); endGame(); return; }
  snake.unshift(head);
  if (head.x===food.x && head.y===food.y) {
    soundEat(); addScore(10); placeFood(); maybeSpawnSpecial(); updateSpeed();
  } else if (specialFood && head.x===specialFood.x && head.y===specialFood.y) {
    soundSpecial(); addScore(50); specialFood = null;
  } else {
    snake.pop();
  }
  if (specialFood) { specialFood.ttl--; if (specialFood.ttl<=0) specialFood=null; }
  frame++; draw();
}

function addScore(pts) {
  score += pts; scoreEl.textContent = score;
  if (score > highScore) { highScore = score; highScoreEl.textContent = highScore; saveHS(highScore); }
}

function updateSpeed() {
  const cfg = DIFF[currentDiff()];
  const nl  = Math.floor(score/50)+1;
  if (nl !== level) {
    level = nl; levelEl.textContent = level;
    soundLevelUp();
    clearInterval(loopTimer);
    speed = Math.max(cfg.minSpeed, cfg.startSpeed - (level-1)*cfg.stepMs);
    loopTimer = setInterval(tick, speed);
  }
}

let autoRestartTimer = null;

function endGame() {
  running = false; clearInterval(loopTimer); drawDeathFlash();
  setTimeout(() => {
    overlayCode.textContent    = '// PROCESS TERMINATED';
    overlayTitle.textContent   = 'GAME OVER';
    overlayMessage.textContent = `SCORE: ${score}  ·  BEST: ${highScore}`;
    startBtn.textContent       = '▶  RESTART';
    overlay.classList.remove('hidden');
    // Auto-restart after 2.5s unless user clicks EXIT first
    autoRestartTimer = setTimeout(() => {
      overlay.classList.add('hidden');
      initGame(); draw();
      loopTimer = setInterval(tick, speed);
    }, 2500);
  }, 350);
}

// ── Drawing ────────────────────────────────────────────────────────────────
function draw() {
  ctx.fillStyle = '#000'; ctx.fillRect(0,0,canvas.width,canvas.height);
  drawFood(); drawSpecialFood(); drawSnake();
}

function drawFood() {
  const pulse = 0.85 + 0.15*Math.sin(frame*0.2);
  const cx=food.x*GRID+GRID/2, cy=food.y*GRID+GRID/2, r=(GRID/2-2)*pulse;
  ctx.shadowColor = '#ff2d2d'; ctx.shadowBlur = 12;
  const grad=ctx.createRadialGradient(cx-2,cy-2,1,cx,cy,r);
  grad.addColorStop(0,'#ff9f9f'); grad.addColorStop(1,'#ff2d2d');
  ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fillStyle=grad; ctx.fill();
  ctx.shadowBlur = 0;
  ctx.beginPath(); ctx.arc(cx-3,cy-3,r*0.3,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.5)'; ctx.fill();
}

function drawSpecialFood() {
  if (!specialFood) return;
  if (specialFood.ttl<20 && Math.sin(frame*0.8)<0) return;
  const cx=specialFood.x*GRID+GRID/2, cy=specialFood.y*GRID+GRID/2, r=GRID/2-2;
  ctx.shadowColor='#f59e0b'; ctx.shadowBlur=14;
  const grad=ctx.createRadialGradient(cx-2,cy-2,1,cx,cy,r);
  grad.addColorStop(0,'#fde68a'); grad.addColorStop(1,'#f59e0b');
  ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fillStyle=grad; ctx.fill();
  ctx.shadowBlur=0;
  ctx.fillStyle='#fff'; ctx.font=`${GRID-4}px serif`;
  ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('★',cx,cy+1);
}

function drawSnake() {
  const headColor = DIFF[currentDiff()].color;
  snake.forEach((seg,i) => {
    const x=seg.x*GRID, y=seg.y*GRID, t=i/snake.length;
    if (i===0) { ctx.shadowColor=headColor; ctx.shadowBlur=10; }
    else { ctx.shadowBlur=0; }
    ctx.fillStyle = i===0 ? headColor
      : `rgb(${Math.round(0+t*5)},${Math.round(160-t*80)},${Math.round(80-t*40)})`;
    const pad=i===0?1:2, size=GRID-pad*2;
    roundRect(ctx, x+pad, y+pad, size, size, i===0?4:3); ctx.fill();
    if (i===0) {
      ctx.shadowBlur=0; ctx.fillStyle='#000';
      const ex=dir.x===0?4:(dir.x>0?12:4), ey=dir.y===0?5:(dir.y>0?12:4);
      ctx.beginPath(); ctx.arc(x+ex,      y+ey, 2.5,0,Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(x+GRID-ex, y+ey, 2.5,0,Math.PI*2); ctx.fill();
    }
  });
  ctx.shadowBlur=0;
}

function drawDeathFlash() {
  ctx.fillStyle='rgba(255,45,45,0.3)'; ctx.fillRect(0,0,canvas.width,canvas.height);
}

function roundRect(ctx,x,y,w,h,r) {
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y); ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath();
}

// ── Screen helper ──────────────────────────────────────────────────────────
function showScreen(s) {
  [menuScreen, specsScreen, terminatedScreen, gameScreen].forEach(sc => sc.classList.add('hidden'));
  s.classList.remove('hidden');
}

// ── Menu buttons ───────────────────────────────────────────────────────────
document.getElementById('launchBtn').addEventListener('click', function() {
  unlockAudio(); soundClick();
  const cfg = DIFF[currentDiff()];
  diffBadge.textContent = currentDiff();
  diffBadge.className   = `hud-diff ${cfg.hudClass}`;
  overlayCode.textContent    = '// AWAITING INPUT';
  overlayTitle.textContent   = 'READY?';
  overlayMessage.textContent = 'Initialise sequence to begin';
  startBtn.textContent       = '▶  INITIALISE';
  overlay.classList.remove('hidden');
  ctx.fillStyle='#000'; ctx.fillRect(0,0,canvas.width,canvas.height);
  showScreen(gameScreen);
});

document.getElementById('modeBtn').addEventListener('click', function() {
  unlockAudio(); soundClick();
  diffIndex = (diffIndex + 1) % DIFF_MODES.length;
  modeLabel.textContent = currentDiff();
});

document.getElementById('specsBtn').addEventListener('click', function() {
  unlockAudio(); soundClick();
  specsBest.textContent = loadHS() + ' PTS';
  showScreen(specsScreen);
});

document.getElementById('terminateBtn').addEventListener('click', function() {
  unlockAudio(); soundDeath();
  showScreen(terminatedScreen);
});

document.getElementById('specsBackBtn').addEventListener('click', function() {
  soundClick(); showScreen(menuScreen);
});

document.getElementById('rebootBtn').addEventListener('click', function() {
  soundClick(); showScreen(menuScreen);
});

document.getElementById('backBtn').addEventListener('click', function() {
  clearInterval(loopTimer); running = false;
  showScreen(menuScreen);
});

// ── Start / Resume / Exit ──────────────────────────────────────────────────
startBtn.addEventListener('click', function() {
  unlockAudio();
  clearTimeout(autoRestartTimer);
  if (paused) { paused=false; overlay.classList.add('hidden'); return; }
  overlay.classList.add('hidden');
  clearInterval(loopTimer);
  initGame(); draw();
  loopTimer = setInterval(tick, speed);
});

document.getElementById('exitBtn').addEventListener('click', function() {
  soundClick();
  clearTimeout(autoRestartTimer);
  clearInterval(loopTimer);
  running = false;
  overlay.classList.add('hidden');
  showScreen(menuScreen);
});

// ── Keyboard ───────────────────────────────────────────────────────────────
const KEY_DIR = {
  ArrowUp:{x:0,y:-1}, ArrowDown:{x:0,y:1}, ArrowLeft:{x:-1,y:0}, ArrowRight:{x:1,y:0},
  w:{x:0,y:-1}, s:{x:0,y:1}, a:{x:-1,y:0}, d:{x:1,y:0},
};
document.addEventListener('keydown', e => {
  const d = KEY_DIR[e.key] || KEY_DIR[e.key.toLowerCase()];
  if (d) { e.preventDefault(); if (running && (d.x!==-dir.x||d.y!==-dir.y)) nextDir=d; }
  if ((e.key==='p'||e.key==='P') && running) togglePause();
});

function setDir(d) { if (running && !paused && (d.x!==-dir.x||d.y!==-dir.y)) nextDir=d; }
document.getElementById('btnUp').addEventListener('click',    ()=>setDir({x:0,y:-1}));
document.getElementById('btnDown').addEventListener('click',  ()=>setDir({x:0,y:1}));
document.getElementById('btnLeft').addEventListener('click',  ()=>setDir({x:-1,y:0}));
document.getElementById('btnRight').addEventListener('click', ()=>setDir({x:1,y:0}));

function togglePause() {
  paused=!paused;
  if (paused) {
    overlayCode.textContent    = '// EXECUTION SUSPENDED';
    overlayTitle.textContent   = 'PAUSED';
    overlayMessage.textContent = 'Press P or Resume to continue';
    startBtn.textContent       = '▶  RESUME';
    overlay.classList.remove('hidden');
  } else { overlay.classList.add('hidden'); }
}
