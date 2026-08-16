import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const SERVICE_OPTIONS = [
  'General Contracting',
  'Electrical / Mechanical Works',
  'HVAC / Plumbing / Fire Fighting',
  'Smart Building Systems',
  'Logistics & Workforce Support',
  'Operation & Maintenance',
  'Engineering Consultancy',
  'Others',
]

const GOOGLE_SCRIPT_URL =
  (import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined) ||
  'https://script.google.com/macros/s/AKfycbzLNgJczhGKueMoIgT3cEKA2BUHSZTlaEEmnUh9ui4JZ9RbaFdTqUlUHg3AnVcLfEOO/exec'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!GOOGLE_SCRIPT_URL) {
      setStatus('error')
      return
    }

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || ''),
      company: String(data.get('company') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      service: String(data.get('service') || ''),
      message: String(data.get('message') || ''),
    }

    setStatus('sending')
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      })
      const result = (await res.json()) as { success?: boolean }
      if (result.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-slate-50 py-24 sm:py-32">
      <div className="section-x">
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
            {status === 'sent' ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-12 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15">
                  <Send className="h-6 w-6 text-gold-600" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy-950">
                  Thank you — we've received your request.
                </h3>
                <p className="mt-2 max-w-sm text-sm text-slate-600">
                  Our engineering team will review your requirements and reach out shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 bg-white p-8"
              >
                {status === 'error' && (
                  <p className="mb-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Something went wrong sending your request. Please try again, or reach us
                    directly at info@labrain.co.
                  </p>
                )}
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
                  disabled={status === 'sending'}
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Request'}
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
