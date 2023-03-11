interface ColumnsTwoProps {
  children: React.ReactNode
}

export function ColumnsTwo({children}: ColumnsTwoProps): JSX.Element {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {children}
    </section>
  )
}
