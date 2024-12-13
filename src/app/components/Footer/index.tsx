import type { JSX } from 'react'

interface IFooter {
  className?: string
}

const Footer = ({ className }: IFooter): JSX.Element => {
  return <footer className={`${className} foo`}>foo</footer>
}

export default Footer
