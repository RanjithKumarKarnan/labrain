import { Check, ArrowRight } from 'lucide-react'
import partnerImg from '../assets/about-us/1.jpg'

const POINTS = [
  'Transparent communication at every project stage',
  'A single accountable team across every discipline',
  'Solutions engineered around your specific operational needs',
  'Long-term support that continues after handover',
]

export default function Partnership() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <img
        src={partnerImg}
        alt="LaBrain partnership handshake at a Riyadh construction site"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/70" />

      <div className="relative section-x">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Our Partnership Approach
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Engineering built around your goals
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            We approach every client relationship as a long-term partnership, not a single
            transaction. From the first conversation, we align our engineering plan with your
            operational goals, timeline, and budget — then stay accountable through testing,
            commissioning, and beyond.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/20">
                  <Check className="h-3.5 w-3.5 text-gold-400" />
                </span>
                <span className="text-white/85">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Start a Partnership
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>

          <p className="mt-10 font-heading text-lg font-semibold text-white/60">
            A partner in your project, from day one.
          </p>
        </div>
      </div>
    </section>
  )
}
