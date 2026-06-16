import { STEPS } from '../App.jsx'

export default function StepIndicator({ current, setStep }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      gap: 0, margin: '2rem 0 2.5rem', overflowX: 'auto', paddingBottom: 4,
    }}>
      {STEPS.map((s, i) => (
        <div key={s} style={{ display: 'flex', alignItems: 'flex-start' }}>
          <button onClick={() => setStep(i)} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: '0 10px',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: i === current ? '#6C63FF' : i < current ? '#10B981' : '#fff',
              border: `2px solid ${i === current ? '#6C63FF' : i < current ? '#10B981' : '#d0d0e0'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: i <= current ? '#fff' : '#999',
              fontSize: i < current ? 16 : 13, fontWeight: 600,
              transition: 'all 0.25s', boxShadow: i === current ? '0 0 0 4px rgba(108,99,255,0.15)' : 'none',
            }}>
              {i < current ? '✓' : i + 1}
            </div>
            <span style={{
              fontSize: 11, fontWeight: i === current ? 600 : 400,
              color: i === current ? '#6C63FF' : i < current ? '#10B981' : '#999',
              whiteSpace: 'nowrap', textAlign: 'center', maxWidth: 70,
            }}>{s}</span>
          </button>
          {i < STEPS.length - 1 && (
            <div style={{
              width: 28, height: 2, marginTop: 17, flexShrink: 0,
              background: i < current ? '#10B981' : '#e0e0ec',
              transition: 'background 0.3s',
            }} />
          )}
        </div>
      ))}
    </div>
  )
}
