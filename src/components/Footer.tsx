import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../assets/logo.png'
import skyline from '../assets/about-us/6.jpg'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Smart Systems', href: '#smart-systems' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why LaBrain', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  'General Contracting',
  'Civil & Structural Works',
  'MEP Works',
  'Smart Building Systems',
  'Operation & Maintenance',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-20">
      <img src={skyline} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/95 to-navy-950" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="LaBrain" className="h-9 w-auto brightness-0 invert" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Where Engineering Meets Intelligence. Riyadh-based engineering and contracting
              across civil, electrical, mechanical, and smart-building systems.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 transition hover:text-gold-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="text-sm text-white/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-gold-400" />
                Riyadh, Saudi Arabia
              </li>
              <li>
                <a href="tel:0549672441" className="flex items-center gap-3 text-sm text-white/60 transition hover:text-gold-400">
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                  0549 672 441
                </a>
              </li>
              <li>
                <a href="mailto:info@labrain.co" className="flex items-center gap-3 text-sm text-white/60 transition hover:text-gold-400">
                  <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                  info@labrain.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs text-white/50">© 2026 LaBrain. All rights reserved.</p>
          <p className="text-xs text-white/50">LABRAIN.CO</p>
        </div>
      </div>
    </footer>
  )
}
