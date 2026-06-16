import { useState, useRef } from 'react'
import Card from '../Card.jsx'
import SectionTitle from '../SectionTitle.jsx'
import Field from '../Field.jsx'

function buildResumeHTML(data, tone, jobTarget) {
  const { personal = {}, education = [], experience = [], skills = {}, projects = [] } = data

  const accentColor = tone === 'creative' ? '#10B981' : tone === 'confident' ? '#EF4444' : '#6C63FF'

  const skillsList = [
    ...(skills.technical || []),
    ...(skills.soft || []),
    ...(skills.languages || []),
    ...(skills.tools || []),
  ].filter(Boolean)

  const eduHTML = (Array.isArray(education) ? education : [education]).filter(e => e && e.institution).map(e => `
    <div style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <strong style="font-size:13pt;">${e.degree || ''} ${e.field ? 'in ' + e.field : ''}</strong>
        <span style="font-size:10pt;color:#666;">${e.startYear || ''} ${e.endYear ? '– ' + e.endYear : ''}</span>
      </div>
      <div style="color:#444;font-size:11pt;">${e.institution || ''}</div>
      ${e.gpa ? `<div style="font-size:10pt;color:#666;">GPA: ${e.gpa}</div>` : ''}
    </div>
  `).join('')

  const expHTML = (Array.isArray(experience) ? experience : [experience]).filter(e => e && e.company).map(e => `
    <div style="margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <strong style="font-size:13pt;">${e.position || e.title || ''}</strong>
        <span style="font-size:10pt;color:#666;">${e.startDate || ''} ${e.endDate ? '– ' + e.endDate : e.current ? '– Present' : ''}</span>
      </div>
      <div style="color:${accentColor};font-size:11pt;font-weight:600;margin-bottom:4px;">${e.company || ''}</div>
      ${e.description ? `<ul style="margin:4px 0 0 18px;padding:0;">${e.description.split('\n').filter(Boolean).map(l => `<li style="font-size:10.5pt;color:#444;margin-bottom:3px;">• ${l.replace(/^[-•]\s*/, '')}</li>`).join('')}</ul>` : ''}
    </div>
  `).join('')

  const projHTML = (Array.isArray(projects) ? projects : [projects]).filter(p => p && p.name).map(p => `
    <div style="margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <strong style="font-size:12pt;">${p.name || ''}</strong>
        ${p.techStack ? `<span style="font-size:9.5pt;color:#888;">${Array.isArray(p.techStack) ? p.techStack.join(', ') : p.techStack}</span>` : ''}
      </div>
      ${p.description ? `<p style="font-size:10.5pt;color:#444;margin:3px 0;">• ${p.description}</p>` : ''}
      ${p.link ? `<a href="${p.link}" style="font-size:10pt;color:${accentColor};">${p.link}</a>` : ''}
    </div>
  `).join('')

  const section = (title, content) => content.trim() ? `
    <div style="margin-bottom:18px;">
      <div style="border-bottom:2px solid ${accentColor};padding-bottom:3px;margin-bottom:10px;">
        <span style="font-size:13pt;font-weight:700;color:${accentColor};text-transform:uppercase;letter-spacing:1px;">${title}</span>
      </div>
      ${content}
    </div>
  ` : ''

  const summaryText = jobTarget
    ? `Results-driven professional seeking ${jobTarget}. Bringing hands-on experience in ${skillsList.slice(0, 3).join(', ')} with a ${tone} approach to problem-solving and delivering impactful solutions.`
    : `Motivated professional with expertise in ${skillsList.slice(0, 4).join(', ')}. Passionate about delivering quality results and continuous growth.`

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${personal.name || 'Resume'} - Resume</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;">
<div style="max-width:210mm;margin:0 auto;background:#fff;min-height:297mm;box-shadow:0 0 20px rgba(0,0,0,0.1);">
  <!-- Header -->
  <div style="background:${accentColor};padding:30px 35px 25px;color:#fff;">
    <h1 style="margin:0 0 6px;font-size:26pt;font-weight:700;letter-spacing:1px;">${personal.name || 'Your Name'}</h1>
    ${jobTarget ? `<p style="margin:0 0 10px;font-size:13pt;opacity:0.9;">${jobTarget}</p>` : ''}
    <div style="font-size:10pt;opacity:0.9;display:flex;flex-wrap:wrap;gap:16px;margin-top:8px;">
      ${personal.email ? `<span>✉ ${personal.email}</span>` : ''}
      ${personal.phone ? `<span>📞 ${personal.phone}</span>` : ''}
      ${personal.location ? `<span>📍 ${personal.location}</span>` : ''}
      ${personal.linkedin ? `<span>🔗 ${personal.linkedin}</span>` : ''}
      ${personal.github ? `<span>💻 ${personal.github}</span>` : ''}
      ${personal.portfolio ? `<span>🌐 ${personal.portfolio}</span>` : ''}
    </div>
  </div>

  <!-- Body -->
  <div style="padding:28px 35px;">
    ${section('Professional Summary', `<p style="font-size:11pt;color:#444;line-height:1.6;margin:0;">${summaryText}</p>`)}
    ${section('Education', eduHTML)}
    ${section('Experience', expHTML)}
    ${skillsList.length ? section('Skills', `<div style="display:flex;flex-wrap:wrap;gap:8px;">${skillsList.map(s => `<span style="background:${accentColor}18;color:${accentColor};padding:4px 12px;border-radius:20px;font-size:10pt;font-weight:500;">${s}</span>`).join('')}</div>`) : ''}
    ${section('Projects', projHTML)}
  </div>

  <div style="text-align:center;padding:12px;border-top:1px solid #eee;">
    <p style="font-size:8pt;color:#bbb;margin:0;">Generated with AI Resume Builder | Edunet Foundation Internship Project</p>
  </div>
</div>
</body>
</html>`
}

function buildCoverLetterHTML(data, tone, jobTarget) {
  const { personal = {}, skills = {}, experience = [], projects = [] } = data
  const accentColor = tone === 'creative' ? '#10B981' : tone === 'confident' ? '#EF4444' : '#6C63FF'
  const skillsList = [...(skills.technical || []), ...(skills.soft || [])].filter(Boolean)
  const latestExp = (Array.isArray(experience) ? experience : [experience]).filter(e => e && e.company)[0]
  const latestProj = (Array.isArray(projects) ? projects : [projects]).filter(p => p && p.name)[0]
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><title>Cover Letter - ${personal.name || ''}</title></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;">
<div style="max-width:210mm;margin:0 auto;background:#fff;min-height:297mm;box-shadow:0 0 20px rgba(0,0,0,0.1);">
  <div style="background:${accentColor};padding:24px 35px;color:#fff;">
    <h1 style="margin:0;font-size:22pt;">${personal.name || ''}</h1>
    <p style="margin:6px 0 0;font-size:10pt;opacity:0.9;">${[personal.email, personal.phone, personal.location].filter(Boolean).join(' | ')}</p>
  </div>
  <div style="padding:35px;">
    <p style="font-size:11pt;color:#555;">${today}</p>
    <p style="font-size:11pt;color:#555;margin-bottom:24px;">Hiring Manager${jobTarget ? '<br/>' + jobTarget : ''}</p>

    <p style="font-size:12pt;font-weight:600;color:#333;">Dear Hiring Manager,</p>

    <p style="font-size:11pt;line-height:1.8;color:#444;">
      I am writing to express my ${tone === 'confident' ? 'strong' : tone === 'creative' ? 'genuine' : 'sincere'} interest in the ${jobTarget || 'open position'} at your organization. With a solid foundation in ${skillsList.slice(0, 3).join(', ')}, I am excited about the opportunity to contribute meaningfully to your team.
    </p>

    ${latestExp ? `<p style="font-size:11pt;line-height:1.8;color:#444;">
      During my time at <strong>${latestExp.company}</strong> as <strong>${latestExp.position || latestExp.title || ''}</strong>, I developed hands-on expertise and demonstrated the ability to deliver results in a professional setting. This experience has equipped me with both technical skills and collaborative problem-solving abilities that I am eager to bring to your team.
    </p>` : ''}

    ${latestProj ? `<p style="font-size:11pt;line-height:1.8;color:#444;">
      One of my key projects, <strong>${latestProj.name}</strong>, showcases my ability to take initiative and build end-to-end solutions. ${latestProj.description || ''} This reflects my commitment to applying skills in real-world, impactful contexts.
    </p>` : ''}

    <p style="font-size:11pt;line-height:1.8;color:#444;">
      I am confident that my background, ${tone === 'confident' ? 'drive, and results-oriented mindset' : tone === 'creative' ? 'creativity, and passion for innovation' : 'dedication, and collaborative nature'} make me a strong fit for this role. I would welcome the opportunity to discuss how I can contribute to your team's success.
    </p>

    <p style="font-size:11pt;line-height:1.8;color:#444;">Thank you for your time and consideration.</p>

    <p style="font-size:11pt;color:#333;margin-top:24px;">Sincerely,<br/><strong style="color:${accentColor};font-size:13pt;">${personal.name || ''}</strong></p>
  </div>
  <div style="text-align:center;padding:12px;border-top:1px solid #eee;">
    <p style="font-size:8pt;color:#bbb;margin:0;">Generated with AI Resume Builder | Edunet Foundation Internship Project</p>
  </div>
</div>
</body></html>`
}

function buildPortfolioHTML(data, tone) {
  const { personal = {}, education = [], experience = [], skills = {}, projects = [] } = data
  const accentColor = tone === 'creative' ? '#10B981' : tone === 'confident' ? '#EF4444' : '#6C63FF'
  const skillsList = [...(skills.technical || []), ...(skills.soft || []), ...(skills.tools || [])].filter(Boolean)

  const projCards = (Array.isArray(projects) ? projects : [projects]).filter(p => p && p.name).map(p => `
    <div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 12px rgba(0,0,0,0.08);border-top:3px solid ${accentColor};">
      <h3 style="margin:0 0 8px;color:#222;font-size:14pt;">${p.name}</h3>
      ${p.techStack ? `<div style="margin-bottom:10px;display:flex;flex-wrap:wrap;gap:6px;">${(Array.isArray(p.techStack) ? p.techStack : [p.techStack]).map(t => `<span style="background:${accentColor}20;color:${accentColor};padding:2px 10px;border-radius:20px;font-size:9pt;">${t}</span>`).join('')}</div>` : ''}
      <p style="font-size:10.5pt;color:#555;line-height:1.6;margin:0 0 10px;">${p.description || ''}</p>
      ${p.link ? `<a href="${p.link}" style="color:${accentColor};font-size:10pt;">🔗 View Project</a>` : ''}
    </div>
  `).join('')

  const expTimeline = (Array.isArray(experience) ? experience : [experience]).filter(e => e && e.company).map(e => `
    <div style="display:flex;gap:16px;margin-bottom:20px;">
      <div style="width:12px;height:12px;border-radius:50%;background:${accentColor};margin-top:4px;flex-shrink:0;"></div>
      <div>
        <strong style="font-size:12pt;color:#222;">${e.position || e.title || ''}</strong> at <span style="color:${accentColor};font-weight:600;">${e.company}</span>
        <p style="font-size:10pt;color:#888;margin:2px 0;">${e.startDate || ''} – ${e.endDate || (e.current ? 'Present' : '')}</p>
        ${e.description ? `<p style="font-size:10.5pt;color:#555;margin:4px 0;">${e.description}</p>` : ''}
      </div>
    </div>
  `).join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${personal.name || 'Portfolio'}</title>
</head>
<body style="margin:0;font-family:Arial,sans-serif;background:#f8f9fa;color:#333;">
  <!-- Hero -->
  <div style="background:linear-gradient(135deg,${accentColor},${accentColor}cc);padding:60px 20px;text-align:center;color:#fff;">
    <div style="width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.2);margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:32pt;">${(personal.name || 'U')[0]}</div>
    <h1 style="margin:0 0 8px;font-size:28pt;">${personal.name || 'Your Name'}</h1>
    <p style="margin:0 0 16px;font-size:13pt;opacity:0.9;">${personal.title || personal.headline || 'Developer & Creator'}</p>
    <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:16px;font-size:10pt;">
      ${personal.email ? `<a href="mailto:${personal.email}" style="color:#fff;text-decoration:none;">✉ ${personal.email}</a>` : ''}
      ${personal.github ? `<a href="${personal.github}" style="color:#fff;text-decoration:none;">💻 GitHub</a>` : ''}
      ${personal.linkedin ? `<a href="${personal.linkedin}" style="color:#fff;text-decoration:none;">🔗 LinkedIn</a>` : ''}
      ${personal.portfolio ? `<a href="${personal.portfolio}" style="color:#fff;text-decoration:none;">🌐 Website</a>` : ''}
    </div>
  </div>

  <div style="max-width:900px;margin:0 auto;padding:40px 20px;">
    <!-- Skills -->
    ${skillsList.length ? `
    <div style="margin-bottom:40px;">
      <h2 style="font-size:18pt;color:${accentColor};border-bottom:2px solid ${accentColor};padding-bottom:8px;">Skills</h2>
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;">
        ${skillsList.map(s => `<span style="background:#fff;border:1.5px solid ${accentColor};color:${accentColor};padding:6px 16px;border-radius:20px;font-size:11pt;">${s}</span>`).join('')}
      </div>
    </div>` : ''}

    <!-- Projects -->
    ${projCards ? `
    <div style="margin-bottom:40px;">
      <h2 style="font-size:18pt;color:${accentColor};border-bottom:2px solid ${accentColor};padding-bottom:8px;">Projects</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:16px;">
        ${projCards}
      </div>
    </div>` : ''}

    <!-- Experience -->
    ${expTimeline ? `
    <div style="margin-bottom:40px;">
      <h2 style="font-size:18pt;color:${accentColor};border-bottom:2px solid ${accentColor};padding-bottom:8px;">Experience</h2>
      <div style="margin-top:16px;border-left:2px solid ${accentColor}20;padding-left:20px;">
        ${expTimeline}
      </div>
    </div>` : ''}

    <!-- Contact -->
    <div style="background:#fff;border-radius:12px;padding:30px;text-align:center;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <h2 style="color:${accentColor};margin:0 0 12px;">Get In Touch</h2>
      <p style="color:#666;margin:0 0 16px;">I'm open to opportunities and collaborations!</p>
      ${personal.email ? `<a href="mailto:${personal.email}" style="background:${accentColor};color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:600;">✉ ${personal.email}</a>` : ''}
    </div>
  </div>

  <footer style="text-align:center;padding:20px;color:#bbb;font-size:9pt;">
    Built with AI Resume Builder | Edunet Foundation Internship Project
  </footer>
</body>
</html>`
}

export default function GenerateStep({ data }) {
  const [docType, setDocType] = useState('resume')
  const [tone, setTone] = useState('professional')
  const [jobTarget, setJobTarget] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const [copyMsg, setCopyMsg] = useState('📋 Copy HTML')
  const iframeRef = useRef(null)

  const validate = () => {
    if (!data.personal?.name?.trim()) return 'Please enter your full name in Step 1.'
    if (!data.personal?.email?.trim()) return 'Please enter your email address in Step 1.'
    return null
  }

  const generate = () => {
    const err = validate()
    if (err) { setError(err); return }
    setError('')

    let html = ''
    if (docType === 'resume') html = buildResumeHTML(data, tone, jobTarget)
    else if (docType === 'cover_letter') html = buildCoverLetterHTML(data, tone, jobTarget)
    else html = buildPortfolioHTML(data, tone)

    setResult(html)
  }

  const download = () => {
    const blob = new Blob([result], { type: 'text/html' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    const name = data.personal?.name?.replace(/\s+/g, '_') || 'document'
    a.download = `${name}_${docType}.html`
    a.click()
  }

  const copyHtml = async () => {
    await navigator.clipboard.writeText(result)
    setCopyMsg('✅ Copied!')
    setTimeout(() => setCopyMsg('📋 Copy HTML'), 2000)
  }

  const printDoc = () => {
    if (iframeRef.current) iframeRef.current.contentWindow.print()
  }

  const docTypes = [
    { id: 'resume', label: 'Resume', icon: '📄', desc: 'ATS-friendly professional resume' },
    { id: 'cover_letter', label: 'Cover Letter', icon: '📝', desc: 'Personalized to your target role' },
    { id: 'portfolio', label: 'Portfolio', icon: '🌟', desc: 'Full portfolio webpage' },
  ]

  return (
    <>
      {/* Info Banner */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '14px 18px', marginBottom: '1.25rem' }}>
        <p style={{ fontSize: 13, color: '#15803d', fontWeight: 600, marginBottom: 4 }}>✅ Template-Based Generator (No API Required)</p>
        <p style={{ fontSize: 13, color: '#166534', lineHeight: 1.6, margin: 0 }}>
          Your resume, cover letter, or portfolio will be instantly generated using your entered data — no internet or API key needed!
        </p>
      </div>

      <Card>
        <SectionTitle>✨ Choose What to Generate</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: '1.5rem' }}>
          {docTypes.map(({ id, label, icon, desc }) => (
            <button
              key={id}
              onClick={() => setDocType(id)}
              style={{
                padding: '16px 12px', border: `2px solid ${docType === id ? '#6C63FF' : '#e0e0ec'}`,
                borderRadius: 12, background: docType === id ? '#f5f4ff' : '#fff',
                cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s',
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: docType === id ? '#6C63FF' : '#333', marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 11, color: '#999' }}>{desc}</div>
            </button>
          ))}
        </div>

        <Field
          label="Target Role / Job Title (optional but recommended)"
          value={jobTarget}
          onChange={setJobTarget}
          placeholder="e.g. Frontend Developer Intern at Google, ML Engineer at Amazon..."
        />

        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#555', marginBottom: 8 }}>Writing Tone</label>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { id: 'professional', label: '💼 Professional' },
              { id: 'confident', label: '🔥 Confident' },
              { id: 'creative', label: '🎨 Creative' },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTone(t.id)}
                style={{
                  padding: '8px 18px', borderRadius: 20,
                  border: `2px solid ${tone === t.id ? '#6C63FF' : '#e0e0ec'}`,
                  background: tone === t.id ? '#6C63FF' : '#fff',
                  color: tone === t.id ? '#fff' : '#666',
                  cursor: 'pointer', fontSize: 13, fontWeight: tone === t.id ? 600 : 400,
                }}
              >{t.label}</button>
            ))}
          </div>
        </div>

        {error && (
          <div style={{ background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: 8, padding: '10px 14px', marginBottom: 12 }}>
            <p style={{ color: '#dc2626', fontSize: 13 }}>❌ {error}</p>
          </div>
        )}

        <button
          onClick={generate}
          style={{
            width: '100%', padding: '15px', border: 'none', borderRadius: 12,
            background: 'linear-gradient(135deg, #6C63FF 0%, #4F46E5 100%)',
            color: '#fff', cursor: 'pointer', fontSize: 16, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            boxShadow: '0 4px 16px rgba(108,99,255,0.4)',
          }}
        >
          ✨ Generate {docType === 'cover_letter' ? 'Cover Letter' : docType === 'portfolio' ? 'Portfolio Page' : 'Resume'}
        </button>
      </Card>

      {result && (
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: '1rem' }}>
            <SectionTitle>📋 Your {docType === 'cover_letter' ? 'Cover Letter' : docType === 'portfolio' ? 'Portfolio' : 'Resume'}</SectionTitle>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button onClick={copyHtml} style={{ padding: '7px 16px', border: '1px solid #e0e0ec', borderRadius: 8, background: '#fff', color: '#555', cursor: 'pointer', fontSize: 13 }}>{copyMsg}</button>
              <button onClick={printDoc} style={{ padding: '7px 16px', border: '1px solid #e0e0ec', borderRadius: 8, background: '#fff', color: '#555', cursor: 'pointer', fontSize: 13 }}>🖨 Print / Save PDF</button>
              <button onClick={download} style={{ padding: '7px 16px', border: 'none', borderRadius: 8, background: 'linear-gradient(135deg,#6C63FF,#4F46E5)', color: '#fff', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>⬇ Download HTML</button>
            </div>
          </div>

          <div style={{ border: '1px solid #eaeaf4', borderRadius: 10, overflow: 'hidden', background: '#f9f9fc' }}>
            <div style={{ padding: '8px 14px', background: '#f0f0f8', borderBottom: '1px solid #eaeaf4', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              <span style={{ fontSize: 11, color: '#999', marginLeft: 8 }}>Live Preview</span>
            </div>
            <iframe ref={iframeRef} srcDoc={result} style={{ width: '100%', height: 700, border: 'none', display: 'block' }} title="Preview" />
          </div>

          <div style={{ marginTop: '1rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '12px 16px' }}>
            <p style={{ fontSize: 13, color: '#16a34a', fontWeight: 500 }}>
              ✅ Ready! Click "Print / Save PDF" → choose "Save as PDF" in the print dialog to save as PDF.
            </p>
          </div>
        </Card>
      )}

      <Card style={{ background: 'linear-gradient(135deg,#f5f4ff,#eff6ff)', border: '1px solid #e0e0f8' }}>
        <SectionTitle>💡 How to Use & Deploy</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { step: '1', title: 'Fill all steps', desc: 'Add your personal info, education, skills, and projects in the previous steps.' },
            { step: '2', title: 'Choose & Generate', desc: 'Select Resume, Cover Letter, or Portfolio, add your target role, click Generate.' },
            { step: '3', title: 'Preview & Edit', desc: 'Review the generated document in the live preview above.' },
            { step: '4', title: 'Download / Print', desc: 'Download as HTML or print to save as PDF.' },
          ].map(({ step, title, desc }) => (
            <div key={step} style={{ display: 'flex', gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#6C63FF', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{step}</div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#333', marginBottom: 2 }}>{title}</p>
                <p style={{ fontSize: 12, color: '#777', lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
