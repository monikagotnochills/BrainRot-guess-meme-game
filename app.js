// Enhanced Italian Brainrot Horror Game Data
const gameData = {
  gameRounds: [
    {
      id: 1,
      clue: "This cursed pasta demon emerges from the depths of boiling marinara hell, whispering ancient spaghetti incantations",
      options: ["Il Spaghetto Maledetto", "Demonio della Pasta", "Giuseppe il Dannato"],
      correct: 0,
      character: "🍝👹"
    },
    {
      id: 2,
      clue: "Guardian of the forbidden cheese vault, this horrifying entity melts the souls of those who dare taste cursed dairy",
      options: ["Signore del Terrore", "Don Formaggio Morte", "Fratello Maledizione"],
      correct: 1,
      character: "🧀💀"
    },
    {
      id: 3,
      clue: "This frozen nightmare dwells in the gelato underworld, freezing victims in eternal dairy punishment",
      options: ["Gelato della Morte", "Re del Ghiaccio Nero", "Spirito Congelato"],
      correct: 2,
      character: "🍦🔥"
    },
    {
      id: 4,
      clue: "Pizza demon that exists between dimensions of crust and sauce, devouring reality itself with each bite",
      options: ["Fantasma Margherita", "Demonio delle Olive", "Il Pizzaiolo dell'Apocalisse"],
      correct: 2,
      character: "🍕💀"
    },
    {
      id: 5,
      clue: "The final harbinger of Italian apocalypse - a ravioli wraith containing infinite screaming souls of the damned",
      options: ["Ravioli dell'Inferno", "Signore dell'Apocalisse", "Il Gnocchi Finale"],
      correct: 0,
      character: "🥟☠️"
    }
  ],
  winningMessages: [
    "THE SPIRITS APPROVE! 👻",
    "YOUR SOUL SURVIVES! 💀",
    "NIGHTMARE CONQUERED! 🔥",
    "DARKNESS RETREATS! ⚡",
    "THE DAMNED SALUTE YOU! 👹"
  ],
  scoreResponses: {
    "0": {
      "bigLine": "YOUR SOUL HAS BEEN COMPLETELY DEVOURED 💀",
      "phrases": [
        "The demons feast on your ignorance.",
        "You have become one with the pasta void.",
        "Your neurons have been marinara-ized.",
        "Even the spirits pity your performance."
      ]
    },
    "1": {
      "bigLine": "BARELY CLINGING TO YOUR MORTAL FORM 👻",
      "phrases": [
        "One synapse still flickers in the darkness.",
        "The underworld considers your application.",
        "Your soul hangs by a spaghetti thread."
      ]
    },
    "2": {
      "bigLine": "WOUNDED BUT NOT YET CONSUMED ⚡",
      "phrases": [
        "The demons show mild interest in your suffering.",
        "Half your soul remains... for now.",
        "You dance on the edge of the pasta abyss."
      ]
    },
    "3": {
      "bigLine": "THE SPIRITS SENSE POTENTIAL IN YOUR TORMENT 🔥",
      "phrases": [
        "You exist in the cursed middle realm.",
        "Neither fully damned nor truly blessed.",
        "The pasta gods remain undecided about your fate."
      ]
    },
    "4": {
      "bigLine": "THE DARK FORCES ACKNOWLEDGE YOUR SUFFERING 👹",
      "phrases": [
        "You approach the threshold of enlightened damnation.",
        "The nightmare begins to recognize you as worthy.",
        "Your torment has pleased the ancient ones."
      ]
    },
    "5": {
      "bigLine": "MASTER OF THE ITALIAN APOCALYPSE 🔱",
      "phrases": [
        "You have transcended mortal brainrot.",
        "The pasta demons bow to your superior madness.",
        "You are now one with the eternal spaghetti void."
      ]
    }
  }
};

// Game State Management
let gameState = {
  currentScreen: 'landing',
  currentRound: 0,
  score: 0,
  username: '',
  isLightMode: false,
  gameStarted: false
};

// Sound Effect Simulation
function playHorrorSound(soundType) {
  const sounds = {
    poke: "🔊 POKE SOUND: *squelch*",
    bounce: "🔊 BOUNCE SOUND: *boing*",
    correct: "🔊 CORRECT SOUND: *demonic approval*",
    wrong: "🔊 WRONG SOUND: *soul being devoured*",
    theme: "🔊 THEME SOUND: *eerie horror ambiance*",
    transition: "🔊 TRANSITION SOUND: *dimensional shift*",
    bloodDrip: "🔊 BLOOD DRIP SOUND: *drip... drip...*",
    scream: "🔊 SCREAM SOUND: *tormented wails*"
  };
  console.log(sounds[soundType] || "🔊 UNKNOWN HORROR SOUND");
}

// Initialize Application
function init() {
  console.log('🦇 Initializing BRAINROT TRIALS - Italian Horror Edition...');
  playHorrorSound('theme');
  
  // Wait a moment to ensure DOM is fully loaded
  setTimeout(() => {
    setupEventListeners();
    initializeFloatingCharacters();
    initializeTorchSystem();
    startHorrorEffects();
    console.log('💀 BRAINROT TRIALS initialized successfully! Welcome to your doom...');
  }, 100);
}

// Event Listeners Setup - FIXED with multiple event types and better targeting
function setupEventListeners() {
  console.log('🕷️ Setting up event listeners...');
  
  // Theme toggle - multiple event types for better compatibility
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', handleThemeToggle);
    themeToggle.addEventListener('touchend', handleThemeToggle);
    console.log('✅ Theme toggle listener attached');
  }
  
  // Landing page - FIXED: Multiple event types and better targeting
  const enterNightmareBtn = document.getElementById('enterNightmare');
  if (enterNightmareBtn) {
    enterNightmareBtn.addEventListener('click', handleEnterNightmare);
    enterNightmareBtn.addEventListener('touchend', handleEnterNightmare);
    enterNightmareBtn.style.pointerEvents = 'auto'; // Ensure button is clickable
    enterNightmareBtn.style.cursor = 'pointer';
    console.log('✅ Enter Nightmare button listener attached');
  } else {
    console.error('❌ Enter Nightmare button not found!');
  }
  
  // Username screen - FIXED with better event handling
  const sealFateBtn = document.getElementById('sealFate');
  const backToLandingBtn = document.getElementById('backToLanding');
  const usernameInput = document.getElementById('usernameInput');
  
  if (sealFateBtn) {
    sealFateBtn.addEventListener('click', handleSealFate);
    sealFateBtn.addEventListener('touchend', handleSealFate);
    sealFateBtn.style.pointerEvents = 'auto';
    sealFateBtn.style.cursor = 'pointer';
    console.log('✅ Seal Fate button listener attached');
  }
  
  if (backToLandingBtn) {
    backToLandingBtn.addEventListener('click', handleBackToLanding);
    backToLandingBtn.addEventListener('touchend', handleBackToLanding);
    backToLandingBtn.style.pointerEvents = 'auto';
    backToLandingBtn.style.cursor = 'pointer';
    console.log('✅ Back to Landing button listener attached');
  }
  
  if (usernameInput) {
    usernameInput.addEventListener('input', validateUsername);
    usernameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSealFate();
      }
    });
    console.log('✅ Username input listeners attached');
  }
  
  // Dashboard
  const enterChaosBtn = document.getElementById('enterChaos');
  if (enterChaosBtn) {
    enterChaosBtn.addEventListener('click', handleEnterChaos);
    enterChaosBtn.addEventListener('touchend', handleEnterChaos);
    enterChaosBtn.style.pointerEvents = 'auto';
    enterChaosBtn.style.cursor = 'pointer';
    console.log('✅ Enter Chaos button listener attached');
  }
  
  // Game options
  const option1 = document.getElementById('option1');
  const option2 = document.getElementById('option2');
  const option3 = document.getElementById('option3');
  const nextRound = document.getElementById('nextRound');
  
  if (option1) {
    option1.addEventListener('click', () => selectAnswer(0));
    option1.addEventListener('touchend', () => selectAnswer(0));
    option1.style.pointerEvents = 'auto';
    option1.style.cursor = 'pointer';
  }
  if (option2) {
    option2.addEventListener('click', () => selectAnswer(1));
    option2.addEventListener('touchend', () => selectAnswer(1));
    option2.style.pointerEvents = 'auto';
    option2.style.cursor = 'pointer';
  }
  if (option3) {
    option3.addEventListener('click', () => selectAnswer(2));
    option3.addEventListener('touchend', () => selectAnswer(2));
    option3.style.pointerEvents = 'auto';
    option3.style.cursor = 'pointer';
  }
  if (nextRound) {
    nextRound.addEventListener('click', proceedToNextRound);
    nextRound.addEventListener('touchend', proceedToNextRound);
    nextRound.style.pointerEvents = 'auto';
    nextRound.style.cursor = 'pointer';
  }
  
  // Results screen
  const playAgain = document.getElementById('playAgain');
  const shareTwitter = document.getElementById('shareTwitter');
  
  if (playAgain) {
    playAgain.addEventListener('click', handlePlayAgain);
    playAgain.addEventListener('touchend', handlePlayAgain);
    playAgain.style.pointerEvents = 'auto';
    playAgain.style.cursor = 'pointer';
  }
  
  if (shareTwitter) {
    shareTwitter.addEventListener('click', shareOnTwitter);
    shareTwitter.addEventListener('touchend', shareOnTwitter);
    shareTwitter.style.pointerEvents = 'auto';
    shareTwitter.style.cursor = 'pointer';
  }
  
  console.log('✅ All event listeners setup complete');
}

// Event Handlers - FIXED to prevent default and handle properly
function handleThemeToggle(e) {
  e.preventDefault();
  e.stopPropagation();
  toggleTorchMode();
}

function handleEnterNightmare(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log('🌀 Enter Nightmare clicked!');
  playHorrorSound('transition');
  showScreen('username');
}

function handleSealFate(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  validateAndProceed();
}

function handleBackToLanding(e) {
  e.preventDefault();
  e.stopPropagation();
  playHorrorSound('transition');
  showScreen('landing');
}

function handleEnterChaos(e) {
  e.preventDefault();
  e.stopPropagation();
  startCountdown();
}

function handlePlayAgain(e) {
  e.preventDefault();
  e.stopPropagation();
  resetGame();
  showScreen('landing');
}

// Screen Management
function showScreen(screenName) {
  console.log(`🌀 Transitioning to screen: ${screenName}`);
  playHorrorSound('transition');
  
  // Hide all screens
  const allScreens = ['landingPage', 'usernameScreen', 'dashboardScreen', 'gameScreen', 'resultsScreen'];
  allScreens.forEach(screenId => {
    const screen = document.getElementById(screenId);
    if (screen) {
      screen.classList.remove('active');
    }
  });
  
  // Show target screen
  let targetScreenId = '';
  switch(screenName) {
    case 'landing': targetScreenId = 'landingPage'; break;
    case 'username': targetScreenId = 'usernameScreen'; break;
    case 'dashboard': targetScreenId = 'dashboardScreen'; break;
    case 'game': targetScreenId = 'gameScreen'; break;
    case 'results': targetScreenId = 'resultsScreen'; break;
  }
  
  const targetScreen = document.getElementById(targetScreenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
    gameState.currentScreen = screenName;
    console.log(`✅ Screen changed to: ${screenName}`);
  } else {
    console.error(`❌ Screen not found: ${targetScreenId}`);
  }
  
  // Trigger screen-specific effects
  triggerScreenEffects(screenName);
}

function triggerScreenEffects(screenName) {
  if (screenName === 'dashboard') {
    updateDashboard();
  } else if (screenName === 'game') {
    startGame();
  } else if (screenName === 'results') {
    displayResults();
  }
}

// Theme Toggle - Torch System
function toggleTorchMode() {
  gameState.isLightMode = !gameState.isLightMode;
  const newTheme = gameState.isLightMode ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-color-scheme', newTheme);
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.textContent = gameState.isLightMode ? '☀️' : '🌙';
  }
  
  console.log(`🔥 Torch system ${gameState.isLightMode ? 'ACTIVATED' : 'DEACTIVATED'}`);
  playHorrorSound('transition');
}

// Interactive Floating Characters System
function initializeFloatingCharacters() {
  const characters = document.querySelectorAll('.interactive-char');
  
  characters.forEach((char, index) => {
    // Random initial positioning
    char.style.top = Math.random() * 70 + 15 + '%';
    char.style.left = Math.random() * 70 + 15 + '%';
    
    // Add click event for bounce and jiggle
    char.addEventListener('click', (e) => handleCharacterInteraction(e, char));
    char.addEventListener('touchstart', (e) => {
      e.preventDefault();
      handleCharacterInteraction(e, char);
    });
    
    // Ensure they're clickable
    char.style.pointerEvents = 'auto';
    char.style.cursor = 'pointer';
    
    // Continuous floating movement
    setInterval(() => {
      moveCharacterRandomly(char);
    }, (5000 + Math.random() * 5000));
  });
  
  console.log('👹 Interactive floating characters initialized');
}

function handleCharacterInteraction(e, character) {
  e.preventDefault();
  e.stopPropagation();
  playHorrorSound('poke');
  
  // Add bouncing class
  character.classList.add('bouncing');
  
  // Random bounce direction
  const bounceX = (Math.random() - 0.5) * 200;
  const bounceY = (Math.random() - 0.5) * 200;
  
  // Calculate new position ensuring it stays in bounds
  const rect = character.getBoundingClientRect();
  const maxX = window.innerWidth - 60;
  const maxY = window.innerHeight - 60;
  
  let newX = Math.max(30, Math.min(maxX, rect.left + bounceX));
  let newY = Math.max(30, Math.min(maxY, rect.top + bounceY));
  
  // Convert to percentages
  newX = (newX / window.innerWidth) * 100;
  newY = (newY / window.innerHeight) * 100;
  
  character.style.left = newX + '%';
  character.style.top = newY + '%';
  
  // Add jiggle effect after bounce
  setTimeout(() => {
    character.classList.remove('bouncing');
    character.classList.add('jiggling');
    playHorrorSound('bounce');
    
    setTimeout(() => {
      character.classList.remove('jiggling');
    }, 500);
  }, 1000);
  
  console.log(`💥 Character ${character.dataset.char} was poked! Bouncing away...`);
}

function moveCharacterRandomly(character) {
  const newTop = Math.random() * 70 + 15 + '%';
  const newLeft = Math.random() * 70 + 15 + '%';
  
  character.style.transition = `all ${3 + Math.random() * 4}s ease-in-out`;
  character.style.top = newTop;
  character.style.left = newLeft;
}

// Torch System for Light Mode
function initializeTorchSystem() {
  const cursorTorch = document.getElementById('cursorTorch');
  if (!cursorTorch) return;
  
  // Cursor torch follows mouse
  document.addEventListener('mousemove', (e) => {
    if (gameState.isLightMode && cursorTorch) {
      cursorTorch.style.left = e.clientX + 'px';
      cursorTorch.style.top = e.clientY + 'px';
    }
  });
  
  console.log('🔥 Torch system initialized');
}

// Horror Effects
function startHorrorEffects() {
  // Blood drip effect
  const bloodDrip = document.getElementById('bloodDripOverlay');
  if (bloodDrip) {
    setInterval(() => {
      playHorrorSound('bloodDrip');
      bloodDrip.style.animationDelay = Math.random() * 5 + 's';
    }, 15000);
  }
  
  // Screen flicker intensity variation
  const flicker = document.getElementById('screenFlicker');
  if (flicker) {
    setInterval(() => {
      const intensity = 0.01 + Math.random() * 0.02;
      flicker.style.opacity = intensity;
    }, 100);
  }
  
  console.log('💀 Horror effects activated');
}

// Username Validation - FIXED logic
function validateUsername() {
  const usernameInput = document.getElementById('usernameInput');
  const warning = document.getElementById('validationWarning');
  
  if (!usernameInput || !warning) return false;
  
  const username = usernameInput.value.trim();
  
  // Clear previous styling
  warning.style.color = 'var(--horror-red)';
  
  if (!username) {
    warning.textContent = '';
    return false;
  } else if (username.length < 3) {
    warning.textContent = 'Your name is too weak for the darkness! (Need 3+ characters)';
    return false;
  } else if (username.length > 15) {
    warning.textContent = 'Your name is too powerful! (Maximum 15 characters)';
    return false;
  } else if (!/^[a-zA-Z0-9\s]+$/.test(username)) {
    warning.textContent = 'Only letters, numbers, and spaces are allowed in this realm!';
    return false;
  } else {
    warning.textContent = '✓ The spirits accept this name... proceed with caution.';
    warning.style.color = 'var(--horror-green)';
    console.log(`✅ Username "${username}" is valid`);
    return true;
  }
}

function validateAndProceed() {
  console.log('🔍 Validating username and proceeding...');
  
  if (validateUsername()) {
    const usernameInput = document.getElementById('usernameInput');
    gameState.username = usernameInput.value.trim();
    console.log(`✅ Username accepted: ${gameState.username}`);
    playHorrorSound('transition');
    showScreen('dashboard');
  } else {
    const usernameInput = document.getElementById('usernameInput');
    const currentValue = usernameInput ? usernameInput.value.trim() : '';
    console.log(`❌ Username "${currentValue}" rejected`);
    playHorrorSound('wrong');
    showDramaticMessage("You cannot enter the chaos without a proper name, mortal!", 3000);
    if (usernameInput) usernameInput.focus();
  }
}

// Dashboard Functions
function updateDashboard() {
  const welcomeDoom = document.getElementById('welcomeDoom');
  if (welcomeDoom && gameState.username) {
    welcomeDoom.textContent = `Welcome to your doom, ${gameState.username.toUpperCase()}`;
  }
}

function startCountdown() {
  let count = 3;
  const timer = document.getElementById('countdownTimer');
  const button = document.getElementById('enterChaos');
  
  if (!timer || !button) return;
  
  button.disabled = true;
  button.textContent = 'PREPARING YOUR DOOM...';
  
  const countdown = setInterval(() => {
    timer.textContent = count;
    timer.style.transform = 'scale(1.5)';
    playHorrorSound('theme');
    
    setTimeout(() => {
      timer.style.transform = 'scale(1)';
    }, 500);
    
    count--;
    
    if (count < 0) {
      clearInterval(countdown);
      timer.textContent = 'DOOM!';
      timer.style.color = 'var(--horror-red)';
      playHorrorSound('scream');
      
      setTimeout(() => {
        showScreen('game');
      }, 1000);
    }
  }, 1000);
}

// Game Logic
function startGame() {
  gameState.currentRound = 0;
  gameState.score = 0;
  gameState.gameStarted = true;
  
  const currentUser = document.getElementById('currentUser');
  if (currentUser) {
    currentUser.textContent = gameState.username || 'DOOMED SOUL';
  }
  
  loadRound();
  console.log('🎮 Game started! May your soul find peace...');
}

function loadRound() {
  const round = gameData.gameRounds[gameState.currentRound];
  
  // Update UI elements
  const currentRound = document.getElementById('currentRound');
  const gameClue = document.getElementById('gameClue');
  
  if (currentRound) currentRound.textContent = gameState.currentRound + 1;
  if (gameClue) gameClue.textContent = round.clue;
  
  // Set options
  const option1 = document.getElementById('option1');
  const option2 = document.getElementById('option2');
  const option3 = document.getElementById('option3');
  
  if (option1) {
    option1.textContent = round.options[0];
    option1.disabled = false;
    option1.classList.remove('correct', 'wrong');
  }
  
  if (option2) {
    option2.textContent = round.options[1];
    option2.disabled = false;
    option2.classList.remove('correct', 'wrong');
  }
  
  if (option3) {
    option3.textContent = round.options[2];
    option3.disabled = false;
    option3.classList.remove('correct', 'wrong');
  }
  
  // Update mystery character
  const mysteryChars = ['❓', '🎭', '👻', '🔮', '🌀', '⚰️', '🕷️', '🦇'];
  const hiddenCharacter = document.getElementById('hiddenCharacter');
  if (hiddenCharacter) {
    hiddenCharacter.textContent = mysteryChars[gameState.currentRound % mysteryChars.length];
  }
  
  // Hide feedback
  const answerFeedback = document.getElementById('answerFeedback');
  if (answerFeedback) {
    answerFeedback.classList.add('hidden');
  }
  
  console.log(`👹 Round ${gameState.currentRound + 1} loaded: ${round.clue.substring(0, 50)}...`);
}

function selectAnswer(selectedIndex) {
  const round = gameData.gameRounds[gameState.currentRound];
  const isCorrect = selectedIndex === round.correct;
  
  // Disable all buttons
  const option1 = document.getElementById('option1');
  const option2 = document.getElementById('option2');
  const option3 = document.getElementById('option3');
  
  if (option1) option1.disabled = true;
  if (option2) option2.disabled = true;
  if (option3) option3.disabled = true;
  
  // Visual feedback
  const buttons = [option1, option2, option3];
  const selectedButton = buttons[selectedIndex];
  const correctButton = buttons[round.correct];
  
  if (isCorrect) {
    if (selectedButton) selectedButton.classList.add('correct');
    gameState.score++;
    playHorrorSound('correct');
    console.log('✅ THE SPIRITS APPROVE!');
  } else {
    if (selectedButton) selectedButton.classList.add('wrong');
    if (correctButton) correctButton.classList.add('correct');
    playHorrorSound('wrong');
    playHorrorSound('scream');
    
    // Screen shake effect
    document.body.classList.add('screen-shake');
    setTimeout(() => document.body.classList.remove('screen-shake'), 500);
    
    console.log('❌ YOUR SOUL HAS BEEN DEVOURED!');
  }
  
  // Show feedback after delay
  setTimeout(() => showAnswerFeedback(isCorrect, round), 1000);
}

function showAnswerFeedback(isCorrect, round) {
  const answerFeedback = document.getElementById('answerFeedback');
  const feedbackText = document.getElementById('feedbackText');
  const characterReveal = document.getElementById('characterReveal');
  const nextRound = document.getElementById('nextRound');
  
  if (!answerFeedback) return;
  
  answerFeedback.classList.remove('hidden');
  
  if (feedbackText) {
    if (isCorrect) {
      const message = gameData.winningMessages[Math.floor(Math.random() * gameData.winningMessages.length)];
      feedbackText.textContent = message;
      feedbackText.className = 'feedback-text correct';
    } else {
      feedbackText.textContent = "YOUR SOUL HAS BEEN DEVOURED 💀🔥";
      feedbackText.className = 'feedback-text wrong';
    }
  }
  
  if (characterReveal) {
    characterReveal.textContent = `Character Revealed: ${round.character}`;
  }
  
  // Update next button text
  if (nextRound) {
    if (gameState.currentRound >= 4) {
      nextRound.textContent = "FACE YOUR JUDGMENT";
    } else {
      nextRound.textContent = "DESCEND DEEPER";
    }
  }
}

function proceedToNextRound() {
  gameState.currentRound++;
  
  if (gameState.currentRound >= 5) {
    showScreen('results');
  } else {
    loadRound();
  }
  
  playHorrorSound('transition');
}

// Results Screen
function displayResults() {
  const score = gameState.score;
  const scoreData = gameData.scoreResponses[score.toString()];
  
  const finalScore = document.getElementById('finalScore');
  const bigLine = document.getElementById('bigLine');
  const randomPhrase = document.getElementById('randomPhrase');
  
  if (finalScore) finalScore.textContent = score;
  if (bigLine) bigLine.textContent = scoreData.bigLine;
  
  // Random phrase
  const randomPhraseText = scoreData.phrases[Math.floor(Math.random() * scoreData.phrases.length)];
  if (randomPhrase) randomPhrase.textContent = randomPhraseText;
  
  // Dramatic entrance effect
  setTimeout(() => {
    if (finalScore) {
      finalScore.style.animation = 'scoreGlow 2s ease-in-out infinite';
    }
  }, 500);
  
  console.log(`🏁 Game complete! Final score: ${score}/5 - ${scoreData.bigLine}`);
}

// Social Sharing
function shareOnTwitter() {
  const score = gameState.score;
  const scoreData = gameData.scoreResponses[score.toString()];
  
  const tweetText = `Just survived the BRAINROT TRIALS - Italian Horror Edition! 💀🍝\n\nMy tormented soul achieved: ${score}/5\nVerdict: "${scoreData.bigLine}"\n\nDare to face your own nightmare? Enter if you can handle the chaos...\n\n#BrainrotTrials #ItalianHorror #MemeGame`;
  
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(twitterUrl, '_blank');
  
  playHorrorSound('scream');
  console.log('🐦 Sharing torment on Twitter...');
}

// Game Reset
function resetGame() {
  gameState = {
    currentScreen: 'landing',
    currentRound: 0,
    score: 0,
    username: gameState.username, // Keep username
    isLightMode: gameState.isLightMode, // Keep theme
    gameStarted: false
  };
  
  // Reset countdown timer
  const countdownTimer = document.getElementById('countdownTimer');
  const enterChaos = document.getElementById('enterChaos');
  
  if (countdownTimer) {
    countdownTimer.textContent = '3';
    countdownTimer.style.color = 'var(--horror-green)';
  }
  
  if (enterChaos) {
    enterChaos.disabled = false;
    enterChaos.textContent = 'ENTER THE CHAOS';
  }
  
  console.log('🔄 Game reset - Ready for another round of torment!');
  playHorrorSound('transition');
}

// Dramatic Message System
function showDramaticMessage(message, duration = 3000) {
  const messageElement = document.createElement('div');
  messageElement.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--horror-gray);
    color: var(--horror-red);
    padding: 30px 50px;
    border: 3px solid var(--horror-green);
    border-radius: 15px;
    font-family: var(--font-horror-body);
    font-size: 1.5rem;
    font-weight: bold;
    z-index: 9999;
    text-align: center;
    box-shadow: 0 0 50px rgba(139, 0, 0, 0.8);
    animation: feedbackPulse 1s ease;
    max-width: 80vw;
  `;
  messageElement.textContent = message;
  
  document.body.appendChild(messageElement);
  playHorrorSound('wrong');
  
  setTimeout(() => {
    if (messageElement.parentNode) {
      messageElement.parentNode.removeChild(messageElement);
    }
  }, duration);
}

// Enhanced Interactions - FIXED to ensure proper click handling
function addEnhancedButtonEffects() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    // Ensure buttons are properly clickable
    button.style.pointerEvents = 'auto';
    button.style.cursor = 'pointer';
    
    button.addEventListener('mouseenter', () => {
      if (!button.disabled) {
        playHorrorSound('theme');
      }
    });
    
    button.addEventListener('click', () => {
      if (!button.disabled) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
          button.style.transform = '';
        }, 100);
      }
    });
  });
}

// Konami Code Easter Egg
let konamiSequence = [];
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
  konamiSequence.push(e.code);
  
  if (konamiSequence.length > konamiCode.length) {
    konamiSequence.shift();
  }
  
  if (JSON.stringify(konamiSequence) === JSON.stringify(konamiCode)) {
    showDramaticMessage("🍝 PASTA POWER ACTIVATED! The spirits reveal their secrets! 🍝", 5000);
    playHorrorSound('scream');
    
    // Reveal correct answer if in game
    if (gameState.currentScreen === 'game' && gameState.gameStarted) {
      const currentRound = gameData.gameRounds[gameState.currentRound];
      const buttons = [
        document.getElementById('option1'),
        document.getElementById('option2'),
        document.getElementById('option3')
      ];
      const correctButton = buttons[currentRound.correct];
      
      if (correctButton) {
        correctButton.style.boxShadow = '0 0 30px var(--horror-green)';
        correctButton.style.border = '3px solid var(--horror-green)';
        
        setTimeout(() => {
          correctButton.style.boxShadow = '';
          correctButton.style.border = '2px solid var(--horror-green)';
        }, 8000);
      }
    }
    
    konamiSequence = [];
    console.log('🎮 KONAMI CODE ACTIVATED! The ancient pasta spirits have blessed you!');
  }
});

// Initialize when DOM is ready - MULTIPLE ATTEMPTS for reliability
document.addEventListener('DOMContentLoaded', () => {
  console.log('🌙 DOM loaded - Awakening the horror...');
  init();
  setTimeout(() => {
    addEnhancedButtonEffects();
  }, 200);
});

// Backup initialization
window.addEventListener('load', () => {
  console.log('🔄 Window loaded - Ensuring all elements are ready');
  setTimeout(() => {
    init();
    addEnhancedButtonEffects();
  }, 300);
});

// Triple backup - ensure initialization happens
setTimeout(() => {
  if (!document.getElementById('enterNightmare')?.onclick) {
    console.log('🔄 Final backup initialization triggered');
    init();
    addEnhancedButtonEffects();
  }
}, 1000);

// Export for debugging
window.BrainrotHorror = {
  gameState,
  gameData,
  showScreen,
  toggleTorchMode,
  resetGame,
  playHorrorSound,
  handleEnterNightmare,
  validateAndProceed
};

console.log('💀 BRAINROT TRIALS - Italian Horror Edition loaded! Your nightmare begins now...');
playHorrorSound('theme');