interface ColumnsFourProps {
  children: React.ReactNode
}

export function ColumnsFour({children}: ColumnsFourProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-2">
      {children}
    </section>
  )
}
