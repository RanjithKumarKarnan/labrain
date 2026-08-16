const CLIENTS = [
  {
    name: 'King Saud Medical City',
    abbr: 'KSMC',
    href: 'https://publicportal.ksmc.med.sa/',
    logo: null,
    dark: false,
  },
  {
    name: 'King Abdullah Financial District',
    abbr: 'KAFD',
    href: 'https://www.kafd.sa/',
    logo: null,
    dark: false,
  },
  {
    name: 'Diriyah Gate Development Authority',
    abbr: 'DGDA',
    href: 'https://www.dgda.gov.sa/en',
    logo: '/projects/dgda_favicon.png',
    dark: true,
  },
  {
    name: 'General Secretariat of the Gulf Cooperation Council',
    abbr: 'GCC',
    href: 'https://www.gcc-sg.org/en/Pages/default.aspx',
    logo: '/projects/gcc_logo.png',
    dark: true,
  },
  {
    name: 'King Abdullah Petroleum Studies and Research Center',
    abbr: 'KAPSARC',
    href: 'https://www.kapsarc.org/',
    logo: '/projects/kapsarc_logo.png',
    dark: true,
  },
  {
    name: 'National Water Company',
    abbr: 'NWC',
    href: 'https://www.nwc.com.sa/EN/pages/default.aspx',
    logo: '/projects/nwc_logo.png',
    dark: true,
  },
  {
    name: 'Saudi Energy',
    abbr: 'SE',
    href: 'https://www.se.com.sa/en',
    logo: '/projects/se_logo.svg',
    dark: false,
  },
  {
    name: 'Sadia Chicken Company',
    abbr: 'BRF',
    href: 'https://www.sadia-life.com/en-sa/',
    logo: '/projects/sadia-logo.svg',
    dark: false,
  },
]

function LogoItem({
  name,
  abbr,
  href,
  logo,
  dark,
}: (typeof CLIENTS)[number]) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className={`flex h-20 w-44 shrink-0 items-center justify-center rounded-lg px-4 ${
        dark ? 'bg-navy-950' : 'bg-slate-50'
      }`}
    >
      {logo ? (
        <img src={logo} alt="" className="max-h-12 max-w-full object-contain" />
      ) : (
        <span className="font-heading text-xl font-extrabold tracking-tight text-navy-950">
          {abbr}
        </span>
      )}
    </a>
  )
}

export default function Clients() {
  const loop = [...CLIENTS, ...CLIENTS]

  return (
    <section id="clients" className="bg-white py-24 sm:py-32">
      <div className="section-x">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            Previous Projects
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
            Our Team’s Clients
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Organizations served through the professional experience of the LaBrain team.
          </p>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
        <div className="logo-marquee-track flex w-max gap-6 pr-6">
          {loop.map((client, i) => (
            <LogoItem key={`${client.abbr}-${i}`} {...client} />
          ))}
        </div>
      </div>
    </section>
  )
}
