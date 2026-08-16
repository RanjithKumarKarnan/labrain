import {
  Building2,
  KeyRound,
  Camera,
  Radio,
  Cable,
  Network,
  Lightbulb,
  Layers,
} from 'lucide-react'
import bmsImg from '../assets/estyleco-attachments/3.jpg'
import dataImg from '../assets/estyleco-attachments/1.jpg'
import cctvImg from '../assets/estyleco-attachments/2.jpg'

const SYSTEMS = [
  { icon: Building2, title: 'Building Management Systems' },
  { icon: KeyRound, title: 'Access Control Systems' },
  { icon: Camera, title: 'CCTV Surveillance' },
  { icon: Radio, title: 'Low Current Systems (ELV)' },
  { icon: Cable, title: 'Structured Cabling' },
  { icon: Network, title: 'Data Network Infrastructure' },
  { icon: Lightbulb, title: 'Smart Building Solutions' },
  { icon: Layers, title: 'Integrated Engineering' },
]

export default function SmartSystems() {
  return (
    <section id="smart-systems" className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(212,175,55,0.12),transparent_50%)]" />
      <div className="relative section-x">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Specialized Engineering Systems
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Intelligence built into every structure
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="grid gap-3 sm:grid-cols-2">
            {SYSTEMS.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex items-center gap-3.5 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-gold-500/30 hover:bg-white/[0.07]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gold-500/15">
                  <Icon className="h-4.5 w-4.5 text-gold-400" />
                </span>
                <span className="text-sm font-medium text-white/85">{title}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-video overflow-hidden rounded-xl shadow-2xl shadow-black/30">
              <img src={bmsImg} alt="Building management system control room" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <img src={dataImg} alt="Data center server infrastructure" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <img src={cctvImg} alt="CCTV and access control installation" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <p className="mt-14 text-center font-heading text-lg font-semibold text-white/70">
          Smart systems, engineered into every structure.
        </p>
      </div>
    </section>
  )
}
