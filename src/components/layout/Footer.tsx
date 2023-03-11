interface FooterProps {
  children: React.ReactNode
}

export function Footer({children}: FooterProps): JSX.Element {
  return <footer>{children}</footer>
}
