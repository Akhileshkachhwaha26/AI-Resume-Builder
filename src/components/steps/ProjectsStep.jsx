import Field from '../Field.jsx'
import Card from '../Card.jsx'
import SectionTitle from '../SectionTitle.jsx'
import AddButton from '../AddButton.jsx'
import RemoveButton from '../RemoveButton.jsx'

export default function ProjectsStep({ data, setData }) {
  const proj = data.projects
  const update = (i, k, v) => setData({ ...data, projects: proj.map((p, idx) => idx === i ? { ...p, [k]: v } : p) })
  const add = () => setData({ ...data, projects: [...proj, { title: '', tech: '', description: '', link: '' }] })
  const remove = i => setData({ ...data, projects: proj.filter((_, idx) => idx !== i) })

  return (
    <>
      <div style={{ background: '#fdf4ff', border: '1px solid #e9d5ff', borderRadius: 10, padding: '12px 16px', marginBottom: '1.25rem' }}>
        <p style={{ fontSize: 13, color: '#7c3aed', fontWeight: 500 }}>
          🚀 Projects are the most important section for students! Add at least 2–3 projects including this internship project.
        </p>
      </div>
      {proj.map((p, i) => (
        <Card key={i}>
          <SectionTitle>🚀 Project {proj.length > 1 ? `#${i + 1}` : ''}</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0 1.25rem' }}>
            <Field label="Project Title" value={p.title} onChange={v => update(i, 'title', v)} placeholder="AI Resume & Portfolio Builder" required />
            <Field label="Tech Stack Used" value={p.tech} onChange={v => update(i, 'tech', v)} placeholder="React, Vite, Claude API, CSS" />
          </div>
          <Field label="GitHub / Live Demo Link" value={p.link} onChange={v => update(i, 'link', v)} placeholder="https://github.com/yourname/ai-resume-builder" />
          <Field
            label="Description — What it does, your role, impact, features"
            value={p.description}
            onChange={v => update(i, 'description', v)}
            placeholder="Built as part of Edunet Foundation's 6-week internship. An AI-powered web application that generates tailored resumes, cover letters, and portfolio bios using Claude AI. Features include multi-step form, real-time preview, HTML download, and cover letter generation. Helped 50+ students create professional resumes..."
            rows={4}
          />
          {proj.length > 1 && <RemoveButton onClick={() => remove(i)} />}
        </Card>
      ))}
      <AddButton onClick={add} label="Add another project" />
    </>
  )
}
