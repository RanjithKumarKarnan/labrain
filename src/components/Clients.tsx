import ksmcLogo from '../assets/testimonial-logos/phototune.ai_1786962595.png'
import kafdLogo from '../assets/testimonial-logos/phototune.ai_1786962455.png'
import dgdaLogo from '../assets/testimonial-logos/phototune.ai_1786962849.png'
import gccLogo from '../assets/testimonial-logos/phototune.ai_1786962746.png'
import kapsarcLogo from '../assets/testimonial-logos/phototune.ai_178696233.png'
import nwcLogo from '../assets/testimonial-logos/phototune.ai_1786962806.png'
import seLogo from '../assets/testimonial-logos/phototune.ai_1786962227.png'
import clientsImg from '../assets/about-us/5.jpg'

const CLIENTS = [
  {
    name: 'King Saud University Medical City',
    abbr: 'KSMC',
    href: 'https://publicportal.ksmc.med.sa/',
    logo: ksmcLogo,
  },
  {
    name: 'King Abdullah Financial District',
    abbr: 'KAFD',
    href: 'https://www.kafd.sa/',
    logo: kafdLogo,
  },
  {
    name: 'Diriyah Gate Development Authority',
    abbr: 'DGDA',
    href: 'https://www.dgda.gov.sa/en',
    logo: dgdaLogo,
  },
  {
    name: 'General Secretariat of the Gulf Cooperation Council',
    abbr: '',
    href: 'https://www.gcc-sg.org/en/Pages/default.aspx',
    logo: gccLogo,
  },
  {
    name: 'King Abdullah Petroleum Studies and Research Center',
    abbr: 'KAPSARC',
    href: 'https://www.kapsarc.org/',
    logo: kapsarcLogo,
  },
  {
    name: 'National Water Company',
    abbr: 'NWC',
    href: 'https://www.nwc.com.sa/EN/pages/default.aspx',
    logo: nwcLogo,
  },
  {
    name: 'Saudi Power Company',
    abbr: '',
    href: 'https://www.se.com.sa/en',
    logo: seLogo,
  },
]

export default function Clients() {
  return (
    <section id="clients" className="bg-white py-24 sm:py-32">
      <div className="section-x">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-heading text-3xl font-extrabold uppercase tracking-wide text-navy-950 sm:text-4xl">
              Our Team’s Clients
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold uppercase tracking-widest text-slate-500">
              Organizations served through the professional experience of the LaBrain team.
            </p>

            <ul className="mt-12 space-y-8">
              {CLIENTS.map((client) => (
                <li key={client.name}>
                  <a
                    href={client.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 sm:gap-7"
                  >
                    <span className="flex h-16 w-28 shrink-0 items-center justify-center sm:h-20 sm:w-36">
                      <img
                        src={client.logo}
                        alt=""
                        className="max-h-full max-w-full object-contain"
                      />
                    </span>
                    <span className="font-heading text-sm font-bold uppercase leading-snug tracking-wide text-navy-950 transition group-hover:text-gold-600 sm:text-base">
                      {client.name}
                      {client.abbr ? ` (${client.abbr})` : ''}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden min-h-[640px] overflow-hidden lg:block">
            <img
              src={clientsImg}
              alt="LaBrain team at a project site"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
