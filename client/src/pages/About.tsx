/* ============================================================
   About Page — "Anchored Hope" Design System
   SEO Focus: Practice philosophy, trust signals, NJ therapy
   ============================================================ */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, Heart, Award, Users, Mail } from "lucide-react";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030082570/YXDQBiYxidMP8jBEBaVPBF/about-bg-new-NeKmxS8TYwuakgpjUSqvVY.webp";
const SUPERVISION_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030082570/YXDQBiYxidMP8jBEBaVPBF/supervision-bg-new-LixbimEvNTZaTPGjNn69KN.webp";

function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    el.querySelectorAll(".fade-in-up, .fade-in-left").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const values = [
  { icon: Heart, title: "Client-Centered Care", desc: "Every treatment plan is built around your unique needs, goals, and strengths — not a one-size-fits-all approach." },
  { icon: Award, title: "Evidence-Based Practice", desc: "We use proven therapeutic modalities including CBT, DBT, Brainspotting, Gottman Method, and TF-CBT." },
  { icon: Users, title: "Inclusive & Affirming", desc: "We welcome clients of all backgrounds, identities, and orientations. LGBTQ+ affirming and supportive." },
  { icon: CheckCircle, title: "Accessible Telehealth", desc: "Convenient telehealth sessions with evening availability to fit your schedule. Serving NJ and Delaware." },
];

export default function About() {
  const pageRef = useScrollReveal();

  return (
    <Layout>
      <article ref={pageRef as React.RefObject<HTMLElement>}>
        {/* ── PAGE HEADER ── */}
        <section
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{ backgroundColor: "var(--brand-navy)" }}
        >
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${ABOUT_BG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3050]/80 to-[#2C4A6E]/60" />
          <div className="relative container">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </nav>
            <h1 className="font-display text-white text-4xl lg:text-5xl mb-4 fade-in-up">
              About Life Support Associates
            </h1>
            <p className="text-white/80 text-lg max-w-xl leading-relaxed fade-in-up stagger-1">
              A private practice founded on the belief that quality mental health care should be accessible, individualized, and grounded in hope.
            </p>
          </div>
        </section>

        {/* ── STORY ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="fade-in-up">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--brand-amber)" }}>
                  Our Story
                </p>
                <h2 className="font-display text-3xl lg:text-4xl text-navy mb-5">
                  From Private Practice to a Team of Specialists
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Life Support Associates began as Brandy Lee Brown LCSW LLC, a private practice founded in 2016 by Brandy Brown-Weikel. With over a decade of experience in inpatient and outpatient mental health settings, Brandy built her practice on the foundation of individualized, evidence-based care.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  As the practice grew, Brandy brought together a team of highly credentialed clinicians who share her commitment to client-centered, strengths-based therapy. Today, Life Support Associates is a multi-therapist practice serving clients across New Jersey and Delaware.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our tagline — <em>"Hope Anchors the Soul"</em> — reflects our core belief: that with the right support, every person has the capacity to heal, grow, and thrive.
                </p>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:gap-3"
                  style={{ color: "var(--brand-navy)" }}
                >
                  Meet Our Team
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="relative fade-in-left">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={ABOUT_BG}
                    alt="Peaceful dock at golden hour representing hope and stability"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-5 -left-5 hidden lg:block p-5 rounded-xl shadow-xl bg-white border border-gray-100 max-w-[200px]"
                >
                  <div className="font-display text-navy text-2xl mb-1">Since 2016</div>
                  <p className="text-xs text-gray-500 leading-relaxed">Serving the New Jersey community with compassionate mental health care</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section
          className="py-20 lg:py-28"
          style={{ backgroundColor: "var(--brand-stone)" }}
          aria-labelledby="values-heading"
        >
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3 fade-in-up" style={{ color: "var(--brand-amber)" }}>
                What We Stand For
              </p>
              <h2 id="values-heading" className="font-display text-3xl lg:text-4xl text-navy mb-4 fade-in-up stagger-1">
                Our Core Values
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`fade-in-up stagger-${i + 1} bg-white rounded-xl p-7 border border-gray-100 hover:shadow-md transition-shadow duration-200`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "oklch(0.36 0.07 240 / 0.08)" }}
                  >
                    <v.icon size={22} style={{ color: "var(--brand-navy)" }} />
                  </div>
                  <h3 className="font-display text-navy text-xl mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUPERVISION TEASER ── */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-video fade-in-left">
                <img
                  src={SUPERVISION_BG}
                  alt="Clinical supervision session between two mental health professionals"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="fade-in-up">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--brand-amber)" }}>
                  For Clinicians
                </p>
                <h2 className="font-display text-3xl lg:text-4xl text-navy mb-4">
                  Clinical Supervision & Practice Consultation
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In addition to direct client services, Life Support Associates offers clinical supervision for NJ LSW candidates seeking clinical licensure, as well as private practice startup consultation and case consultation services.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Brandy has been in private practice since 2016 and brings deep expertise in the clinical, administrative, and insurance aspects of building a successful practice.
                </p>
                <Link
                  href="/supervision-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: "var(--brand-navy)" }}
                >
                  Learn About Supervision
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-16 text-center"
          style={{ backgroundColor: "var(--brand-navy)" }}
        >
          <div className="container">
            <h2 className="font-display text-white text-3xl mb-4 fade-in-up">
              Start Your Journey Today
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-7 fade-in-up stagger-1">
              Contact us to learn about availability and find the right therapist for your needs.
            </p>
            <a
              href="mailto:brandy@lifesupportassociates.net"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold transition-all duration-200 hover:scale-105 fade-in-up stagger-2"
              style={{ backgroundColor: "var(--brand-amber)", color: "var(--brand-navy-dark)" }}
            >
              <Mail size={16} />
              Contact Us
            </a>
          </div>
        </section>
      </article>
    </Layout>
  );
}
