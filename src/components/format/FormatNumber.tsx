interface FormatNumberProps {
  number: number
  decimalPlaces?: number
  currency?: string
}

export const FormatNumber = ({
  number,
  decimalPlaces = 2,
  currency,
}: FormatNumberProps) => {
  const formattedNumber = number.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
    style: "currency",
    currency,
  })

  return <span>{formattedNumber}</span>
}
