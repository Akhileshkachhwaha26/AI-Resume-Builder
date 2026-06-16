import { STEPS } from '../App.jsx'

export default function NavButtons({ step, setStep, total }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
      {step > 0 ? (
        <button onClick={() => setStep(step - 1)} style={{
          padding: '11px 28px', border: '1.5px solid #d0d0e0', borderRadius: 10,
          background: '#fff', color: '#555', fontSize: 14, fontWeight: 500,
          transition: 'all 0.2s',
        }}>← Back</button>
      ) : <div />}
      {step < total - 1 && (
        <button onClick={() => setStep(step + 1)} style={{
          padding: '11px 32px', border: 'none', borderRadius: 10,
          background: 'linear-gradient(135deg, #6C63FF, #4F46E5)',
          color: '#fff', fontSize: 14, fontWeight: 600,
          boxShadow: '0 4px 12px rgba(108,99,255,0.35)',
          transition: 'all 0.2s',
        }}>Next →</button>
      )}
    </div>
  )
}
