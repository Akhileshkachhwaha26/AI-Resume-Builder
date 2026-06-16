export default function Header() {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #6C63FF 0%, #4F46E5 60%, #3730A3 100%)',
      padding: '0',
      boxShadow: '0 4px 24px rgba(108,99,255,0.25)',
    }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '2.5rem 1rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 14,
            background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 24,
          }}>✦</div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: 2 }}>
              Edunet Foundation · Internship Project
            </p>
            <h1 style={{ fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: -0.5, lineHeight: 1 }}>
              AI Resume & Portfolio Builder
            </h1>
          </div>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 560, lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Generate tailored resumes, cover letters, and portfolios using generative AI — personalized to your skills, projects, and target role.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['📄 Smart Resume', '📝 Cover Letter', '🌟 Portfolio Bio', '⬇ Download HTML/PDF'].map(tag => (
            <span key={tag} style={{
              fontSize: 12, fontWeight: 500,
              background: 'rgba(255,255,255,0.18)',
              borderRadius: 20, padding: '5px 14px', color: '#fff',
              border: '1px solid rgba(255,255,255,0.25)',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </header>
  )
}
