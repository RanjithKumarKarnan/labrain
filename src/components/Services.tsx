import {
  HardHat,
  Route,
  Building2,
  Building,
  Zap,
  Cog,
  Snowflake,
  Droplet,
  Flame,
  Truck,
  ClipboardCheck,
  RefreshCw,
  MapPinned,
  ClipboardList,
  Compass,
} from 'lucide-react'

const SERVICES = [
  { icon: HardHat, title: 'General Contracting', desc: 'Full-scope contracting delivered under one accountable team.' },
  { icon: Route, title: 'Civil Works', desc: 'Structural and civil execution built to specification.' },
  { icon: Building2, title: 'Infrastructure Works', desc: 'Infrastructure engineered for long-term performance.' },
  { icon: Building, title: 'Buildings Construction', desc: 'Ground-up construction across every building type.' },
  { icon: Zap, title: 'Electrical Works', desc: 'Power distribution, lighting, and electrical systems.' },
  { icon: Cog, title: 'Mechanical Works', desc: 'Mechanical systems installed and commissioned to spec.' },
  { icon: Snowflake, title: 'HVAC & AC Specialties', desc: 'Climate systems engineered for efficiency and comfort.' },
  { icon: Droplet, title: 'Plumbing', desc: 'Water supply and drainage systems, planned and installed.' },
  { icon: Flame, title: 'Fire Fighting Systems', desc: 'Fire detection and suppression systems, code-compliant.' },
  { icon: Truck, title: 'Supply & Installation', desc: 'Equipment sourcing aligned with technical requirements.' },
  { icon: ClipboardCheck, title: 'Testing & Commissioning', desc: 'Functional checks and structured handover.' },
  { icon: RefreshCw, title: 'Operation & Maintenance', desc: 'Ongoing service to keep systems performing reliably.' },
  { icon: MapPinned, title: 'Facility Management', desc: 'Day-to-day operational support across facilities.' },
  { icon: ClipboardList, title: 'Project Management', desc: 'Disciplined planning, tracking, and reporting.' },
  { icon: Compass, title: 'Engineering Consultancy', desc: 'Technical advisory across the project lifecycle.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            Core Services
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
            Integrated across the entire lifecycle
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Engineering. Procurement. Installation. Operation. One partner across every
            discipline your project needs.
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
      </div>
    </section>
  )
}
