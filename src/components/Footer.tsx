import { Link } from "react-router-dom";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const primaryFooterLinks: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Internships", href: "/internships" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "AI & ML Solutions", href: "/services" },
      { label: "Cloud Infrastructure", href: "/services" },
      { label: "UI/UX Design", href: "/services" },
      { label: "Strategy & Consulting", href: "/services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/8 bg-black/60">
      <div className="container-max px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-4 block">
              <span className="text-2xl font-bold tracking-tight">
                <span className="gradient-text">Ritcore</span>
                <span className="font-light text-white/70"> AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              Engineering tomorrow&apos;s digital experiences. We transform
              ideas into powerful, scalable products.
            </p>
          </div>

          {/* Navigation & Services Columns */}
          {primaryFooterLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 transition-colors duration-200 hover:text-white/90"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-2 mb-8">
              <li>
                <a
                  href="/documents/privacy-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors duration-200 hover:text-white/90"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/documents/terms-and-conditions.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors duration-200 hover:text-white/90"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>

            {/* Join Us Section */}
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
              Join us by
            </h3>
            <div className="flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919389628434?text='Hello, I'm interested in learning more about your services.'"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-white/50 transition-all duration-200 hover:border-green-500/40 hover:bg-green-500/20 hover:text-green-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ritcoreai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-white/50 transition-all duration-200 hover:border-pink-500/40 hover:bg-pink-500/40 hover:text-pink-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ritcoreai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-white/50 transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/30 hover:text-blue-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:ritcoreai@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-white/50 transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-500/40 hover:text-cyan-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Ritcore AI. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Provided by Ritcore Infotech Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
