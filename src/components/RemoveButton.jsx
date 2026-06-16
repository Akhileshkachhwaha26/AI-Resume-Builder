export default function RemoveButton({ onClick }) {
  return (
    <button onClick={onClick} style={{
      padding: '5px 14px', border: '1px solid #fca5a5',
      borderRadius: 6, background: '#fff5f5', color: '#ef4444',
      fontSize: 12, fontWeight: 500, marginTop: 8, transition: 'all 0.2s',
    }}>
      🗑 Remove
    </button>
  )
}
