import Field from '../Field.jsx'
import Card from '../Card.jsx'
import SectionTitle from '../SectionTitle.jsx'
import AddButton from '../AddButton.jsx'
import RemoveButton from '../RemoveButton.jsx'

export default function EducationStep({ data, setData }) {
  const edu = data.education
  const update = (i, k, v) => setData({ ...data, education: edu.map((e, idx) => idx === i ? { ...e, [k]: v } : e) })
  const add = () => setData({ ...data, education: [...edu, { degree: '', institution: '', year: '', gpa: '', achievements: '' }] })
  const remove = i => setData({ ...data, education: edu.filter((_, idx) => idx !== i) })

  return (
    <>
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '12px 16px', marginBottom: '1.25rem' }}>
        <p style={{ fontSize: 13, color: '#16a34a', fontWeight: 500 }}>
          🎓 Add all your educational qualifications — B.Tech, 12th, 10th, certifications, bootcamps, online courses, etc.
        </p>
      </div>
      {edu.map((e, i) => (
        <Card key={i}>
          <SectionTitle>🎓 Education {edu.length > 1 ? `#${i + 1}` : ''}</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0 1.25rem' }}>
            <Field label="Degree / Course" value={e.degree} onChange={v => update(i, 'degree', v)} placeholder="B.Tech Computer Science & Engineering" required />
            <Field label="Institution / University" value={e.institution} onChange={v => update(i, 'institution', v)} placeholder="LNCT, Bhopal (RGPV University)" required />
            <Field label="Graduation Year" value={e.year} onChange={v => update(i, 'year', v)} placeholder="2026" />
            <Field label="CGPA / Percentage" value={e.gpa} onChange={v => update(i, 'gpa', v)} placeholder="8.5 CGPA / 85%" />
          </div>
          <Field
            label="Achievements, Activities & Awards"
            value={e.achievements}
            onChange={v => update(i, 'achievements', v)}
            placeholder="Dean's List, Hackathon Winner (Smart India Hackathon 2024), Technical Club President, NSS Volunteer..."
            rows={2}
          />
          {edu.length > 1 && <RemoveButton onClick={() => remove(i)} />}
        </Card>
      ))}
      <AddButton onClick={add} label="Add another degree / certification" />
    </>
  )
}
