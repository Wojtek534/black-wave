interface FormatNumberProps {
  number: number
  decimalPlaces?: number
  currency?: string
}

export function FormatNumber ({
  number,
  decimalPlaces = 2,
  currency,
}: FormatNumberProps): JSX.Element {
  const formattedNumber = number.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
    style: "currency",
    currency,
  })

  return <span>{formattedNumber}</span>
}
