import {
  ClipboardCheck,
  ShieldPlus,
  AlertTriangle,
  Leaf,
  TrendingUp,
  Recycle,
  Users,
  Cpu,
  ClipboardList,
  RefreshCw,
} from 'lucide-react'
import qhseImg from '../assets/about-us/4.jpg'

const QHSE = [
  { icon: ClipboardCheck, label: 'Quality Assurance' },
  { icon: ShieldPlus, label: 'Health & Safety' },
  { icon: AlertTriangle, label: 'Risk Management' },
  { icon: Leaf, label: 'Environmental Responsibility' },
  { icon: TrendingUp, label: 'Continuous Improvement' },
  { icon: Recycle, label: 'Sustainability' },
]

const CAPABILITIES = [
  {
    icon: Users,
    title: 'Multidisciplinary Engineering Team',
    desc: 'Hands-on experience across civil, electrical, mechanical, and smart-systems disciplines — ready to mobilise as one integrated team.',
  },
  {
    icon: Cpu,
    title: 'Modern Equipment & Technology',
    desc: 'Modern tools and testing technology ensure every system is installed, tested, and commissioned to specification.',
  },
  {
    icon: ClipboardList,
    title: 'Structured Project Management',
    desc: 'Every project is planned, tracked, and reported with disciplined practices, keeping scope, schedule, and budget aligned.',
  },
  {
    icon: RefreshCw,
    title: 'Full-Cycle Maintenance Capability',
    desc: 'Beyond handover, our maintenance teams keep systems performing reliably throughout their operational life.',
  },
]

export default function Capabilities() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Quality, Health, Safety &amp; Environment
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
              Standards we do not compromise on
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Every project we deliver is executed under strict quality, safety, and
              environmental practices — because performance and protection go hand in hand.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {QHSE.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/70 p-4">
                  <Icon className="h-5 w-5 shrink-0 text-gold-600" />
                  <span className="text-sm font-medium text-navy-900">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl">
              <img
                src={qhseImg}
                alt="LaBrain site safety briefing"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Technical Capabilities
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
              The resources behind every delivery
            </h2>

            <div className="mt-10 space-y-6">
              {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-5 rounded-xl border border-slate-100 p-6 transition hover:border-gold-500/30 hover:shadow-md hover:shadow-navy-950/5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-950">
                    <Icon className="h-5 w-5 text-gold-400" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-navy-950">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
