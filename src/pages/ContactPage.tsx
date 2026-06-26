import { Mail, Phone, MapPin, Clock } from 'lucide-react'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const contactCards = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'ritcore.ai@gmail.com',
    desc: 'For project enquiries, quotes, and general questions.',
    href: 'mailto:ritcore.ai@gmail.com',
    color: '#7dd3e8',
    id: 'contact-card-email',
  },
  {
    icon: Phone,
    label: 'Corporate Enquiry',
    value: '+91 93896 28434',
    desc: 'For enterprise deals, partnerships, and B2B collaborations.',
    href: 'tel:+919389628434',
    color: '#9b7fe8',
    id: 'contact-card-phone',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India — Remote-First',
    desc: 'We work with clients across India and internationally.',
    href: undefined,
    color: '#f8c471',
    id: 'contact-card-location',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat, 9 AM – 7 PM IST',
    desc: 'We typically respond within 2 hours during business hours.',
    href: undefined,
    color: '#7ddd88',
    id: 'contact-card-hours',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-12 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(155,127,232,0.08) 0%, transparent 70%)' }} />
        <div className="container-max relative">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9b7fe8' }}>Get In Touch</span>
          <h1 id="contact-heading" className="text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section-padding pt-4">
        <div className="container-max max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contactCards.map(card => {
              const Icon = card.icon
              const inner = (
                <div id={card.id} key={card.id}
                  className={`glass rounded-2xl p-7 flex flex-col gap-3 border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 ${card.href ? 'cursor-pointer group' : ''}`}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}>
                    <Icon size={22} style={{ color: card.color }} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">{card.label}</p>
                    <p className="text-white font-semibold text-base group-hover:text-cyan-300 transition-colors">{card.value}</p>
                    <p className="text-white/45 text-sm mt-1 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              )
              return card.href ? (
                <a key={card.id} href={card.href}>{inner}</a>
              ) : inner
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="pb-24 px-6">
        <div className="container-max max-w-3xl">
          <div className="rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(37,211,102,0.10) 0%, rgba(37,211,102,0.04) 100%)', border: '1px solid rgba(37,211,102,0.20)' }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(37,211,102,0.06) 0%, transparent 70%)' }} />

            {/* WhatsApp icon */}
            <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.30)' }}>
              <span className="text-green-400"><WhatsAppIcon /></span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 relative">Chat on WhatsApp</h2>
            <p className="text-white/50 text-base mb-8 max-w-md mx-auto relative">
              The fastest way to reach us. We're usually online and reply within minutes during business hours.
            </p>

            <a
              href="https://wa.me/919389628434"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-white text-base transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)', boxShadow: '0 0 40px rgba(37,211,102,0.25)' }}
            >
              <WhatsAppIcon />
              Message Us on WhatsApp
            </a>

            <p className="text-white/25 text-xs mt-5 relative">
              +91 93896 28434 · Available Mon – Sat, 9 AM – 7 PM IST
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
