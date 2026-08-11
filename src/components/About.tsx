import { Compass, Target, Lightbulb, ShieldCheck, Eye, Building2 } from 'lucide-react'
import aboutImg from '../assets/estyleco-attachments/6.jpg'

const CORE_VALUES = [
  { icon: ShieldCheck, label: 'Integrity' },
  { icon: Target, label: 'Precision' },
  { icon: Lightbulb, label: 'Innovation' },
  { icon: Compass, label: 'Safety' },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Company Overview
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              LaBrain is a Riyadh-based engineering and contracting company built to deliver
              integrated solutions in civil, electrical, mechanical, and smart-building systems —
              under one accountable team, from first drawing to final commissioning.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-6">
                <Eye className="h-6 w-6 text-gold-600" />
                <h3 className="mt-4 font-heading text-base font-bold text-navy-950">Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  To be Saudi Arabia's most trusted partner for integrated engineering and
                  construction delivery.
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-6">
                <Building2 className="h-6 w-6 text-gold-600" />
                <h3 className="mt-4 font-heading text-base font-bold text-navy-950">Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  We engineer, build, and maintain infrastructure that performs reliably — on
                  schedule, to specification, for the long term.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                Core Values
              </p>
              <div className="mt-4 flex flex-wrap gap-6">
                {CORE_VALUES.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-950">
                      <Icon className="h-4.5 w-4.5 text-gold-400" />
                    </span>
                    <span className="text-sm font-medium text-navy-900">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className="mt-10 border-l-2 border-gold-500 pl-5 font-heading text-lg italic text-navy-800">
              "We build what we promise — precise, integrated, on time."
            </blockquote>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-navy-950/20">
              <img
                src={aboutImg}
                alt="LaBrain engineer reviewing a project on site at golden hour"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden w-56 rounded-xl bg-navy-950 p-6 shadow-xl sm:block">
              <p className="font-heading text-3xl font-extrabold text-gold-400">Est. Riyadh</p>
              <p className="mt-1 text-sm text-white/70">Engineering &amp; Contracting, KSA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
