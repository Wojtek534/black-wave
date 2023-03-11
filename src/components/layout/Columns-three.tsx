interface ColumnsThreeProps {
  children: React.ReactNode
}

export function ColumnsThree({children}: ColumnsThreeProps): JSX.Element {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {children}
    </section>
  )
}
