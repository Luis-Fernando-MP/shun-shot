'use server'

import Logo from '@/shared/assets/Logo'
import Link from 'next/link'
import type { JSX } from 'react'

import NavHeader from './NavHeader'
import './style.scss'

interface IHeader {
  className?: string
}

const Header = ({ className }: IHeader): JSX.Element => {
  return (
    <header className={`${className} header`}>
      <Link href='/' className='header-logo'>
        <Logo />
        <h2>
          <b className='tn1'>Code</b>Scape
        </h2>
      </Link>
      <NavHeader />
    </header>
  )
}

export default Header
