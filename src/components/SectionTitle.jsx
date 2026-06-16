export default function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontSize: 17, fontWeight: 700, color: '#1a1a2e',
      marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: 8,
      paddingBottom: '0.75rem', borderBottom: '2px solid #f0f0f8',
    }}>
      {children}
    </h2>
  )
}
