import { Cpu, Users, Clock, BadgeCheck, ShieldCheck, Handshake } from 'lucide-react'
import whyImg from '../assets/features/06.jpg'

const REASONS = [
  { icon: Cpu, title: 'Engineering Expertise', desc: 'Every discipline delivered under one accountable team.' },
  { icon: Users, title: 'Experienced Team', desc: 'Qualified engineers and technicians across all core disciplines.' },
  { icon: Clock, title: 'Reliable Delivery', desc: 'Projects executed to schedule, without shortcuts.' },
  { icon: BadgeCheck, title: 'Uncompromising Quality', desc: 'Every system tested and commissioned to specification.' },
  { icon: ShieldCheck, title: 'Safety-First Culture', desc: 'Zero-compromise approach to site and personnel safety.' },
  { icon: Handshake, title: 'Client-Focused Execution', desc: 'Responsive communication from proposal to close-out.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Why Choose LaBrain
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
              Engineering discipline, delivered reliably
            </h2>

            <div className="mt-10 divide-y divide-slate-100">
              {REASONS.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="flex gap-5 py-5 first:pt-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-50 font-heading text-sm font-bold text-slate-300">
                    0{i + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4.5 w-4.5 text-gold-600" />
                      <h3 className="font-heading text-base font-bold text-navy-950">{title}</h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-navy-950/20">
              <img
                src={whyImg}
                alt="LaBrain engineers reviewing blueprints on site"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-heading text-xl font-bold text-white">
                Discipline. Reliability. Results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
