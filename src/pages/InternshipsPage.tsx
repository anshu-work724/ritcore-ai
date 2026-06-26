import { useState } from 'react'
import type { FormEvent } from 'react'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Select } from '../components/ui/select'
import { AlertTriangle, CheckCircle2, Send } from 'lucide-react'

interface FormState {
  fullName: string
  email: string
  mobile: string
  domain: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  mobile?: string
  domain?: string
}

const domains = [
  { value: '', label: 'Select your domain of interest' },
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile App Development' },
  { value: 'ai', label: 'AI & Machine Learning' },
  { value: 'cloud', label: 'Cloud Infrastructure & DevOps' },
  { value: 'ui', label: 'UI/UX Design' },
  { value: 'seo', label: 'SEO & Digital Marketing' },
  { value: 'fullstack', label: 'Full-Stack Development' },
]

const benefits = [
  { emoji: '🎓', title: 'Real-World Projects', desc: 'Work on live client projects — not dummy exercises.' },
  { emoji: '🏆', title: 'Certificate of Completion', desc: 'Industry-recognised certificate upon successful completion.' },
  { emoji: '🤝', title: 'Mentorship', desc: 'Weekly 1:1 sessions with senior engineers and designers.' },
  { emoji: '💼', title: 'PPO Opportunity', desc: 'Top performers receive pre-placement offers.' },
  { emoji: '📈', title: 'Portfolio Building', desc: 'Ship real features that go live — perfect for your resume.' },
  { emoji: '⚡', title: 'Flexible Schedule', desc: '15–20 hrs/week commitment — remote-first.' },
]

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.fullName.trim() || form.fullName.trim().length < 2) errors.fullName = 'Full name must be at least 2 characters.'
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.'
  if (!form.mobile.trim() || !/^[6-9]\d{9}$/.test(form.mobile.replace(/\s/g, ''))) errors.mobile = 'Please enter a valid 10-digit Indian mobile number.'
  if (!form.domain) errors.domain = 'Please select a domain of interest.'
  return errors
}

export default function InternshipsPage() {
  const [form, setForm] = useState<FormState>({ fullName: '', email: '', mobile: '', domain: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitting(true)
    // Simulate async submission
    await new Promise(r => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Callout banner */}
      <section className="pt-32 pb-10 px-6">
        <div className="container-max max-w-4xl">
          <div className="rounded-2xl px-6 py-5 flex items-start gap-4 mb-12" style={{ background: 'rgba(248,196,113,0.08)', border: '1px solid rgba(248,196,113,0.25)' }}>
            <AlertTriangle size={22} className="shrink-0 mt-0.5" style={{ color: '#f8c471' }} />
            <div>
              <p className="font-semibold text-sm" style={{ color: '#f8c471' }}>Limited Internship Spots Available</p>
              <p className="text-white/55 text-sm mt-0.5">We accept only a small cohort each quarter to ensure quality mentorship. Apply early to secure your spot.</p>
            </div>
          </div>

          {/* Page heading */}
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9b7fe8' }}>Career Launchpad</span>
            <h1 id="internships-heading" className="text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
              Internship <span className="gradient-text">Programme</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Join Ritcore AI as an intern and build real products alongside experienced engineers. Launch your tech career the right way.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {benefits.map(b => (
              <div key={b.title} className="glass rounded-xl p-5 flex flex-col gap-2">
                <span className="text-2xl">{b.emoji}</span>
                <h3 className="text-white font-semibold text-sm">{b.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="pb-24 px-6">
        <div className="container-max max-w-2xl">
          <div className="glass rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(155,127,232,0.06) 0%, transparent 70%)' }} />

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 size={56} className="mx-auto mb-4" style={{ color: '#7ddd88' }} />
                <h2 className="text-2xl font-bold text-white mb-2">Application Received!</h2>
                <p className="text-white/55 leading-relaxed">
                  Thank you, <strong className="text-white">{form.fullName}</strong>! We'll review your application and get back to you at <strong className="text-white">{form.email}</strong> within 2–3 business days.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ fullName: '', email: '', mobile: '', domain: '', message: '' }) }}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all">
                  Submit Another Application
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-1 relative">Apply Now</h2>
                <p className="text-white/45 text-sm mb-8 relative">Fill in the form below — takes less than 2 minutes.</p>

                <form id="internship-form" onSubmit={handleSubmit} noValidate className="space-y-5 relative">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="fullName" className="text-white/70 text-sm">Full Name <span className="text-red-400">*</span></Label>
                    <Input id="fullName" name="fullName" type="text" placeholder="Aarav Sharma" value={form.fullName} onChange={handleChange}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-white/25 focus-visible:ring-cyan-400/50 ${errors.fullName ? 'border-red-400/50' : ''}`} />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-white/70 text-sm">Email Address <span className="text-red-400">*</span></Label>
                    <Input id="email" name="email" type="email" placeholder="aarav@example.com" value={form.email} onChange={handleChange}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-white/25 focus-visible:ring-cyan-400/50 ${errors.email ? 'border-red-400/50' : ''}`} />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Mobile */}
                  <div className="space-y-1.5">
                    <Label htmlFor="mobile" className="text-white/70 text-sm">Mobile Number <span className="text-red-400">*</span></Label>
                    <Input id="mobile" name="mobile" type="tel" placeholder="9876543210" value={form.mobile} onChange={handleChange}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-white/25 focus-visible:ring-cyan-400/50 ${errors.mobile ? 'border-red-400/50' : ''}`} />
                    {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
                  </div>

                  {/* Domain */}
                  <div className="space-y-1.5">
                    <Label htmlFor="domain" className="text-white/70 text-sm">Domain of Interest <span className="text-red-400">*</span></Label>
                    <Select id="domain" name="domain" value={form.domain} onChange={handleChange}
                      className={`bg-white/5 border-white/10 text-white focus-visible:ring-cyan-400/50 ${errors.domain ? 'border-red-400/50' : ''}`}>
                      {domains.map(d => <option key={d.value} value={d.value} className="bg-zinc-900 text-white">{d.label}</option>)}
                    </Select>
                    {errors.domain && <p className="text-red-400 text-xs mt-1">{errors.domain}</p>}
                  </div>

                  {/* Optional message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-white/70 text-sm">Why do you want to join? <span className="text-white/30 text-xs">(optional)</span></Label>
                    <textarea id="message" name="message" rows={3} placeholder="Tell us a bit about yourself and what excites you about this role..." value={form.message} onChange={handleChange}
                      className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 resize-none" />
                  </div>

                  <button id="internship-submit" type="submit" disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-black text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg, #7dd3e8 0%, #9b7fe8 100%)' }}>
                    {submitting ? (
                      <><span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Submitting...</>
                    ) : (
                      <><Send size={16} /> Submit Application</>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
