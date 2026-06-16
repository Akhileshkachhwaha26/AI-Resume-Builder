import { useState } from 'react'
import Header from './components/Header.jsx'
import StepIndicator from './components/StepIndicator.jsx'
import PersonalStep from './components/steps/PersonalStep.jsx'
import EducationStep from './components/steps/EducationStep.jsx'
import ExperienceStep from './components/steps/ExperienceStep.jsx'
import SkillsStep from './components/steps/SkillsStep.jsx'
import ProjectsStep from './components/steps/ProjectsStep.jsx'
import GenerateStep from './components/steps/GenerateStep.jsx'
import NavButtons from './components/NavButtons.jsx'

export const STEPS = ['Personal Info', 'Education', 'Experience', 'Skills', 'Projects', 'Generate ✨']

export const initialData = {
  personal: { name: '', email: '', phone: '', location: '', linkedin: '', github: '', website: '', summary: '' },
  education: [{ degree: '', institution: '', year: '', gpa: '', achievements: '' }],
  experience: [{ role: '', company: '', duration: '', description: '' }],
  skills: { technical: '', soft: '', tools: '', languages: '' },
  projects: [{ title: '', tech: '', description: '', link: '' }],
}

export default function App() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(initialData)

  const stepComponents = [
    <PersonalStep data={data} setData={setData} />,
    <EducationStep data={data} setData={setData} />,
    <ExperienceStep data={data} setData={setData} />,
    <SkillsStep data={data} setData={setData} />,
    <ProjectsStep data={data} setData={setData} />,
    <GenerateStep data={data} />,
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#F5F5FA' }}>
      <Header />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1rem 4rem' }}>
        <StepIndicator current={step} setStep={setStep} />
        <div className="fade-in" key={step}>
          {stepComponents[step]}
        </div>
        <NavButtons step={step} setStep={setStep} total={STEPS.length} />
      </main>
      <footer style={{ textAlign: 'center', padding: '1.5rem', color: '#888', fontSize: 13, borderTop: '1px solid #e8e8f0' }}>
        AI Resume & Portfolio Builder · Built with React · Edunet Foundation Internship 2026
      </footer>
    </div>
  )
}
