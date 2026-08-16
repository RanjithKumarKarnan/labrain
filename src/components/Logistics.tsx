import { ArrowRight, Building2, Bus, Forklift, Truck } from 'lucide-react'

const SERVICES = [
  {
    icon: Truck,
    title: 'Truck & Commercial Vehicle Rental',
    desc: 'Rental of commercial transport vehicles, including light and medium-duty trucks such as Dyna / flatbed trucks, to support material movement, site logistics, and operational transport needs.',
    img: '/logistics/trucks.jpg',
    alt: 'Commercial truck supporting site logistics and material movement',
  },
  {
    icon: Building2,
    title: 'Workforce Accommodation',
    desc: 'LaBrain offers workforce accommodation rental solutions, providing clean, organized, and well-maintained labor housing to support project teams and operational staff.',
    img: '/logistics/accommodation.jpg',
    alt: 'Workforce accommodation building for project teams',
  },
  {
    icon: Bus,
    title: 'Employee Transportation',
    desc: 'Reliable transportation solutions for employees and project staff through modern buses and crew vans, ensuring safe and efficient daily mobility.',
    img: '/logistics/transport.jpg',
    alt: 'Employee transportation bus for daily project staff mobility',
  },
  {
    icon: Forklift,
    title: 'Project Logistics Support',
    desc: 'Integrated logistics support including material handling, temporary storage coordination, supply movement, and on-site logistics assistance for project operations.',
    img: '/logistics/warehouse.jpg',
    alt: 'Warehouse and material handling support for project logistics',
  },
]

export default function Logistics() {
  return (
    <section id="logistics" className="bg-slate-50 py-24 sm:py-32">
      <div className="section-x">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold-600">
            <Truck className="h-4 w-4" />
            Operational Support
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
            Logistics &amp; Workforce Support
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Operational support solutions designed to strengthen project delivery, workforce
            readiness, and site logistics.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, desc, img, alt }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-gold-500/40 hover:shadow-lg hover:shadow-navy-950/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-950 transition group-hover:bg-gold-500">
                  <Icon className="h-5 w-5 text-gold-400 transition group-hover:text-navy-950" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-navy-950">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-navy-950 p-8 sm:p-12 lg:flex-row lg:items-center">
          <p className="max-w-2xl font-heading text-xl font-bold text-white sm:text-2xl">
            Integrated logistics support for workforce, mobility, and project execution.
          </p>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
