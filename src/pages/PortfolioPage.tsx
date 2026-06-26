import { Badge } from '../components/ui/badge'
import { Card, CardContent } from '../components/ui/card'
import { ExternalLink } from 'lucide-react'

interface Project {
  title: string
  description: string
  tags: string[]
  type: 'web' | 'mobile' | 'ai' | 'saas'
  accentColor: string
  links: { label: string; href: string; variant?: 'primary' | 'store-play' | 'store-apple' | 'secondary' }[]
}

const projects: Project[] = [
  {
    title: 'FinEdge Dashboard',
    description: 'A real-time fintech analytics platform with live market data, portfolio tracking, and AI-driven insights for retail investors.',
    tags: ['React', 'Node.js', 'WebSockets', 'PostgreSQL'],
    type: 'web',
    accentColor: '#7dd3e8',
    links: [{ label: 'Visit Site', href: '#', variant: 'primary' }],
  },
  {
    title: 'EduSpark – Learning App',
    description: 'A gamified mobile learning platform for K-12 students with interactive quizzes, progress tracking, and teacher dashboards.',
    tags: ['Flutter', 'Firebase', 'Dart', 'REST API'],
    type: 'mobile',
    accentColor: '#9b7fe8',
    links: [
      { label: 'Play Store', href: '#', variant: 'store-play' },
      { label: 'App Store', href: '#', variant: 'store-apple' },
    ],
  },
  {
    title: 'LogiTrack AI',
    description: 'AI-powered logistics management with route optimisation, real-time fleet tracking, and predictive demand forecasting.',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'React'],
    type: 'ai',
    accentColor: '#f8c471',
  links: [{ label: 'Visit Site', href: '#', variant: 'primary' }],
  },
  {
    title: 'HealthOS Telemedicine',
    description: 'End-to-end telemedicine platform with video consultations, e-prescriptions, and patient health record management.',
    tags: ['Next.js', 'WebRTC', 'MongoDB', 'AWS'],
    type: 'web',
    accentColor: '#7ddd88',
    links: [{ label: 'Visit Site', href: '#', variant: 'primary' }],
  },
  {
    title: 'TravelHive Booking',
    description: 'A full-featured travel booking SaaS with dynamic pricing, multi-currency support, and AI-personalised recommendations.',
    tags: ['React', 'Stripe', 'PostgreSQL', 'GCP'],
    type: 'saas',
    accentColor: '#e88fa8',
    links: [{ label: 'Visit Site', href: '#', variant: 'primary' }],
  },
  {
    title: 'ShopEase – E-Commerce',
    description: 'High-conversion e-commerce platform with inventory management, analytics dashboard, and multi-vendor support.',
    tags: ['Next.js', 'Shopify API', 'Tailwind CSS', 'Redis'],
    type: 'web',
    accentColor: '#7dd3e8',
    links: [{ label: 'Visit Site', href: '#', variant: 'primary' }],
  },
  {
    title: 'CareBot AI Assistant',
    description: 'WhatsApp-integrated AI chatbot for healthcare providers — handles appointment bookings, FAQs, and patient triage.',
    tags: ['OpenAI API', 'Twilio', 'Python', 'FastAPI'],
    type: 'ai',
    accentColor: '#9b7fe8',
    links: [{ label: 'Learn More', href: '#', variant: 'secondary' }],
  },
  {
    title: 'TaskFlow – PM Tool',
    description: 'A Notion-inspired project management tool for remote teams with real-time collaboration and GitHub integration.',
    tags: ['React', 'WebSockets', 'Node.js', 'MongoDB'],
    type: 'saas',
    accentColor: '#f8c471',
    links: [{ label: 'Visit Site', href: '#', variant: 'primary' }],
  },
]

const typeLabel: Record<string, string> = {
  web: 'Web App',
  mobile: 'Mobile',
  ai: 'AI / ML',
  saas: 'SaaS',
}

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M3.18 23.76a2 2 0 001.94-.22l12.72-7.35-3.34-3.34L3.18 23.76zM.25 1.25a2 2 0 00-.25.97v19.56a2 2 0 00.25.97l.13.12 10.96-10.96v-.25L.38 1.13.25 1.25zm18.23 13.13l-3.66-2.11-3.34 3.34 3.34 3.34 3.67-2.12a2 2 0 000-2.45zM5.12.46L17.84 7.8l-3.34 3.34L3.18.23A2 2 0 005.12.46z"/>
    </svg>
  )
}

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}

export default function PortfolioPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(125,211,232,0.08) 0%, transparent 70%)' }} />
        <div className="container-max relative">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#7dd3e8' }}>Our Work</span>
          <h1 id="portfolio-heading" className="text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
            Engineering <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Production-grade projects across fintech, health-tech, e-commerce, AI, and more. Real problems, elegant solutions.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-padding pt-4">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                id={`project-card-${idx}`}
                className="glass border-white/8 hover:border-white/25 transition-all duration-300 hover:-translate-y-2 group flex flex-col"
                style={{ '--accent': project.accentColor } as React.CSSProperties}
              >
                {/* Coloured top bar */}
                <div className="h-1 rounded-t-xl mx-6 mt-[-1px]" style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />

                <CardContent className="flex flex-col flex-1 pt-5 pb-5">
                  {/* Type badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: `${project.accentColor}18`, color: project.accentColor, border: `1px solid ${project.accentColor}30` }}>
                      {typeLabel[project.type]}
                    </span>
                  </div>

                  {/* Title & description */}
                  <h3 className="text-white font-semibold text-base mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-white/5 text-white/50 border-white/8 hover:bg-white/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.links.map(link => {
                      if (link.variant === 'store-play') {
                        return (
                          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:opacity-90"
                            style={{ background: '#01875f', color: '#fff' }}>
                            <PlayStoreIcon /> Play Store
                          </a>
                        )
                      }
                      if (link.variant === 'store-apple') {
                        return (
                          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:opacity-90"
                            style={{ background: '#0071e3', color: '#fff' }}>
                            <AppStoreIcon /> App Store
                          </a>
                        )
                      }
                      if (link.variant === 'secondary') {
                        return (
                          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all">
                            {link.label} <ExternalLink size={12} />
                          </a>
                        )
                      }
                      return (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:opacity-90"
                          style={{ background: `${project.accentColor}22`, color: project.accentColor, border: `1px solid ${project.accentColor}35` }}>
                          {link.label} <ExternalLink size={12} />
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding pt-8">
        <div className="container-max max-w-2xl text-center">
          <p className="text-white/40 text-sm mb-4">Want to see more or discuss a custom project?</p>
          <a href="https://wa.me/919389628434" target="_blank" rel="noopener noreferrer" id="portfolio-whatsapp-cta"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: '#25d366' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Discuss Your Project
          </a>
        </div>
      </section>
    </>
  )
}
