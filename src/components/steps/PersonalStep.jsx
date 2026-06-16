import Field from '../Field.jsx'
import Card from '../Card.jsx'
import SectionTitle from '../SectionTitle.jsx'

export default function PersonalStep({ data, setData }) {
  const p = data.personal
  const up = (k, v) => setData({ ...data, personal: { ...p, [k]: v } })

  return (
    <Card>
      <SectionTitle>👤 Personal Information</SectionTitle>
      <p style={{ fontSize: 13, color: '#888', marginBottom: '1.25rem', lineHeight: 1.6 }}>
        This is the foundation of your resume. Fill in as much as you can — the AI will use this to personalize your documents.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0 1.25rem' }}>
        <Field label="Full Name" value={p.name} onChange={v => up('name', v)} placeholder="Rahul Sharma" required />
        <Field label="Email Address" value={p.email} onChange={v => up('email', v)} placeholder="rahul@example.com" type="email" required />
        <Field label="Phone Number" value={p.phone} onChange={v => up('phone', v)} placeholder="+91 9876543210" />
        <Field label="Location" value={p.location} onChange={v => up('location', v)} placeholder="Bhopal, Madhya Pradesh" />
        <Field label="LinkedIn Profile URL" value={p.linkedin} onChange={v => up('linkedin', v)} placeholder="linkedin.com/in/rahulsharma" />
        <Field label="GitHub Profile URL" value={p.github} onChange={v => up('github', v)} placeholder="github.com/rahulsharma" />
        <Field label="Portfolio / Website (optional)" value={p.website} onChange={v => up('website', v)} placeholder="https://rahulsharma.dev" />
      </div>
      <Field
        label="Professional Summary (optional — AI will improve this)"
        value={p.summary}
        onChange={v => up('summary', v)}
        placeholder="Passionate Computer Science student with a focus on AI/ML and full-stack development. Seeking internship opportunities to apply my skills..."
        rows={3}
      />
      <div style={{ background: '#f5f4ff', borderRadius: 10, padding: '12px 16px', marginTop: 8 }}>
        <p style={{ fontSize: 12, color: '#6C63FF', fontWeight: 500 }}>
          💡 Tip: Even if you leave the summary blank, the AI will generate a strong one based on your skills and experience!
        </p>
      </div>
    </Card>
  )
}
