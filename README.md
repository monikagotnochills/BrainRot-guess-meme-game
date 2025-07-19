# 🍝 BRAINROT TRIALS - Italian Meme Chaos Game

**BRAINROT STUDIOS presents: Brainrot Trials**

A chaotic, retro-themed Italian brainrot meme guessing game with dramatic scoring and Twitter integration.



## 🚀 Quick Start

1. **Download** all project files to your computer
2. **Open** `index.html` in any modern web browser
3. **Play** immediately - no server setup required!

## 📁 Project Structure

```
brainrot-trials/
├── index.html          # Main HTML structure
├── style.css           # Complete styling & animations
├── app.js             # Game logic & interactivity
└── README.md          # This file
```

## ✨ Features

### 🎯 Core Game Experience
- **5 Rounds** of Italian brainrot meme guessing
- **Hidden character previews** with dramatic reveals
- **Multiple choice questions** with chaotic clues
- **Dramatic win/lose animations** with screen effects
- **Score-based personality responses** (0-5 scale)

### 🎨 Visual Chaos
- **Animated floating characters** (🍝🧀🍕🍦🥟💀🤌🔥)
- **VHS overlay effects** with film grain
- **Screen shake** on dramatic moments
- **Glitch effects** on hover states
- **Retro arcade styling** with pixel fonts

### 🌓 Themes & Modes
- **Night/Light mode toggle** with full theme switching
- **Retro color palette**: Deep purples, dirty yellows, reds, neon greens
- **Responsive design** optimized for laptop screens

### 🔐 User System
- **Mock Google OAuth** login simulation
- **Guest mode** for instant play
- **Username & password** setup
- **Theme preference** persistence

### 📱 Social Integration
- **Twitter sharing** with pre-filled tweets
- **Score-based custom messages**
- **Direct redirect** to X (Twitter) sharing

## 🎭 Scoring System

Your performance gets you one of these dramatic responses:

| Score | Response |
|-------|----------|
| **0/5** | "BRO… did you play with your eyes closed?? 💀" |
| **1/5** | "Barely alive. Like a spaghetti noodle in a thunderstorm." |
| **2/5** | "Okay... you're walking, but the shoes are upside down." |
| **3/5** | "Mid-level brainrot. You're cursed, but inconsistently." |
| **4/5** | "Okay okay, the neurons are simmering." |
| **5/5** | "Certified Midbrain Meme Monk 🧘" |

Plus additional random roasts/praise based on your score!

## 🛠️ Technical Details

### Technologies Used
- **Vanilla HTML5** - Clean semantic structure
- **CSS3** - Advanced animations & theming
- **Vanilla JavaScript** - Game logic & state management
- **No dependencies** - Runs anywhere

### Browser Compatibility
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Performance
- **Lightweight** - Under 100KB total
- **Fast loading** - No external resources
- **Smooth animations** - 60fps CSS transforms
- **Responsive** - Works on all screen sizes

## 🎨 Customization

### Adding New Rounds
Edit the `gameRounds` array in `app.js`:
```javascript
{
  id: 6,
  clue: "Your custom character clue here",
  options: ["Option 1", "Option 2", "Option 3"],
  correct: 0, // Index of correct answer
  character: "🤌✨" // Emoji representation
}
```

### Modifying Themes
Update CSS custom properties in `style.css`:
```css
:root {
  --primary-color: #4A1A5C;   /* Deep purple */
  --accent-color: #D4B942;    /* Dirty yellow */
  --danger-color: #C41E3A;    /* Red */
  --success-color: #39FF14;   /* Neon green */
}
```

### Custom Scoring Messages
Modify the `scoreResponses` object in `app.js` to add your own personality!

## 🐛 Troubleshooting

### Game Won't Start
- Ensure JavaScript is enabled in your browser
- Check browser console for error messages
- Try refreshing the page

### Animations Lagging
- Close other browser tabs to free up resources
- Disable motion if you have reduced motion settings
- Try in a different browser

### Theme Toggle Not Working
- Clear browser local storage
- Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)

## 🚀 Deployment Options

### Static Hosting
- **GitHub Pages**: Upload files to a repository
- **Netlify**: Drag & drop the folder
- **Vercel**: Connect to your Git repository

### Local Development
1. Extract all files to a folder
2. Open `index.html` in browser
3. Make changes and refresh to see updates

## 🎪 Credits

**Created by BRAINROT STUDIOS**

- 🎮 **Game Design**: Italian Brainrot Community
- 🎨 **Visual Style**: Retro Arcade Chaos
- 🧠 **Brainrot Level**: Maximum Overdrive
- 💀 **Neurons Damaged**: Countless

## 📄 License

This project is free to use, modify, and distribute. 

**Go forth and spread the chaos!** 🍝💀🔥

---

*"Your neurons are not ready. Guess or get cooked."*

**- BRAINROT STUDIOS, 2025**