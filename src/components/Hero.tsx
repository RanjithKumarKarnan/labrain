import { ArrowRight, Download, MapPin } from 'lucide-react'
import heroImg from '../assets/estyleco-attachments/5.jpg'

const PILLS = ['General Contracting', 'MEP', 'Smart Systems', 'O&M']

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden bg-navy-950">
      <img
        src={heroImg}
        alt="LaBrain engineers overlooking a Riyadh construction site"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/40 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pt-28 pb-16 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-2 text-sm font-medium text-gold-400">
            <MapPin className="h-4 w-4" />
            Riyadh, Saudi Arabia
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Where Engineering <span className="text-gold-400">Meets Intelligence.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            LaBrain engineers, builds, and maintains civil, electrical, mechanical, and
            smart-building systems — delivered by one accountable team, from first drawing to
            final commissioning.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {PILLS.map((pill, i) => (
              <span key={pill} className="flex items-center gap-3 text-sm font-medium text-white/60">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-gold-500/70" />}
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="/LaBrain-Company-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              <Download className="h-4 w-4" />
              Company Profile
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-950/60 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 sm:grid-cols-4 lg:px-8">
          {[
            ['12+', 'Core Service Lines'],
            ['9', 'Industry Sectors'],
            ['100%', 'Accountable Delivery'],
            ['1', 'Team, Every Discipline'],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="font-heading text-2xl font-bold text-gold-400 sm:text-3xl">{stat}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
