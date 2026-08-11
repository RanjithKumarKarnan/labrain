import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Smart Systems', href: '#smart-systems' },
  { label: 'Industries', href: '#industries' },
  { label: 'Medical Equipment', href: '#medical-equipment' },
  { label: 'Why LaBrain', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-navy-950/95 shadow-lg shadow-black/10 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="LaBrain" className="h-9 w-auto brightness-0 invert" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:0549672441"
            className="flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-gold-400"
          >
            <Phone className="h-4 w-4" />
            0549 672 441
          </a>
          <a
            href="#contact"
            className="rounded-md bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-gold-500 px-5 py-2.5 text-center text-sm font-semibold text-navy-950"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
