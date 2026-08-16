import gov from '../assets/projects/1.jpg'
import healthcare from '../assets/projects/2.jpg'
import industrial from '../assets/projects/3.jpg'
import commercial from '../assets/projects/4.jpg'
import residential from '../assets/projects/5.jpg'
import education from '../assets/projects/6.jpg'
import infrastructure from '../assets/projects/7.jpg'
import energy from '../assets/projects/8.jpg'
import manufacturing from '../assets/projects/9.jpg'

const SECTORS = [
  { label: 'Government', img: gov },
  { label: 'Healthcare', img: healthcare },
  { label: 'Industrial', img: industrial },
  { label: 'Commercial', img: commercial },
  { label: 'Residential', img: residential },
  { label: 'Education', img: education },
  { label: 'Infrastructure', img: infrastructure },
  { label: 'Energy', img: energy },
  { label: 'Manufacturing', img: manufacturing },
]

export default function Industries() {
  return (
    <section id="industries" className="bg-slate-50 py-24 sm:py-32">
      <div className="section-x">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            Industries We Serve
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
            One engineering partner, every sector
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
          {SECTORS.map(({ label, img }) => (
            <div
              key={label}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={img}
                alt={label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
              <span className="absolute bottom-4 left-4 font-heading text-base font-bold text-white sm:text-lg">
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center font-heading text-lg font-semibold text-navy-800">
          One partner. Every sector.
        </p>
      </div>
    </section>
  )
}
