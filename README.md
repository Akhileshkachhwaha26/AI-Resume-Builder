# 🤖 AI Resume & Portfolio Builder

<div align="center">

![AI Resume Builder Banner](https://img.shields.io/badge/AI%20Resume%20%26%20Portfolio%20Builder-6C63FF?style=for-the-badge&logo=react&logoColor=white)

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Claude AI](https://img.shields.io/badge/Claude-Sonnet%204.6-FF6B35?style=flat-square)](https://anthropic.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**Edunet Foundation — 6 Week AI Internship Project | 2026**

[🚀 Live Demo](#) · [📸 Screenshots](#-screenshots) · [🛠️ Installation](#️-getting-started) · [📖 How It Works](#-how-it-works)

</div>

---

## 📌 About The Project

Many students struggle to present their skills and projects in an attractive, professional format. Generic resume templates don't highlight individual strengths.

This project solves that problem — an **AI-powered web application** that automatically generates tailored **resumes**, **cover letters**, and **portfolio pages** based on student data, improving job and internship opportunities.

> 🎯 **Problem Statement given by Edunet Foundation:** *"A generative AI solution is needed that can automatically generate tailored resumes, cover letters, and portfolios based on student data, improving job and internship opportunities."*

---

## ✨ Features

| Feature | Description |
|---|---|
| 📄 **Smart Resume** | ATS-friendly, professionally formatted resume tailored to your target role |
| 📝 **Cover Letter** | Personalized cover letter mentioning specific skills and projects |
| 🌟 **Portfolio Page** | Full deployable portfolio webpage with skills, projects & experience |
| 🎯 **Target Role Optimization** | AI tailors every word toward your specific job/internship |
| 💼 **Multi-step Form** | Clean guided 6-step form with progress indicator |
| 👁️ **Live Preview** | Instant preview of generated document inside the app |
| ⬇️ **Download HTML** | Download document → open in browser → Print → Save as PDF |
| 🎨 **3 Writing Tones** | Professional, Confident, or Creative |
| ➕ **Dynamic Sections** | Add multiple degrees, jobs, and projects |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Styling** | Pure CSS with inline styles (no external UI library) |
| **AI Engine** | Claude Sonnet 4.6 (Anthropic API) |
| **Deployment** | Vercel / GitHub Pages |
| **Version Control** | Git & GitHub |

---

## 📸 Screenshots

### 🏠 Home & Step Indicator
The app guides users through 6 clear steps with a visual progress indicator.

### 📝 Multi-step Form
Users fill in Personal Info → Education → Experience → Skills → Projects.

### ✨ AI Generation
Choose document type, add target role, click Generate — Claude AI does the rest.

### 📄 Live Preview & Download
Generated document previews instantly inside the app with download option.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher) — [Download here](https://nodejs.org)
- npm (comes with Node.js)
- Claude API Key — [Get free key here](https://console.anthropic.com)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Akhileshkachhwaha26/AI-Resume-Builder.git
cd AI-Resume-Builder
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up your API key**
```bash
# Create a .env file in the root folder
cp .env.example .env
```
Open the `.env` file and replace the placeholder:
```env
VITE_CLAUDE_API_KEY=your_actual_api_key_here
```

**4. Run the development server**
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. 🎉

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your `AI-Resume-Builder` repository
4. Under **Environment Variables**, add:
   - **Key:** `VITE_CLAUDE_API_KEY`
   - **Value:** your Claude API key
5. Click **Deploy** ✅

Your app will be live at `https://ai-resume-builder-xxx.vercel.app`

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 📁 Project Structure

```
AI-Resume-Builder/
├── public/
│   └── favicon.svg                  # App icon
├── src/
│   ├── components/
│   │   ├── steps/
│   │   │   ├── PersonalStep.jsx     # Step 1: Name, email, links
│   │   │   ├── EducationStep.jsx    # Step 2: Degrees, CGPA
│   │   │   ├── ExperienceStep.jsx   # Step 3: Jobs, internships
│   │   │   ├── SkillsStep.jsx       # Step 4: Technical & soft skills
│   │   │   ├── ProjectsStep.jsx     # Step 5: Projects with GitHub links
│   │   │   └── GenerateStep.jsx     # Step 6: AI generation + preview
│   │   ├── AddButton.jsx            # Reusable "Add more" button
│   │   ├── Card.jsx                 # White card wrapper
│   │   ├── Field.jsx                # Reusable form input field
│   │   ├── Header.jsx               # Top gradient header
│   │   ├── NavButtons.jsx           # Back / Next navigation
│   │   ├── RemoveButton.jsx         # Remove entry button
│   │   ├── SectionTitle.jsx         # Section heading component
│   │   └── StepIndicator.jsx        # Progress bar (Steps 1-6)
│   ├── App.jsx                      # Main app + step routing logic
│   ├── index.css                    # Global styles + animations
│   └── main.jsx                     # React entry point
├── .env.example                     # API key template (safe to commit)
├── .gitignore                       # Ignores .env, node_modules, dist
├── index.html                       # HTML entry point
├── package.json                     # Dependencies & scripts
├── README.md                        # This file
└── vite.config.js                   # Vite configuration
```

---

## 🔑 API Key Setup

This project uses the [Anthropic Claude API](https://docs.anthropic.com).

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up for a free account
3. Navigate to **API Keys** → **Create Key**
4. Copy the key (starts with `sk-ant-...`)
5. Paste it in your `.env` file as `VITE_CLAUDE_API_KEY`

> ⚠️ **Security:** Never share or commit your API key. The `.gitignore` already excludes `.env` from Git.

---

## 📖 How It Works

```
User fills 6-step form
        ↓
Data collected as JSON
        ↓
Smart prompt built with user data + target role
        ↓
Sent to Claude Sonnet 4.6 API
        ↓
Claude returns polished HTML document
        ↓
Displayed in live iframe preview
        ↓
User downloads HTML → prints as PDF
```

The AI uses different specialized prompts for each document type:
- **Resume prompt** → focuses on ATS keywords, action verbs, quantified achievements
- **Cover letter prompt** → focuses on storytelling, enthusiasm, role-specific language  
- **Portfolio prompt** → focuses on visual layout, skills showcase, project highlights

---

## 🎯 Problem Statement Coverage

| Requirement | ✅ Implemented |
|---|---|
| Generative AI solution | Claude Sonnet 4.6 API |
| Tailored resumes | AI reads all data + target role and customizes every line |
| Cover letter generation | Separate cover letter mode with role-specific content |
| Portfolio generation | Full HTML portfolio page ready to deploy |
| Based on student data | 6-step form collects education, skills, projects, experience |
| Improves job opportunities | Target role field steers AI toward that specific position |
| Professional format | ATS-friendly HTML output, downloadable as PDF |

---

## 👨‍💻 Author

**Akhilesh Kachhwaha**
- GitHub: [@Akhileshkachhwaha26](https://github.com/Akhileshkachhwaha26)
- Internship: Edunet Foundation AI Internship 2026

---

## 🙏 Acknowledgements

- [Edunet Foundation](https://edunetfoundation.org) — for the internship opportunity and problem statement
- [Anthropic](https://anthropic.com) — for the Claude AI API
- [React](https://react.dev) — frontend framework
- [Vite](https://vitejs.dev) — build tool

---

## 📄 License

MIT License — Free to use, modify, and distribute with attribution.

---

<div align="center">

**Built with ❤️ during Edunet Foundation 6-Week AI Internship 2026**

⭐ Star this repo if it helped you!

</div>
