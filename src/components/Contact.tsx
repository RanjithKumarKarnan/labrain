import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const SERVICE_OPTIONS = [
  'General Contracting',
  'Electrical / Mechanical Works',
  'HVAC / Plumbing / Fire Fighting',
  'Smart Building Systems',
  'Operation & Maintenance',
  'Engineering Consultancy',
]

const RECIPIENTS = ['info@labrain.co', 'Labrain.sa@gmail.com', 'ranjithkarnan2002@gmail.com']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const company = String(data.get('company') || '')
    const email = String(data.get('email') || '')
    const phone = String(data.get('phone') || '')
    const service = String(data.get('service') || '')
    const message = String(data.get('message') || '')

    const subject = `New project enquiry from ${name || 'website contact form'}`
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service of interest: ${service}`,
      '',
      'Project details:',
      message,
    ].join('\n')

    window.location.href = `mailto:${RECIPIENTS.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Contact
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
              Let's start your project
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Tell us about your requirements and our engineering team will get back to you
              directly.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 text-navy-900">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                  <Phone className="h-5 w-5 text-gold-600" />
                </span>
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1 font-medium">
                  <a href="tel:0549672441" className="transition hover:text-gold-600">
                    0549 672 441
                  </a>
                  <span className="text-slate-300">|</span>
                  <a href="tel:0569881944" className="transition hover:text-gold-600">
                    056 988 1944
                  </a>
                </span>
              </div>
              <a href="mailto:info@labrain.co" className="flex items-center gap-4 text-navy-900 transition hover:text-gold-600">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                  <Mail className="h-5 w-5 text-gold-600" />
                </span>
                <span className="font-medium">info@labrain.co</span>
              </a>
              <div className="flex items-center gap-4 text-navy-900">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                  <MapPin className="h-5 w-5 text-gold-600" />
                </span>
                <span className="font-medium">Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-12 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15">
                  <Send className="h-6 w-6 text-gold-600" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy-950">
                  Almost there — send the email that just opened.
                </h3>
                <p className="mt-2 max-w-sm text-sm text-slate-600">
                  Your request has been pre-filled in your email app addressed to our team. Hit
                  send there to complete your submission.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 bg-white p-8"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-navy-900">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      className="mt-2 w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-navy-950 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-navy-900">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="mt-2 w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-navy-950 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-navy-900">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      className="mt-2 w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-navy-950 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-navy-900">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-2 w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-navy-950 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                      placeholder="+966 5X XXX XXXX"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="text-sm font-medium text-navy-900">
                      Service of interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-navy-950 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium text-navy-900">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-2 w-full resize-none rounded-md border border-slate-200 px-4 py-2.5 text-sm text-navy-950 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-800 sm:w-auto"
                >
                  Send Request
                  <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
