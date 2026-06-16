export default function AddButton({ onClick, label }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      width: '100%', padding: '11px', border: '2px dashed #c8c8e8',
      borderRadius: 10, background: 'none', color: '#6C63FF',
      fontSize: 14, fontWeight: 500, marginTop: 4, transition: 'all 0.2s',
    }}
      onMouseOver={e => e.currentTarget.style.background = '#f5f4ff'}
      onMouseOut={e => e.currentTarget.style.background = 'none'}
    >
      <span style={{ fontSize: 18, lineHeight: 1 }}>+</span> {label}
    </button>
  )
}
