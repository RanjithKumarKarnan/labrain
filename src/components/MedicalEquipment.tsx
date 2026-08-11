import {
  Package,
  Wrench,
  Settings,
  Gauge,
  SearchCheck,
  ShieldAlert,
  Download,
  ArrowRight,
  HeartPulse,
} from 'lucide-react'

const SERVICES = [
  { icon: Package, title: 'Supply & Distribution', desc: 'Supply of medical equipment, accessories, components, and related technical solutions according to client requirements.' },
  { icon: Wrench, title: 'Installation, Testing & Commissioning', desc: 'Professional installation, functional testing, configuration, commissioning, and handover support.' },
  { icon: Settings, title: 'Preventive & Corrective Maintenance', desc: 'Scheduled preventive maintenance and responsive corrective maintenance designed to minimize equipment downtime.' },
  { icon: Gauge, title: 'Calibration & Performance Verification', desc: 'Technical verification of equipment performance and calibration according to applicable requirements and specifications.' },
  { icon: SearchCheck, title: 'Inspection, Audit & Compliance', desc: 'Structured technical inspections, equipment condition assessments, documentation reviews, and compliance support.' },
  { icon: ShieldAlert, title: 'Safety Testing & Risk Assessment', desc: 'Technical safety inspections, equipment risk assessment, and identification of potential operational concerns.' },
]

const SECTORS = [
  'Hospitals',
  'Medical Centers',
  'Clinics',
  'Diagnostic Centers',
  'Laboratories',
  'Day Surgery Centers',
  'Rehabilitation Centers',
  'Specialized Healthcare Facilities',
  'Healthcare Projects',
  'Medical Equipment Operators',
]

export default function MedicalEquipment() {
  return (
    <section id="medical-equipment" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold-600">
            <HeartPulse className="h-4 w-4" />
            Healthcare Engineering Division
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
            Medical Equipment Solutions
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            LaBrain provides integrated medical equipment solutions supporting healthcare
            facilities throughout the equipment lifecycle — from supply and installation to
            testing, maintenance, performance verification, inspection, and technical support.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-gold-500/40 hover:shadow-lg hover:shadow-navy-950/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-950 transition group-hover:bg-gold-500">
                <Icon className="h-5 w-5 text-gold-400 transition group-hover:text-navy-950" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-navy-950">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 rounded-2xl bg-navy-950 p-8 sm:p-12 lg:grid-cols-5 lg:items-center lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Healthcare Sectors We Support
            </p>
            <h3 className="mt-3 font-heading text-2xl font-bold text-white">
              Supporting healthcare through engineering
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {SECTORS.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:col-span-2 lg:items-end lg:text-right">
            <p className="font-heading text-lg font-semibold text-white/80">
              Reliable Equipment. Reliable Healthcare.
            </p>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="/LaBrain-Medical-Equipment-Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                <Download className="h-4 w-4" />
                Medical Equipment Profile
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-md bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
              >
                Request Support
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
