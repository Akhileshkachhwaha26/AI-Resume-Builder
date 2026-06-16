export default function Card({ children, style = {} }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 14,
      border: '1px solid #eaeaf4',
      padding: '1.75rem', marginBottom: '1.25rem',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      ...style,
    }}>
      {children}
    </div>
  )
}
