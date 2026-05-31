/* ============================================================
   Supervision & Consultation Page — "Anchored Hope" Design System
   SEO Focus: LCSW clinical supervision NJ, private practice consultation
   ============================================================ */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, GraduationCap, Briefcase, MessageSquare, Mail } from "lucide-react";

const SUPERVISION_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030082570/YXDQBiYxidMP8jBEBaVPBF/supervision-bg-new-LixbimEvNTZaTPGjNn69KN.webp";
const THERAPIST_BRANDY = "/manus-storage/therapist1_d6cca8a8.jpg";

function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06, rootMargin: "0px 0px -20px 0px" }
    );
    el.querySelectorAll(".fade-in-up, .fade-in-left").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const services = [
  {
    icon: GraduationCap,
    title: "Clinical Supervision for LCSW Candidates",
    subtitle: "NJ LSW → LCSW Licensure Support",
    desc: "Life Support Associates offers clinical supervision for Licensed Social Workers (LSWs) in New Jersey who are working toward their Licensed Clinical Social Worker (LCSW) licensure. Brandy Brown-Weikel completed the NASW-NJ clinical supervision training in 2018 and has supervised many future clinicians on their path to licensure.",
    includes: [
      "Individual and group supervision options",
      "Review of clinical cases and documentation",
      "Guidance on ethical and professional standards",
      "Support with clinical skills development",
      "Preparation for the LCSW licensure examination",
      "Flexible scheduling including telehealth supervision",
    ],
    ideal: "Licensed Social Workers (LSWs) in New Jersey seeking to accumulate supervised hours toward LCSW licensure.",
  },
  {
    icon: MessageSquare,
    title: "Case Consultation",
    subtitle: "Professional consultation for individual cases",
    desc: "Whether you're facing a challenging clinical situation, need a second opinion, or want to think through a complex case, our case consultation service provides experienced, confidential guidance. Available as a one-time consultation or on an ongoing basis.",
    includes: [
      "One-time or ongoing consultation",
      "Complex case review and guidance",
      "Ethical dilemma consultation",
      "Treatment planning support",
      "Documentation and risk management guidance",
      "Available via telehealth",
    ],
    ideal: "Licensed mental health professionals seeking consultation on specific clinical cases or ethical dilemmas.",
  },
  {
    icon: Briefcase,
    title: "Private Practice Startup Consultation",
    subtitle: "Build your private practice with confidence",
    desc: "Starting a private practice can feel overwhelming. Brandy has been in private practice since 2016 and brings deep, practical knowledge of the clinical, administrative, and insurance aspects of building a successful solo or group practice in New Jersey.",
    includes: [
      "Business structure and setup guidance",
      "Insurance credentialing and paneling",
      "Fee setting and billing practices",
      "Marketing and client acquisition strategies",
      "EHR and practice management systems",
      "Navigating the transition from agency to private practice",
    ],
    ideal: "Licensed therapists considering or in the early stages of starting their own private practice in New Jersey.",
  },
];

export default function Supervision() {
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
            style={{ backgroundImage: `url(${SUPERVISION_BG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3050]/85 to-[#2C4A6E]/60" />
          <div className="relative container">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Supervision & Consultation</span>
            </nav>
            <h1 className="font-display text-white text-4xl lg:text-5xl mb-4 fade-in-up">
              Clinical Supervision &<br />Practice Consultation
            </h1>
            <p className="text-white/80 text-lg max-w-xl leading-relaxed fade-in-up stagger-1">
              Supporting the next generation of clinicians and helping established therapists build thriving practices in New Jersey.
            </p>
          </div>
        </section>

        {/* ── ABOUT BRANDY AS SUPERVISOR ── */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--brand-amber)" }}>
                  Your Supervisor & Consultant
                </p>
                <h2 className="font-display text-navy text-3xl lg:text-4xl mb-5">
                  Brandy Brown-Weikel, LCSW, LCADC, ACSW
                </h2>
                <div className="section-accent mb-5">
                  <p className="text-gray-600 leading-relaxed text-sm italic">
                    "Choosing a clinical supervisor or someone you can consult with professionally is an important choice. I bring real-world experience in both the clinical and business sides of private practice."
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Brandy has been in private practice since 2016 and brings over 12 years of experience in community mental health and inpatient mental health settings. She completed the NASW-NJ clinical supervision training in 2018 and has supervised many clinicians on their path to LCSW licensure.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Her expertise spans the full spectrum of what it takes to succeed as a clinician: from complex case management and ethical practice to insurance credentialing, EHR systems, and building a sustainable caseload.
                </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                  {["NASW-NJ Clinical Supervisor Certified", "LCSW Licensed NJ", "LCADC Licensed NJ", "PMH-C — Postpartum Support International", "Private Practice Since 2016", "12+ Years Community Mental Health"].map((c) => (
                    <span key={c} className="credential-pill">{c}</span>
                  ))}
                </div>
              </div>

              <div className="relative fade-in-left">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0">
                  <img
                    src={THERAPIST_BRANDY}
                    alt="Brandy Brown-Weikel LCSW LCADC ACSW — Clinical Supervisor and Private Practice Consultant in New Jersey"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section
          className="py-20 lg:py-28"
          style={{ backgroundColor: "var(--brand-stone)" }}
          aria-labelledby="supervision-services-heading"
        >
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3 fade-in-up" style={{ color: "var(--brand-amber)" }}>
                What We Offer
              </p>
              <h2 id="supervision-services-heading" className="font-display text-3xl lg:text-4xl text-navy mb-4 fade-in-up stagger-1">
                Supervision & Consultation Services
              </h2>
            </div>

            <div className="space-y-8">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className={`fade-in-up stagger-${i + 1} bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div
                      className="p-8 flex flex-col justify-between"
                      style={{ backgroundColor: "oklch(0.36 0.07 240 / 0.04)" }}
                    >
                      <div>
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                          style={{ backgroundColor: "var(--brand-navy)" }}
                        >
                          <service.icon size={26} className="text-white" />
                        </div>
                        <h3 className="font-display text-navy text-xl mb-1">{service.title}</h3>
                        <p className="text-sm font-medium" style={{ color: "var(--brand-amber)" }}>{service.subtitle}</p>
                      </div>
                      <div className="mt-6 p-4 rounded-lg bg-white border border-gray-100">
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Ideal For</p>
                        <p className="text-xs text-gray-600 leading-relaxed">{service.ideal}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-8">
                      <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">What's Included</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: "var(--brand-amber)" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white" aria-labelledby="faq-heading">
          <div className="container max-w-3xl">
            <div className="text-center mb-10">
              <h2 id="faq-heading" className="font-display text-navy text-3xl mb-3 fade-in-up">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "How many supervised hours do I need for LCSW licensure in New Jersey?",
                  a: "New Jersey requires 3,000 hours of supervised clinical experience over a minimum of two years for LCSW licensure. At least 100 of those hours must be direct, face-to-face supervision with a qualified LCSW supervisor. Contact us to discuss how we can support your specific licensure path.",
                },
                {
                  q: "Do you offer group supervision?",
                  a: "Yes, we offer both individual and group supervision options. Group supervision can be a cost-effective way to accumulate hours while also benefiting from peer learning and diverse case perspectives.",
                },
                {
                  q: "Can supervision and consultation be done via telehealth?",
                  a: "Absolutely. All supervision and consultation services are available via telehealth, making it convenient to fit sessions into your schedule regardless of your location within New Jersey.",
                },
                {
                  q: "I'm thinking about starting a private practice. Where do I begin?",
                  a: "Our private practice startup consultation is designed exactly for this situation. We'll walk you through everything from business structure and insurance credentialing to marketing and client acquisition — drawing on Brandy's decade of experience building and running a successful private practice.",
                },
              ].map((faq, i) => (
                <div
                  key={faq.q}
                  className={`fade-in-up stagger-${i + 1} p-6 rounded-xl bg-gray-50 border border-gray-100`}
                >
                  <h3 className="font-semibold text-navy text-sm mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
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
              Ready to Take the Next Step in Your Career?
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-7 fade-in-up stagger-1">
              Contact us to learn more about supervision availability, consultation rates, and scheduling.
            </p>
            <a
              href="mailto:brandy@lifesupportassociates.net"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold transition-all duration-200 hover:scale-105 fade-in-up stagger-2"
              style={{ backgroundColor: "var(--brand-amber)", color: "var(--brand-navy-dark)" }}
            >
              <Mail size={16} />
              Contact Brandy
            </a>
          </div>
        </section>
      </article>
    </Layout>
  );
}
