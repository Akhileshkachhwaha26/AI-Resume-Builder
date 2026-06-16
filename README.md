# AI Resume & Portfolio Builder
### Edunet Foundation — 6-Week Internship Project

An AI-powered web application that generates tailored resumes, cover letters, and portfolio pages using Claude AI (Anthropic).

---

## 🚀 Features

- **Smart Resume Generator** — ATS-friendly, professionally formatted
- **Cover Letter Writer** — Personalized to your target role and company
- **Portfolio Page Builder** — Full deployable portfolio website
- **Multi-step form** — Guided data entry with progress tracking
- **Live Preview** — See your document before downloading
- **Download as HTML** — Open in browser, Print → Save as PDF
- **3 Writing Tones** — Professional, Confident, or Creative
- **Target Role Optimization** — AI tailors content for your specific job

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite |
| Styling | Pure CSS (inline + index.css) |
| AI Engine | Claude Sonnet (Anthropic API) |
| Build Tool | Vite |
| Deployment | GitHub Pages / Vercel / Netlify |

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/ai-resume-builder.git
cd ai-resume-builder
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up your API key
```bash
cp .env.example .env
```
Open `.env` and replace `your_claude_api_key_here` with your actual key from [console.anthropic.com](https://console.anthropic.com).

### 4. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2 — Add to package.json scripts
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### Step 3 — Add homepage to package.json
```json
"homepage": "https://YOUR_USERNAME.github.io/ai-resume-builder"
```

### Step 4 — Deploy
```bash
npm run deploy
```

---

## 🌐 Deploy to Vercel (Recommended — Easier)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → Select your repo
3. Add Environment Variable: `VITE_CLAUDE_API_KEY` = your API key
4. Click Deploy ✅

---

## 📁 Project Structure

```
ai-resume-builder/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── steps/
│   │   │   ├── PersonalStep.jsx      # Step 1: Personal info form
│   │   │   ├── EducationStep.jsx     # Step 2: Education details
│   │   │   ├── ExperienceStep.jsx    # Step 3: Work experience
│   │   │   ├── SkillsStep.jsx        # Step 4: Skills & tools
│   │   │   ├── ProjectsStep.jsx      # Step 5: Projects showcase
│   │   │   └── GenerateStep.jsx      # Step 6: AI generation + preview
│   │   ├── AddButton.jsx
│   │   ├── Card.jsx
│   │   ├── Field.jsx
│   │   ├── Header.jsx
│   │   ├── NavButtons.jsx
│   │   ├── RemoveButton.jsx
│   │   ├── SectionTitle.jsx
│   │   └── StepIndicator.jsx
│   ├── App.jsx                       # Main app with routing between steps
│   ├── index.css                     # Global styles + animations
│   └── main.jsx                      # React entry point
├── .env.example                      # API key template
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🔑 API Key Setup

This project uses the [Anthropic Claude API](https://docs.anthropic.com).

1. Create a free account at [console.anthropic.com](https://console.anthropic.com)
2. Go to API Keys → Create Key
3. Copy the key and paste it into your `.env` file

**⚠️ Never commit your `.env` file to GitHub!** The `.gitignore` already excludes it.

---

## 👨‍💻 Author

**Your Name** — Edunet Foundation Internship 2026
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)

---

## 📄 License

MIT License — Free to use, modify, and distribute.

---

*Built with ❤️ during the Edunet Foundation 6-Week AI Internship Program*
