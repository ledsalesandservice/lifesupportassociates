/* ============================================================
   Layout — "Anchored Hope" Design System
   Shared navigation header and footer for all pages
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Phone, Anchor } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/services", label: "Services" },
  { href: "/perinatal-mental-health", label: "Perinatal Mental Health" },
  { href: "/supervision-consultation", label: "Supervision & Consultation" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* ── Header ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-navy-dark transition-colors duration-200">
                <img
                  src="/manus-storage/hero_d82d488f.jpg"
                  alt="Life Support Associates anchor logo"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-navy text-lg leading-tight">
                  Life Support Associates
                </div>
                <div className="text-xs text-amber font-medium tracking-wide">
                  Hope Anchors the Soul
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location === link.href
                      ? "text-navy bg-stone"
                      : "text-gray-600 hover:text-navy hover:bg-stone"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:brandy@lifesupportassociates.net"
                className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white bg-navy hover:bg-navy-dark transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Mail size={14} />
                Get in Touch
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-navy hover:bg-stone transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location === link.href
                      ? "text-navy bg-stone font-semibold"
                      : "text-gray-600 hover:text-navy hover:bg-stone"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:brandy@lifesupportassociates.net"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-semibold text-white bg-navy"
              >
                <Mail size={14} />
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <footer className="bg-navy-dark text-white">
        <div className="container py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Anchor size={20} className="text-amber" />
                </div>
                <div>
                  <div className="font-display text-white text-lg leading-tight">
                    Life Support Associates
                  </div>
                  <div className="text-xs text-amber font-medium tracking-wide">
                    Hope Anchors the Soul
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                A team of licensed behavioral health specialists providing evidence-based, individualized care in New Jersey.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-white text-base mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-amber transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Specialist Services</p>
                <ul className="space-y-1.5">
                  <li><Link href="/perinatal-mental-health" className="text-xs text-amber/80 hover:text-amber transition-colors">Perinatal Mental Health (PMH-C)</Link></li>
                  <li><Link href="/services#substance-abuse" className="text-xs text-white/50 hover:text-white/80 transition-colors">Substance Abuse Counseling (LCADC)</Link></li>
                  <li><Link href="/services#trauma-therapy" className="text-xs text-white/50 hover:text-white/80 transition-colors">Trauma Therapy &amp; Brainspotting</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-white text-base mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a
                  href="mailto:brandy@lifesupportassociates.net"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-amber transition-colors duration-200"
                >
                  <Mail size={15} className="text-amber flex-shrink-0" />
                  brandy@lifesupportassociates.net
                </a>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <Phone size={15} className="text-amber flex-shrink-0 mt-0.5" />
                  <span>Contact us by email to schedule an appointment</span>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-white/60 leading-relaxed">
                  <strong className="text-white/80">Telehealth Available.</strong> We serve clients throughout New Jersey and Delaware. Evening appointments available.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Life Support Associates. All rights reserved.
            </p>
            <p className="text-xs text-white/50">
              Licensed Behavioral Health Specialists · New Jersey & Delaware
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
