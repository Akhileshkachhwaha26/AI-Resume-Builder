🚀 AI Resume & Portfolio Builder
Edunet Foundation — 6-Week Internship Project

A web application that instantly generates tailored resumes, cover letters, and portfolio pages — no API key required, works completely offline in the browser!
---
✨ Features
📄 Smart Resume Generator — ATS-friendly, professionally formatted
📝 Cover Letter Writer — Personalized to your target role and company
🌟 Portfolio Page Builder — Full deployable portfolio website
🧭 Multi-step Form — Guided data entry with progress tracking
👁️ Live Preview — See your document instantly before downloading
⬇️ Download as HTML — Open in browser, Print → Save as PDF
🎨 3 Writing Tones — Professional, Confident, or Creative
🎯 Target Role Optimization — Tailors content for your specific job
⚡ 100% Offline — No API, no backend, no costs, no limits
---
🛠️ Tech Stack
Layer	Technology
Frontend	React 18, Vite
Styling	Pure CSS (inline + index.css)
Generation	Template-based HTML Generator (No API)
Build Tool	Vite
Deployment	Vercel / Netlify / GitHub Pages
---
📦 Getting Started
1. Clone the repository
```bash
git clone https://github.com/Akhileshkachhwaha26/ai-resume-builder.git
cd ai-resume-builder
```
2. Install dependencies
```bash
npm install
```
3. Run locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.
> ✅ No API key or `.env` file needed!
---
🌐 Deploy to Vercel (Recommended)
Push your code to GitHub
Go to vercel.com → Sign up with GitHub
Click "Add New Project" → Import `ai-resume-builder`
Settings:
Framework: Vite
Build command: `npm run build`
Output directory: `dist`
Click "Deploy" ✅
---
🌐 Deploy to Netlify
Go to netlify.com → Sign up with GitHub
Click "Add new site" → "Import an existing project"
Select `ai-resume-builder` repository
Settings:
Build command: `npm run build`
Publish directory: `dist`
Click "Deploy site" ✅
---
📁 Project Structure
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
│   │   │   └── GenerateStep.jsx      # Step 6: Generation + preview
│   │   ├── AddButton.jsx
│   │   ├── Card.jsx
│   │   ├── Field.jsx
│   │   ├── Header.jsx
│   │   ├── NavButtons.jsx
│   │   ├── RemoveButton.jsx
│   │   ├── SectionTitle.jsx
│   │   └── StepIndicator.jsx
│   ├── App.jsx                       # Main app with step routing
│   ├── index.css                     # Global styles + animations
│   └── main.jsx                      # React entry point
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```
---
💡 How It Works
Fill in your details across 5 steps — Personal Info, Education, Experience, Skills, Projects
Choose what to generate — Resume, Cover Letter, or Portfolio
Select a tone — Professional, Confident, or Creative
Click Generate — Your document is instantly created from your data
Download or Print — Save as HTML or print to PDF
---
👨‍💻 Author
Akhilesh Kachhwaha — Edunet Foundation Internship 2026
GitHub: @Akhileshkachhwaha26
---
📄 License
MIT License — Free to use, modify, and distribute.
---
> Built with ❤️ during the Edunet Foundation 6-Week AI Internship Program