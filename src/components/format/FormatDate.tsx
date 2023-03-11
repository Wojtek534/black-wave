interface FormatDateProps {
  date: Date
}

export function FormatDate ({date}: FormatDateProps): JSX.Element {
  const formattedDate = new Date(date).toLocaleDateString()

  return <>{formattedDate}</>
}
