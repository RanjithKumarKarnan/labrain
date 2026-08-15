import { useEffect } from 'react'
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

export default function LogisticsPage() {
  useEffect(() => {
    document.title = 'Logistics & Workforce Support | LaBrain'
    window.scrollTo(0, 0)
    return () => {
      document.title = 'LaBrain | Engineering & Contracting, Riyadh'
    }
  }, [])

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-24">
        <img
          src="/logistics/trucks.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Core Services
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Logistics &amp; Workforce Support Services
          </h1>
          <div className="mt-5 h-0.5 w-16 bg-gold-500" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Operational support solutions designed to strengthen project delivery, workforce
            readiness, and site logistics.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            {SERVICES.map(({ icon: Icon, title, desc, img, alt }) => (
              <article key={title} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-950">
                    <Icon className="h-5 w-5 text-gold-400" />
                  </span>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-navy-950">{title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
          <p className="max-w-3xl font-heading text-2xl font-bold text-white sm:text-3xl">
            Integrated logistics support for workforce, mobility, and project execution.
          </p>
          <a
            href="/#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </>
  )
}
