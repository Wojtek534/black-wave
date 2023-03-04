interface FormatDateProps {
  date: Date
}

export const FormatDate = ({date}: FormatDateProps) => {
  const formattedDate = new Date(date).toLocaleDateString()

  return <>{formattedDate}</>
}
