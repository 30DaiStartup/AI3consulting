import Link from "next/link";
import Logo from "./Logo";

const bootcampLinks = [
  { href: "#calculator", label: "ROI Calculator" },
  { href: "#quiz", label: "High-Agency Quiz" },
  { href: "/waitlist", label: "Join Waitlist" },
  { href: "/register", label: "Register Now" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/refund", label: "Refund Policy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-white/70 max-w-xs">
              Transform your business operations in 3 days with our intensive
              AI Bootcamp. Human-centered solutions for high-agency leaders.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com/company/ai3consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[var(--soft-gold)] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bootcamp Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Bootcamp</h4>
            <ul className="space-y-2">
              {bootcampLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--soft-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--soft-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-white/70">
              <p>Greenville, SC</p>
              <p>February 2026 Cohort</p>
              <Link
                href="/register"
                className="inline-block text-[var(--soft-gold)] hover:text-white transition-colors font-semibold"
              >
                Reserve Your Seat →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} AI3 Consulting. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
