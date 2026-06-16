import Field from '../Field.jsx'
import Card from '../Card.jsx'
import SectionTitle from '../SectionTitle.jsx'
import AddButton from '../AddButton.jsx'
import RemoveButton from '../RemoveButton.jsx'

export default function ExperienceStep({ data, setData }) {
  const exp = data.experience
  const update = (i, k, v) => setData({ ...data, experience: exp.map((e, idx) => idx === i ? { ...e, [k]: v } : e) })
  const add = () => setData({ ...data, experience: [...exp, { role: '', company: '', duration: '', description: '' }] })
  const remove = i => setData({ ...data, experience: exp.filter((_, idx) => idx !== i) })

  return (
    <>
      <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 10, padding: '12px 16px', marginBottom: '1.25rem' }}>
        <p style={{ fontSize: 13, color: '#2563eb', fontWeight: 500 }}>
          💼 Include internships, part-time jobs, freelance work, campus jobs, research work, or even significant volunteer roles.
          <br />No experience yet? Skip this step — the AI will still build a great resume!
        </p>
      </div>
      {exp.map((e, i) => (
        <Card key={i}>
          <SectionTitle>💼 Experience {exp.length > 1 ? `#${i + 1}` : ''}</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0 1.25rem' }}>
            <Field label="Role / Job Title" value={e.role} onChange={v => update(i, 'role', v)} placeholder="Software Development Intern" />
            <Field label="Company / Organization" value={e.company} onChange={v => update(i, 'company', v)} placeholder="Edunet Foundation / TCS / Startup" />
            <Field label="Duration" value={e.duration} onChange={v => update(i, 'duration', v)} placeholder="June 2025 – Aug 2025 (6 weeks)" />
          </div>
          <Field
            label="Responsibilities, Achievements & Technologies Used"
            value={e.description}
            onChange={v => update(i, 'description', v)}
            placeholder="Built an AI-powered resume builder using React and Claude API. Reduced manual effort by 80%. Worked with REST APIs, GitHub, and Agile methodology..."
            rows={3}
          />
          {exp.length > 1 && <RemoveButton onClick={() => remove(i)} />}
        </Card>
      ))}
      <AddButton onClick={add} label="Add another experience" />
    </>
  )
}
