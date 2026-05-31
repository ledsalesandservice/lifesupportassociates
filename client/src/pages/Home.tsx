/* ============================================================
   Home Page — "Anchored Hope" Design System
   SEO Focus: Broad local therapy keywords, NJ mental health
   ============================================================ */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, Heart, Users, Brain, Shield, Star, CheckCircle, Mail } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030082570/YXDQBiYxidMP8jBEBaVPBF/hero-bg-new-aM3DrbBarKMdbpAkf6Tvif.webp";
const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030082570/YXDQBiYxidMP8jBEBaVPBF/services-bg-new-VztTjfQzg7GyxDJEv4F7jU.webp";
const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030082570/YXDQBiYxidMP8jBEBaVPBF/about-bg-new-NeKmxS8TYwuakgpjUSqvVY.webp";

const THERAPIST_BRANDY = "/images/therapist1.jpg";
const THERAPIST_KELLY = "/images/therapist2.jpg";
const THERAPIST_MELISA = "/images/therapist3.jpg";
const THERAPIST_ALLISON = "/images/therapist4.jpg";

const conditions = [
  { icon: Brain, label: "Depression", desc: "Evidence-based treatment for persistent low mood and hopelessness." },
  { icon: Shield, label: "Anxiety", desc: "Practical tools to manage worry, panic, and anxiety disorders." },
  { icon: Heart, label: "Grief & Loss", desc: "Compassionate support through bereavement and life transitions." },
  { icon: Users, label: "Relationship Issues", desc: "Couples and family therapy to rebuild connection and communication." },
  { icon: Star, label: "Trauma", desc: "Trauma-informed care including Brainspotting and TF-CBT." },
  { icon: CheckCircle, label: "Substance Abuse", desc: "Integrated mental health and addiction counseling support." },
];

const teamPreview = [
  { name: "Brandy Brown-Weikel", creds: "LCSW, LCADC, PMH-C, ACSW", role: "Founder, Clinical Director & Perinatal Mental Health Specialist", img: THERAPIST_BRANDY },
  { name: "Kelly Murphy", creds: "MSW, LCSW", role: "Licensed Clinical Social Worker", img: THERAPIST_KELLY },
  { name: "Melisa Walker", creds: "MSW, LCSW", role: "Licensed Clinical Social Worker", img: THERAPIST_MELISA },
  { name: "Allison Lant", creds: "MSW, LCSW, PMH-C", role: "Perinatal Mental Health Specialist", img: THERAPIST_ALLISON },
];

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

export default function Home() {
  const pageRef = useScrollReveal();

  return (
    <Layout>
      <article ref={pageRef as React.RefObject<HTMLElement>}>
        {/* ── HERO ── */}
        <section
          className="relative min-h-[88vh] flex items-center overflow-hidden"
          aria-label="Hero section"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_BG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3050]/85 via-[#2C4A6E]/70 to-[#2C4A6E]/20" />

          <div className="relative container py-20 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium mb-6 fade-in-up">
                <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                Licensed Behavioral Health Specialists · New Jersey
              </div>

              <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 fade-in-up stagger-1">
                You Don't Have to<br />
                <span style={{ color: "var(--brand-amber)" }}>Navigate This Alone</span>
              </h1>

              <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-xl fade-in-up stagger-2">
                Life Support Associates is a team of licensed behavioral health specialists in New Jersey offering evidence-based, individualized therapy for individuals, couples, and families. Telehealth available.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 fade-in-up stagger-3">
                <a
                  href="mailto:brandy@lifesupportassociates.net"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{ backgroundColor: "var(--brand-amber)" }}
                >
                  <Mail size={16} />
                  Schedule a Consultation
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold text-white border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-200"
                >
                  Explore Our Services
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 fade-in-up stagger-4">
                {[
                  { value: "5", label: "Licensed Therapists" },
                  { value: "20+", label: "Years Combined Experience" },
                  { value: "NJ & DE", label: "Licensed States" },
                ].map((stat) => (
                  <div key={stat.label} className="text-white">
                    <div className="font-display text-2xl" style={{ color: "var(--brand-amber)" }}>{stat.value}</div>
                    <div className="text-xs text-white/70 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── STAT BANNER ── */}
        <section className="bg-navy py-8" aria-label="Mental health statistics">
          <div className="container">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
              <p className="text-sm text-white/80 text-center sm:text-left max-w-xl">
                <span className="font-display text-amber text-xl mr-2">1 in 5</span>
                adults in the USA experience a mental health episode each year.
                <span className="text-white/60 ml-1 text-xs">— NAMI</span>
              </p>
              <a
                href="mailto:brandy@lifesupportassociates.net"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-navy bg-amber hover:bg-amber-light transition-colors duration-200"
                style={{ backgroundColor: "var(--brand-amber)", color: "var(--brand-navy-dark)" }}
              >
                <Mail size={14} />
                Reach Out Today
              </a>
            </div>
          </div>
        </section>

        {/* ── SERVICES OVERVIEW ── */}
        <section
          className="py-20 lg:py-28 relative overflow-hidden"
          style={{ backgroundColor: "var(--brand-stone)" }}
          aria-labelledby="services-heading"
        >
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${SERVICES_BG})` }}
          />
          <div className="relative container">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3 fade-in-up" style={{ color: "var(--brand-amber)" }}>
                Areas We Treat
              </p>
              <h2 id="services-heading" className="font-display text-3xl lg:text-4xl text-navy mb-4 fade-in-up stagger-1">
                Compassionate Care for Life's Challenges
              </h2>
              <p className="text-gray-600 leading-relaxed fade-in-up stagger-2">
                Whether you're navigating day-to-day stress, chronic mental health challenges, or seeking to build better coping skills, our team is here to support your individual goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {conditions.map((c, i) => (
                <div
                  key={c.label}
                  className={`fade-in-up stagger-${Math.min(i + 1, 5)} bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: "oklch(0.36 0.07 240 / 0.08)" }}
                  >
                    <c.icon size={20} style={{ color: "var(--brand-navy)" }} />
                  </div>
                  <h3 className="font-semibold text-navy mb-1.5 text-base">{c.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center fade-in-up">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ backgroundColor: "var(--brand-navy)" }}
              >
                View All Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── APPROACH ── */}
        <section className="py-20 lg:py-28 bg-white" aria-labelledby="approach-heading">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative fade-in-left">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={ABOUT_BG}
                    alt="Peaceful lakeside dock at golden hour — representing hope, stability, and calm"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div
                      className="inline-block px-4 py-2 rounded-lg text-white font-display text-lg"
                      style={{ backgroundColor: "rgba(44, 74, 110, 0.85)", backdropFilter: "blur(8px)" }}
                    >
                      "Hope Anchors the Soul"
                    </div>
                  </div>
                </div>
                {/* Floating accent card */}
                <div
                  className="absolute -bottom-6 -right-6 hidden lg:flex flex-col items-center justify-center w-28 h-28 rounded-2xl shadow-xl text-white text-center"
                  style={{ backgroundColor: "var(--brand-amber)" }}
                >
                  <div className="font-display text-3xl leading-none">10+</div>
                  <div className="text-xs mt-1 leading-tight">Years in<br />Private Practice</div>
                </div>
              </div>

              <div className="fade-in-up">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--brand-amber)" }}>
                  Our Approach
                </p>
                <h2 id="approach-heading" className="font-display text-3xl lg:text-4xl text-navy mb-5">
                  Individualized Care, Evidence-Based Treatment
                </h2>
                <div className="section-accent mb-5">
                  <p className="text-gray-600 leading-relaxed text-sm italic">
                    "We develop individualized treatment plans for each person to ensure that your needs are being met."
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">
                  We utilize a variety of therapeutic techniques with a client-centered, strengths-based approach. Our team offers services to people ranging in age from children to adults, including family and couples counseling.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Client-centered, strengths-based approach",
                    "Evidence-based treatments tailored to you",
                    "Serving children, adolescents, and adults",
                    "Individual, couples, and family therapy",
                    "Telehealth with evening availability",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--brand-amber)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:gap-3"
                  style={{ color: "var(--brand-navy)" }}
                >
                  Learn More About Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM PREVIEW ── */}
        <section
          className="py-20 lg:py-28"
          style={{ backgroundColor: "var(--brand-stone)" }}
          aria-labelledby="team-heading"
        >
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3 fade-in-up" style={{ color: "var(--brand-amber)" }}>
                Meet the Team
              </p>
              <h2 id="team-heading" className="font-display text-3xl lg:text-4xl text-navy mb-4 fade-in-up stagger-1">
                Experienced, Compassionate Clinicians
              </h2>
              <p className="text-gray-600 leading-relaxed fade-in-up stagger-2">
                Our therapists bring decades of combined experience across inpatient and outpatient settings, each bringing unique specialties to serve your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamPreview.map((member, i) => (
                <div
                  key={member.name}
                  className={`fade-in-up stagger-${Math.min(i + 1, 5)} group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-250`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <img
                      src={member.img}
                      alt={`${member.name}, ${member.creds} — ${member.role} at Life Support Associates`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-1">
                        {member.creds.split(", ").map((cred) => (
                          <span key={cred} className="credential-pill bg-white/20 text-white border-white/30 text-[10px]">
                            {cred}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy text-sm">{member.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center fade-in-up">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "var(--brand-navy)" }}
              >
                Meet the Full Team
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section
          className="py-16 lg:py-20 relative overflow-hidden"
          style={{ backgroundColor: "var(--brand-navy)" }}
          aria-label="Call to action"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, var(--brand-amber), transparent)", transform: "translate(30%, -30%)" }} />
          </div>
          <div className="relative container text-center">
            <h2 className="font-display text-white text-3xl lg:text-4xl mb-4 fade-in-up">
              Ready to Take the First Step?
            </h2>
            <p className="text-white/75 max-w-xl mx-auto mb-8 leading-relaxed fade-in-up stagger-1">
              Reaching out is the hardest part. Our team is here to make the process as comfortable as possible. Contact us today to learn about availability and get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center fade-in-up stagger-2">
              <a
                href="mailto:brandy@lifesupportassociates.net"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ backgroundColor: "var(--brand-amber)", color: "var(--brand-navy-dark)" }}
              >
                <Mail size={16} />
                Email Us to Get Started
              </a>
              <Link
                href="/supervision-consultation"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Clinical Supervision & Consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
