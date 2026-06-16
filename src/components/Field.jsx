export default function Field({ label, value, onChange, placeholder, type = 'text', rows, required }) {
  const base = {
    width: '100%', padding: '10px 13px', borderRadius: 8,
    border: '1.5px solid #e0e0ec', background: '#fff',
    color: '#1a1a2e', fontSize: 14, lineHeight: 1.5,
    outline: 'none', transition: 'border-color 0.2s',
    fontFamily: 'Inter, system-ui, sans-serif',
  }
  const focusStyle = { borderColor: '#6C63FF', boxShadow: '0 0 0 3px rgba(108,99,255,0.1)' }

  const handleFocus = e => Object.assign(e.target.style, focusStyle)
  const handleBlur = e => { e.target.style.borderColor = '#e0e0ec'; e.target.style.boxShadow = 'none' }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#555', marginBottom: 6 }}>
        {label} {required && <span style={{ color: '#EF4444' }}>*</span>}
      </label>
      {rows ? (
        <textarea
          rows={rows} value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          style={{ ...base, resize: 'vertical' }}
          onFocus={handleFocus} onBlur={handleBlur}
        />
      ) : (
        <input
          type={type} value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          style={base}
          onFocus={handleFocus} onBlur={handleBlur}
        />
      )}
    </div>
  )
}
