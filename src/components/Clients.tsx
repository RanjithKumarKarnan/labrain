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

export default function Clients() {
  return (
    <section id="clients" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CLIENTS.map((client) => (
            <a
              key={client.abbr}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-gold-500/40 hover:shadow-lg hover:shadow-navy-950/5"
            >
              <div
                className={`flex h-36 items-center justify-center px-6 ${
                  client.dark ? 'bg-navy-950' : 'bg-slate-50'
                }`}
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-20 max-w-full object-contain"
                  />
                ) : (
                  <span className="font-heading text-3xl font-extrabold tracking-tight text-navy-950">
                    {client.abbr}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  {client.abbr}
                </p>
                <h3 className="mt-1.5 font-heading text-sm font-bold leading-snug text-navy-950">
                  {client.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
