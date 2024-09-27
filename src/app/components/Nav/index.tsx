'use client'

import useNav from '@/shared/hooks/useNav'
import { MenuIcon, PlusIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { type JSX } from 'react'

import './style.scss'

const Nav = (): JSX.Element => {
  const { getClass, pathname, show, toggleShow } = useNav()
  const isActive = (cls: string) => (pathname === cls ? 'active' : '')

  return (
    <section className='navbar-container'>
      <button className='navbar-hamburger' onClick={toggleShow}>
        {show ? <XIcon /> : <MenuIcon />}
      </button>
      <nav className={`navbar ${getClass()}`}>
        <Image src='/logo.svg' alt='Juli logo' width={20} height={20} />
        <Link className={`dsNav-item ${isActive('/add')}`} href='/add'>
          <PlusIcon />
        </Link>
      </nav>
    </section>
  )
}

export default Nav
