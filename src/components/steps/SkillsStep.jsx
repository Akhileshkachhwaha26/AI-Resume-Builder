import Field from '../Field.jsx'
import Card from '../Card.jsx'
import SectionTitle from '../SectionTitle.jsx'

export default function SkillsStep({ data, setData }) {
  const s = data.skills
  const up = (k, v) => setData({ ...data, skills: { ...s, [k]: v } })

  const suggestions = {
    technical: 'React, Node.js, Python, Machine Learning, REST APIs, SQL, HTML/CSS',
    tools: 'Git, GitHub, VS Code, Figma, Docker, Postman, Firebase, AWS',
    languages: 'Python, JavaScript, C++, Java, SQL',
    soft: 'Team Leadership, Problem Solving, Communication, Agile, Critical Thinking',
  }

  return (
    <Card>
      <SectionTitle>⚡ Skills & Expertise</SectionTitle>
      <p style={{ fontSize: 13, color: '#888', marginBottom: '1.25rem', lineHeight: 1.6 }}>
        List your skills separated by commas. The AI will automatically organize and highlight the most relevant ones for your target role.
      </p>
      <Field
        label="Technical Skills"
        value={s.technical}
        onChange={v => up('technical', v)}
        placeholder={suggestions.technical}
        rows={2}
      />
      <Field
        label="Tools & Platforms"
        value={s.tools}
        onChange={v => up('tools', v)}
        placeholder={suggestions.tools}
        rows={2}
      />
      <Field
        label="Programming Languages"
        value={s.languages}
        onChange={v => up('languages', v)}
        placeholder={suggestions.languages}
      />
      <Field
        label="Soft Skills"
        value={s.soft}
        onChange={v => up('soft', v)}
        placeholder={suggestions.soft}
        rows={2}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 8, marginTop: 8 }}>
        {[
          { label: 'Web Dev', skills: 'HTML, CSS, JavaScript, React, Node.js' },
          { label: 'Data Science', skills: 'Python, ML, TensorFlow, Pandas, NumPy' },
          { label: 'Android', skills: 'Java, Kotlin, Android Studio, Firebase' },
          { label: 'DevOps', skills: 'Docker, Kubernetes, CI/CD, Git, Linux' },
        ].map(({ label, skills }) => (
          <button key={label} onClick={() => up('technical', s.technical ? s.technical + ', ' + skills : skills)}
            style={{
              padding: '7px 12px', border: '1px solid #e0e0ec', borderRadius: 8,
              background: '#fafafa', color: '#666', fontSize: 12, fontWeight: 500,
              cursor: 'pointer', textAlign: 'left',
            }}>
            + {label} stack
          </button>
        ))}
      </div>
      <p style={{ fontSize: 11, color: '#aaa', marginTop: 8 }}>Click to quickly add a tech stack</p>
    </Card>
  )
}
