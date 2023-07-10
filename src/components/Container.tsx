import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router"

import Logo from './logo'

export default function Container({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const activeClass = 'active border-b header__item';
  const inactiveClass = 'transition-colors inactive border-b border-b-transparent dark:hover:border-b-white/50 hover:border-b-neutral-900';

  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-normal">
      <div className="container">
        <header className="header py-3 uppercase flex justify-between items-center mb-10 text-sm">
        <div className="header__menu flex flex-row gap-5">
            <Link className={router.pathname == "/" ? activeClass : inactiveClass} href="/">
              <div className="">Sites</div>
            </Link>
            <Link className={router.pathname == "/products" ? activeClass : inactiveClass} href="/products">
              <div className="">Products</div>
            </Link>
            <Link className={router.pathname == "/about" ? activeClass : inactiveClass} href="/about">
              <div className="">About</div>
            </Link>
          </div>
          <Link className="header__title" href="/">
            <div className="sr-only">Chase Cee</div>
            <Logo />
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
