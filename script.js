(() => {
  const ITEM_SVGS = {
    star: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="#ffdd57" stroke="#000000" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="9.5" cy="11.5" r="1.2" fill="#000000"/>
        <circle cx="14.5" cy="11.5" r="1.2" fill="#000000"/>
      </svg>
    `,
    coin: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" fill="#ffd700" stroke="#000000" stroke-width="2"/>
        <ellipse cx="12" cy="12" rx="3" ry="6" fill="none" stroke="#000000" stroke-width="1.5"/>
        <line x1="12" y1="8" x2="12" y2="16" stroke="#000000" stroke-width="1.5"/>
      </svg>
    `,
    mushroom: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,3 C7,3 4,6.5 4,11 C4,13 6,15 8,15 L16,15 C18,15 20,13 20,11 C20,6.5 17,3 12,3 Z" fill="#ff3860" stroke="#000000" stroke-width="2"/>
        <path d="M8,15 L8,20 C8,21 9,21 12,21 C15,21 16,21 16,20 L16,15" fill="#ffe0b2" stroke="#000000" stroke-width="2"/>
        <circle cx="12" cy="7.5" r="2.5" fill="#ffffff"/>
        <circle cx="7" cy="11" r="1.8" fill="#ffffff"/>
        <circle cx="17" cy="11" r="1.8" fill="#ffffff"/>
        <ellipse cx="10.5" cy="17.5" rx="0.6" ry="1.5" fill="#000000"/>
        <ellipse cx="13.5" cy="17.5" rx="0.6" ry="1.5" fill="#000000"/>
      </svg>
    `,
    '1up': `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,3 C7,3 4,6.5 4,11 C4,13 6,15 8,15 L16,15 C18,15 20,13 20,11 C20,6.5 17,3 12,3 Z" fill="#23d160" stroke="#000000" stroke-width="2"/>
        <path d="M8,15 L8,20 C8,21 9,21 12,21 C15,21 16,21 16,20 L16,15" fill="#ffe0b2" stroke="#000000" stroke-width="2"/>
        <circle cx="12" cy="7.5" r="2.5" fill="#ffffff"/>
        <circle cx="7" cy="11" r="1.8" fill="#ffffff"/>
        <circle cx="17" cy="11" r="1.8" fill="#ffffff"/>
        <ellipse cx="10.5" cy="17.5" rx="0.6" ry="1.5" fill="#000000"/>
        <ellipse cx="13.5" cy="17.5" rx="0.6" ry="1.5" fill="#000000"/>
      </svg>
    `,
    peach: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="3,18 5,9 10,13.5 12,4 14,13.5 19,9 21,18" fill="#ffd700" stroke="#000000" stroke-width="2"/>
        <rect x="2.5" y="18" width="19" height="2.5" rx="1" fill="#ff7ec3" stroke="#000000" stroke-width="1.5"/>
        <circle cx="12" cy="14" r="1.2" fill="#00d1b2"/>
        <circle cx="6.5" cy="13" r="1" fill="#ff3860"/>
        <circle cx="17.5" cy="13" r="1" fill="#ff3860"/>
      </svg>
    `,
    shell: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,3 C7,3 4,6.5 4,11 C4,15 6.5,17 10,18 L10,20.5 C10,21.5 11,21.5 12,21.5 C13,21.5 14,21.5 14,20.5 L14,18 C17.5,17 20,15 20,11 C20,6.5 17,3 12,3 Z" fill="#007aff" stroke="#000000" stroke-width="2"/>
        <path d="M4,11 C8,11 16,11 20,11" stroke="#000000" stroke-width="1.5"/>
        <path d="M8,18 C8.5,15 15.5,15 16,18" stroke="#000000" stroke-width="1.5"/>
      </svg>
    `,
    goomba: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,3 C7,3 4,5.8 4,9.5 C4,12 5.5,13.5 7.5,14.2 C8,14.5 8.5,14 8.5,13.2 C8.5,12.2 10.5,11.8 12,11.8 C13.5,11.8 15.5,12.2 15.5,13.2 C15.5,14 16,14.5 16.5,14.2 C18.5,13.5 20,12 20,9.5 C20,5.8 17,3 12,3 Z" fill="#a05a2c" stroke="#000000" stroke-width="2"/>
        <path d="M8.5,14.2 C8.5,17.5 10,19.5 12,19.5 C14,19.5 15.5,17.5 15.5,14.2 H8.5 Z" fill="#ffe0b2" stroke="#000000" stroke-width="1.5"/>
        <path d="M9,20.5 C9,21.5 6.5,21.5 6.5,21.5 H17.5 C17.5,21.5 15,21.5 15,20.5 V19.5 H9 Z" fill="#5e3113" stroke="#000000" stroke-width="1"/>
        <path d="M8,8 L10.5,9.5 M16,8 L13.5,9.5" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        <circle cx="9.5" cy="11.5" r="1.2" fill="#000000"/>
        <circle cx="14.5" cy="11.5" r="1.2" fill="#000000"/>
      </svg>
    `,
    bobomb: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="13.5" r="7.5" fill="#212121" stroke="#000000" stroke-width="2"/>
        <rect x="11.2" y="4" width="1.6" height="2.5" fill="#9e9e9e" stroke="#000000" stroke-width="1"/>
        <path d="M12,4 C12.5,2.5 14,2 14,2" stroke="#ffa726" stroke-width="1.5"/>
        <ellipse cx="10" cy="12.5" rx="0.5" ry="1.8" fill="#ffffff"/>
        <ellipse cx="14" cy="12.5" rx="0.5" ry="1.8" fill="#ffffff"/>
        <ellipse cx="9" cy="21.2" rx="1.8" ry="1" fill="#ffb300" stroke="#000000" stroke-width="1.5"/>
        <ellipse cx="15" cy="21.2" rx="1.8" ry="1" fill="#ffb300" stroke="#000000" stroke-width="1.5"/>
      </svg>
    `,
    thwomp: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.5" y="4.5" width="15" height="15" rx="2" fill="#757575" stroke="#000000" stroke-width="2"/>
        <polygon points="4.5,7 2,8.5 4.5,10" fill="#e0e0e0" stroke="#000000" stroke-width="1"/>
        <polygon points="4.5,14 2,15.5 4.5,17" fill="#e0e0e0" stroke="#000000" stroke-width="1"/>
        <polygon points="19.5,7 22,8.5 19.5,10" fill="#e0e0e0" stroke="#000000" stroke-width="1"/>
        <polygon points="19.5,14 22,15.5 19.5,17" fill="#e0e0e0" stroke="#000000" stroke-width="1"/>
        <path d="M6.5,8.5 L9.5,9.5 M17.5,8.5 L14.5,9.5" stroke="#000000" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="8.5" cy="11.5" r="1.5" fill="#ff3860"/>
        <circle cx="15.5" cy="11.5" r="1.5" fill="#ff3860"/>
        <path d="M8,16 H16" stroke="#000000" stroke-width="1.5"/>
      </svg>
    `,
    bulletbill: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3,14 V10 C3,10 3,6.5 6,6.5 H15.5 C18.5,6.5 21.5,8.5 21.5,12 C21.5,15.5 18.5,17.5 15.5,17.5 H6 C3,17.5 3,14 3,14 Z" fill="#212121" stroke="#000000" stroke-width="2"/>
        <circle cx="16.5" cy="11.8" r="1.2" fill="#ff3860"/>
        <path d="M11.5,13.5 C11.5,15.5 9,16 8,16" stroke="#ffffff" stroke-width="1.5"/>
      </svg>
    `,
    mario: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2,13 C2,8 5.5,4.5 12,4.5 C18.5,4.5 22,8 22,13 H2 Z" fill="#ff3860" stroke="#000000" stroke-width="2"/>
        <path d="M1.2,13.8 C1.2,13 2,12.2 3,12.2 H21 C22,12.2 22.8,13 22.8,13.8 C22.8,14.5 22,15.2 21,15.2 H3 C2,15.2 1.2,14.5 1.2,13.8 Z" fill="#ff3860" stroke="#000000" stroke-width="1"/>
        <circle cx="12" cy="9.2" r="3.2" fill="#ffffff" stroke="#000000" stroke-width="0.8"/>
        <text x="12" y="11.4" font-family="'Press Start 2P', monospace" font-size="5" font-weight="900" fill="#ff3860" text-anchor="middle">M</text>
      </svg>
    `,
    luigi: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2,13 C2,8 5.5,4.5 12,4.5 C18.5,4.5 22,8 22,13 H2 Z" fill="#23d160" stroke="#000000" stroke-width="2"/>
        <path d="M1.2,13.8 C1.2,13 2,12.2 3,12.2 H21 C22,12.2 22.8,13 22.8,13.8 C22.8,14.5 22,15.2 21,15.2 H3 C2,15.2 1.2,14.5 1.2,13.8 Z" fill="#23d160" stroke="#000000" stroke-width="1"/>
        <circle cx="12" cy="9.2" r="3.2" fill="#ffffff" stroke="#000000" stroke-width="0.8"/>
        <text x="12" y="11.4" font-family="'Press Start 2P', monospace" font-size="5" font-weight="900" fill="#23d160" text-anchor="middle">L</text>
      </svg>
    `
  };

  let isMuted = false;

  const playSynthSound = (type) => {
    if (isMuted) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContextClass();
      const now = ctx.currentTime;
      
      if (type === 'flip') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.06);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'match') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(987.77, now);
        osc.frequency.setValueAtTime(1318.51, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.setValueAtTime(0.06, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.38);
      } else if (type === 'mismatch') {
        const notes = [329.63, 293.66, 261.63];
        let timeOffset = now;
        notes.forEach((freq) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'square';
          o.frequency.setValueAtTime(freq, timeOffset);
          g.gain.setValueAtTime(0.08, timeOffset);
          g.gain.exponentialRampToValueAtTime(0.001, timeOffset + 0.09);
          o.connect(g);
          g.connect(ctx.destination);
          o.start(timeOffset);
          o.stop(timeOffset + 0.09);
          timeOffset += 0.07;
        });
      } else if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'win') {
        const notes = [
          { f: 523.25, d: 0.1 },
          { f: 659.25, d: 0.1 },
          { f: 783.99, d: 0.1 },
          { f: 1046.50, d: 0.1 },
          { f: 1318.51, d: 0.1 },
          { f: 1567.98, d: 0.25 },
          { f: 1318.51, d: 0.1 },
          { f: 1567.98, d: 0.4 }
        ];
        let timeOffset = now;
        notes.forEach((note) => {
          const oscNode = ctx.createOscillator();
          const gainNode = ctx.createGain();
          oscNode.type = 'square';
          oscNode.frequency.setValueAtTime(note.f, timeOffset);
          gainNode.gain.setValueAtTime(0.05, timeOffset);
          gainNode.gain.exponentialRampToValueAtTime(0.001, timeOffset + note.d);
          oscNode.connect(gainNode);
          gainNode.connect(ctx.destination);
          oscNode.start(timeOffset);
          oscNode.stop(timeOffset + note.d);
          timeOffset += note.d - 0.01;
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  let currentDifficulty = 'easy';
  let cardsData = [];
  let flippedCards = [];
  let matchedPairsCount = 0;
  let totalPairs = 6;

  let score = 0;
  let moves = 0;
  let comboMultiplier = 1.0;
  let gameTimer = null;
  let secondsElapsed = 0;
  let isFirstFlip = true;
  let boardIsLocked = false;
  let currentUsername = '';
  let currentGameToken = null;

  const gameBoard = document.getElementById('game-board');
  const scoreVal = document.getElementById('score-val');
  const multiplierVal = document.getElementById('multiplier-val');
  const timerVal = document.getElementById('timer-val');
  const movesVal = document.getElementById('moves-val');
  const highScoreVal = document.getElementById('high-score-val');

  const difficultyButtons = document.querySelectorAll('.btn-diff');
  const restartBtn = document.getElementById('restart-btn');
  const soundToggleBtn = document.getElementById('sound-toggle');
  const speakerPath = document.getElementById('speaker-path');

  const winModal = document.getElementById('win-modal');
  const modalScore = document.getElementById('modal-score');
  const modalTime = document.getElementById('modal-time');
  const modalMoves = document.getElementById('modal-moves');
  const modalAccuracy = document.getElementById('modal-accuracy');
  const newHighScoreBanner = document.getElementById('new-high-score-banner');
  const playAgainBtn = document.getElementById('play-again-btn');

  const usernameModal = document.getElementById('username-modal');
  const usernameInput = document.getElementById('username-input');
  const usernameSubmitBtn = document.getElementById('username-submit-btn');
  const playerDisplay = document.getElementById('player-display');
  const changeUserBtn = document.getElementById('change-user-btn');
  const leaderboardList = document.getElementById('leaderboard-list');

  const formatScore = (num) => num.toString().padStart(5, '0');

  const getHighScoreKey = (diff) => `mario_match_high_${diff}`;

  const updateHighScoreDisplay = () => {
    const key = getHighScoreKey(currentDifficulty);
    const currentHighScore = localStorage.getItem(key) || 0;
    highScoreVal.textContent = formatScore(currentHighScore);
  };

  const fetchGameToken = async () => {
    try {
      const response = await fetch(`https://mario-score-api.vercel.app/api/start-game?diff=${currentDifficulty}`);
      const data = await response.json();
      if (data && data.success && data.token) {
        currentGameToken = data.token;
      }
    } catch (e) {
      console.error("Token error:", e);
    }
  };

  const startTimer = () => {
    if (gameTimer) clearInterval(gameTimer);
    secondsElapsed = 0;
    timerVal.textContent = "00:00";
    gameTimer = setInterval(() => {
      secondsElapsed++;
      const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
      const secs = (secondsElapsed % 60).toString().padStart(2, '0');
      timerVal.textContent = `${mins}:${secs}`;
    }, 1000);
  };

  const stopTimer = () => {
    if (gameTimer) clearInterval(gameTimer);
  };

  const shuffleArray = (array) => {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  const checkUsername = () => {
    const savedName = localStorage.getItem('mario_match_username');
    if (savedName) {
      currentUsername = savedName;
      playerDisplay.textContent = currentUsername.toUpperCase();
      initializeGame();
    } else {
      document.body.classList.add('modal-open');
      usernameModal.classList.add('active');
    }
  };

  const getLocalLeaderboard = () => {
    const data = localStorage.getItem(`mario_leaderboard_${currentDifficulty}`);
    if (!data) return [];
    try {
      const parsed = JSON.parse(data);
      return parsed.sort((a, b) => b.score - a.score || a.time_spent - b.time_spent).slice(0, 10);
    } catch (e) {
      return [];
    }
  };

  const saveLocalScore = (record) => {
    const current = getLocalLeaderboard();
    current.push(record);
    localStorage.setItem(`mario_leaderboard_${currentDifficulty}`, JSON.stringify(current));
  };

  const loadLeaderboard = async () => {
    leaderboardList.innerHTML = '';
    let records = [];

    try {
      const response = await fetch(`https://mario-score-api.vercel.app/api/get-leaderboard?diff=${currentDifficulty}`);
      const result = await response.json();

      if (response.ok && result && result.data) {
        records = result.data;
      } else {
        records = getLocalLeaderboard();
      }
    } catch (e) {
      records = getLocalLeaderboard();
    }

    if (records.length === 0) {
      const emptyRow = document.createElement('div');
      emptyRow.classList.add('leaderboard-empty');
      emptyRow.textContent = 'NO RECORDS';
      leaderboardList.appendChild(emptyRow);
      return;
    }

    records.forEach((row, index) => {
      const rowEl = document.createElement('div');
      rowEl.classList.add('leaderboard-row', `rank-${index + 1}`);
      
      const rankEl = document.createElement('span');
      rankEl.textContent = `#${index + 1}`;
      
      const nameEl = document.createElement('span');
      nameEl.textContent = row.username.toUpperCase();
      
      const scoreEl = document.createElement('span');
      scoreEl.textContent = formatScore(row.score);
      
      rowEl.appendChild(rankEl);
      rowEl.appendChild(nameEl);
      rowEl.appendChild(scoreEl);
      leaderboardList.appendChild(rowEl);
    });
  };

  const saveScoreToDatabase = async () => {
    const newRecord = {
      username: currentUsername,
      score: score,
      difficulty: currentDifficulty,
      moves: moves,
      time_spent: secondsElapsed,
      token: currentGameToken
    };

    try {
      const response = await fetch(
        "https://mario-score-api.vercel.app/api/submit-score",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newRecord)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("API Error:", data.error);
        saveLocalScore(newRecord);
        return;
      }

      console.log("Score saved successfully:", data);
    } catch (e) {
      console.error("Network Error:", e);
      saveLocalScore(newRecord);
    }
  };

  const initializeGame = () => {
    score = 0;
    moves = 0;
    comboMultiplier = 1.0;
    matchedPairsCount = 0;
    isFirstFlip = true;
    boardIsLocked = false;
    flippedCards = [];
    stopTimer();
    scoreVal.textContent = formatScore(0);
    multiplierVal.textContent = "1.0x";
    timerVal.textContent = "00:00";
    movesVal.textContent = "0";
    winModal.classList.remove('active');
    newHighScoreBanner.classList.remove('active');
    document.body.classList.remove('modal-open');
    updateHighScoreDisplay();
    fetchGameToken();
    loadLeaderboard();

    const allItems = Object.keys(ITEM_SVGS);
    let selectedItems = [];
    
    if (currentDifficulty === 'easy') {
      totalPairs = 6;
      selectedItems = allItems.slice(0, 6);
      gameBoard.className = 'grid-easy';
    } else if (currentDifficulty === 'medium') {
      totalPairs = 8;
      selectedItems = allItems.slice(0, 8);
      gameBoard.className = 'grid-medium';
    } else if (currentDifficulty === 'hard') {
      totalPairs = 12;
      selectedItems = allItems.slice(0, 12);
      gameBoard.className = 'grid-hard';
    }

    const combinedItems = [...selectedItems, ...selectedItems];
    cardsData = shuffleArray(combinedItems);
    gameBoard.innerHTML = '';
    cardsData.forEach((name, index) => {
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('card-container');
      cardContainer.dataset.name = name;
      cardContainer.dataset.index = index;
      const card = document.createElement('div');
      card.classList.add('card');
      const frontFace = document.createElement('div');
      frontFace.classList.add('card-face', 'card-front');
      frontFace.textContent = '?';
      const backFace = document.createElement('div');
      backFace.classList.add('card-face', 'card-back');
      backFace.innerHTML = ITEM_SVGS[name];
      card.appendChild(frontFace);
      card.appendChild(backFace);
      cardContainer.appendChild(card);
      gameBoard.appendChild(cardContainer);
    });
  };

  const handleCardClick = (e) => {
    if (boardIsLocked) return;
    const container = e.target.closest('.card-container');
    if (!container) return;
    const card = container.querySelector('.card');
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
    if (isFirstFlip) {
      isFirstFlip = false;
      startTimer();
    }
    card.classList.add('flipped');
    playSynthSound('flip');
    flippedCards.push({ container, card, name: container.dataset.name });
    if (flippedCards.length === 2) {
      moves++;
      movesVal.textContent = moves;
      boardIsLocked = true;
      evaluateMatch();
    }
  };

  const evaluateMatch = () => {
    const [first, second] = flippedCards;
    if (first.name === second.name) {
      setTimeout(() => {
        first.card.classList.add('matched');
        second.card.classList.add('matched');
        playSynthSound('match');
        const basePoints = 100;
        const pointsEarned = Math.round(basePoints * comboMultiplier);
        score += pointsEarned;
        scoreVal.textContent = formatScore(score);
        comboMultiplier = parseFloat((comboMultiplier + 0.2).toFixed(1));
        multiplierVal.textContent = `${comboMultiplier}x`;
        matchedPairsCount++;
        flippedCards = [];
        boardIsLocked = false;
        if (matchedPairsCount === totalPairs) {
          handleWin();
        }
      }, 400);
    } else {
      setTimeout(() => {
        first.card.classList.add('shake');
        second.card.classList.add('shake');
        playSynthSound('mismatch');
        comboMultiplier = 1.0;
        multiplierVal.textContent = "1.0x";
        score = Math.max(0, score - 15);
        scoreVal.textContent = formatScore(score);
      }, 300);
      setTimeout(() => {
        first.card.classList.remove('shake', 'flipped');
        second.card.classList.remove('shake', 'flipped');
        flippedCards = [];
        boardIsLocked = false;
      }, 1000);
    }
  };

  const handleWin = () => {
    stopTimer();
    playSynthSound('win');
    triggerConfetti();
    const finalTimeStr = timerVal.textContent;
    const accuracy = Math.round((totalPairs / moves) * 100);
    
    saveScoreToDatabase().then(() => {
      loadLeaderboard();
    });
    
    const key = getHighScoreKey(currentDifficulty);
    const oldHighScore = parseInt(localStorage.getItem(key)) || 0;
    
    if (score > oldHighScore) {
      localStorage.setItem(key, score);
      newHighScoreBanner.classList.add('active');
      highScoreVal.textContent = formatScore(score);
    }
    modalScore.textContent = formatScore(score);
    modalTime.textContent = finalTimeStr;
    modalMoves.textContent = moves;
    modalAccuracy.textContent = `${accuracy}%`;
    document.body.classList.add('modal-open');
    setTimeout(() => {
      winModal.classList.add('active');
    }, 1000);
  };

  const triggerConfetti = () => {
    const colors = ['#ff3860', '#23d160', '#00d1b2', '#ffdd57', '#b86bff', '#ffffff'];
    const confettiCount = 60;
    for (let i = 0; i < confettiCount; i++) {
      const conf = document.createElement('div');
      conf.classList.add('confetti');
      conf.style.background = colors[Math.floor(Math.random() * colors.length)];
      conf.style.left = Math.random() * 100 + 'vw';
      conf.style.top = '-20px';
      conf.style.width = '6px';
      conf.style.height = '6px';
      const duration = Math.random() * 2.5 + 1.5;
      const delay = Math.random() * 1;
      conf.style.animation = `fall ${duration}s ${delay}s linear forwards`;
      document.body.appendChild(conf);
      setTimeout(() => {
        conf.remove();
      }, (duration + delay) * 1000);
    }
  };

  const animationStyleSheet = document.createElement("style");
  animationStyleSheet.innerText = `
    @keyframes fall {
      0% { transform: translateY(0) rotate(0deg) translateX(0); opacity: 1; }
      50% { transform: translateY(50vh) rotate(180deg) translateX(15px); opacity: 0.9; }
      100% { transform: translateY(105vh) rotate(360deg) translateX(-15px); opacity: 0; }
    }
  `;
  document.head.appendChild(animationStyleSheet);

  gameBoard.addEventListener('click', handleCardClick);

  difficultyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (boardIsLocked) return;
      playSynthSound('click');
      difficultyButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentDifficulty = button.dataset.diff;
      initializeGame();
    });
  });

  restartBtn.addEventListener('click', () => {
    playSynthSound('click');
    initializeGame();
  });

  playAgainBtn.addEventListener('click', () => {
    playSynthSound('click');
    initializeGame();
  });

  usernameSubmitBtn.addEventListener('click', () => {
    const name = usernameInput.value.trim().replace(/[^a-zA-Z0-9]/g, '');
    if (name.length > 0 && name.length <= 10) {
      localStorage.setItem('mario_match_username', name);
      currentUsername = name;
      playerDisplay.textContent = currentUsername.toUpperCase();
      usernameModal.classList.remove('active');
      document.body.classList.remove('modal-open');
      playSynthSound('click');
      initializeGame();
    } else {
      playSynthSound('mismatch');
    }
  });

  changeUserBtn.addEventListener('click', () => {
    localStorage.removeItem('mario_match_username');
    currentUsername = '';
    playerDisplay.textContent = '---';
    stopTimer();
    winModal.classList.remove('active');
    document.body.classList.add('modal-open');
    usernameModal.classList.add('active');
    usernameInput.value = '';
    playSynthSound('click');
  });

  soundToggleBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    if (isMuted) {
      speakerPath.setAttribute('d', 'M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z');
    } else {
      speakerPath.setAttribute('d', 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z');
      playSynthSound('click');
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    checkUsername();
  });
})();
