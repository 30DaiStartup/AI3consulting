import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-white/70 max-w-xs">
              Helping businesses integrate AI into their operations through
              human-in-the-loop systems that reduce tedious tasks and increase
              productivity.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
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
              <p>Remote services available nationwide</p>
              <Link
                href="/contact"
                className="inline-block text-[var(--soft-gold)] hover:text-white transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} AI3 Consulting. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/contact" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
