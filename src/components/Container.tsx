import Image from 'next/image'
import Link from 'next/link'

import Logo from './logo.svg'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full font-sans bg-white dark:bg-slate-900 text-neutral-900 dark:text-white">
      <div className="container">
        <header className="header font-light py-3 uppercase flex justify-between items-center mb-10">
        <div className="header__menu flex flex-row gap-5">
            <Link className="header__item" href="/">
              <div className="">Sites</div>
            </Link>
            <Link className="header__item" href="/">
              <div className="">Products</div>
            </Link>
            <Link className="header__item" href="/">
              <div className="">About</div>
            </Link>
          </div>
          <Link className="header__title" href="/">
            <div className="sr-only">Chase Cee</div>
            <Image className="logos__entry" src={Logo} alt="Sanity Logo" />
          </Link>
          
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p className="footer__text">
            Made by Chase Cee
          </p>
        </footer>
      </div>
    </div>
  )
}
