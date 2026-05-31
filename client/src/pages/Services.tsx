/* ============================================================
   Services Page — "Anchored Hope" Design System
   SEO Focus: Specific treatment keywords, NJ therapy services
   ============================================================ */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, Brain, Heart, Users, Shield, Flame, Anchor, Baby, Mail } from "lucide-react";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030082570/YXDQBiYxidMP8jBEBaVPBF/services-bg-new-VztTjfQzg7GyxDJEv4F7jU.webp";

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
    id: "individual-therapy",
    icon: Brain,
    title: "Individual Therapy",
    subtitle: "One-on-one support tailored to your needs",
    desc: "Our individual therapy sessions provide a confidential, supportive space to explore your thoughts, feelings, and behaviors. Whether you're dealing with depression, anxiety, mood issues, anger management, grief, trauma, or the stress of daily life, our therapists will work collaboratively with you to develop coping strategies and achieve your personal goals.",
    conditions: ["Depression", "Anxiety", "Mood Issues", "Anger Management", "Grief & Loss", "Trauma", "Substance Abuse", "Life Transitions", "Stress Management"],
    modalities: ["Cognitive Behavioral Therapy (CBT)", "Dialectical Behavior Therapy (DBT)", "Brainspotting", "Trauma-Focused CBT (TF-CBT)", "Strengths-Based Therapy", "Mindfulness-Based Approaches"],
    ageRange: "Ages 8 to Adult",
  },
  {
    id: "couples-therapy",
    icon: Heart,
    title: "Couples Therapy",
    subtitle: "Rebuild connection and improve communication",
    desc: "Relationship challenges are a natural part of life, but they don't have to define your partnership. Our couples therapists use evidence-based approaches, including the Gottman Method (Level 3 trained), to help couples improve communication, resolve conflict, rebuild trust, and strengthen their bond.",
    conditions: ["Communication Difficulties", "Conflict Resolution", "Trust & Infidelity", "Intimacy Issues", "Pre-Marital Counseling", "Relationship Transitions"],
    modalities: ["Gottman Method Couples Therapy (Level 3)", "Emotionally Focused Therapy", "Communication Skills Training"],
    ageRange: "Adult Couples",
  },
  {
    id: "family-therapy",
    icon: Users,
    title: "Family Therapy",
    subtitle: "Healing and growth for the whole family system",
    desc: "Family therapy addresses the dynamics and patterns within family systems that contribute to conflict, disconnection, or distress. Our therapists work with biological, adoptive, and kinship families, including those navigating foster care and adoption challenges, to improve relationships and build healthier family environments.",
    conditions: ["Family Conflict", "Parent-Child Relationships", "Blended Family Challenges", "Foster Care & Adoption", "Grief in Families", "Communication Breakdowns"],
    modalities: ["Family Systems Therapy", "Structural Family Therapy", "Strengths-Based Approach"],
    ageRange: "Children, Adolescents & Adults",
  },
  {
    id: "perinatal-mental-health",
    icon: Baby,
    title: "Perinatal Mental Health",
    subtitle: "Specialized support for pregnancy and postpartum",
    desc: "Perinatal mental health encompasses the emotional and psychological wellbeing of individuals during pregnancy and the postpartum period. Life Support Associates has two PMH-C certified therapists (certified by Postpartum Support International) who specialize in perinatal mood disorders, postpartum depression and anxiety, pregnancy and infant loss, and the unique challenges of the transition to parenthood.",
    conditions: ["Postpartum Depression", "Postpartum Anxiety", "Prenatal Depression & Anxiety", "Pregnancy & Infant Loss", "Birth Trauma", "Perinatal OCD"],
    modalities: ["Perinatal Mental Health Certification (PMH-C) — PSI", "Brainspotting", "Mindfulness-Based Therapy", "Self-Compassion Focused Therapy", "TF-CBT", "Gottman Method"],
    ageRange: "Adults",
  },
  {
    id: "trauma-therapy",
    icon: Shield,
    title: "Trauma Therapy",
    subtitle: "Healing from traumatic experiences",
    desc: "Trauma can profoundly affect every aspect of life. Our trauma-informed therapists use specialized, evidence-based approaches to help clients process traumatic experiences, reduce symptoms of PTSD, and reclaim their sense of safety and wellbeing. We offer Brainspotting, TF-CBT, and other trauma-focused modalities.",
    conditions: ["PTSD", "Complex Trauma", "Childhood Trauma", "Sexual Violence", "Intimate Partner Violence", "Accident & Medical Trauma"],
    modalities: ["Brainspotting", "Trauma-Focused CBT (TF-CBT)", "Violence Against Women Clinical Certification", "Trauma-Informed Care"],
    ageRange: "Ages 8 to Adult",
  },
  {
    id: "substance-abuse",
    icon: Flame,
    title: "Substance Abuse Counseling",
    subtitle: "Integrated mental health and addiction support",
    desc: "Substance use disorders often co-occur with mental health challenges. Our LCADC-licensed therapists provide integrated treatment that addresses both the addiction and the underlying mental health factors. We offer a non-judgmental, supportive approach to help clients achieve and maintain recovery.",
    conditions: ["Alcohol Use Disorder", "Drug Dependence", "Co-Occurring Mental Health Disorders", "Recovery Support", "Relapse Prevention"],
    modalities: ["Cognitive Behavioral Therapy (CBT)", "Motivational Interviewing", "Dialectical Behavior Therapy (DBT)", "Integrated Dual Diagnosis Treatment"],
    ageRange: "Ages 10 to Adult",
  },
];

export default function Services() {
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
            className="absolute inset-0 opacity-15 bg-cover bg-center"
            style={{ backgroundImage: `url(${SERVICES_BG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3050]/80 to-[#2C4A6E]/60" />
          <div className="relative container">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Services</span>
            </nav>
            <h1 className="font-display text-white text-4xl lg:text-5xl mb-4 fade-in-up">
              Our Therapy Services
            </h1>
            <p className="text-white/80 text-lg max-w-xl leading-relaxed fade-in-up stagger-1">
              Evidence-based, individualized therapy for individuals, couples, and families in New Jersey. Telehealth available with evening appointments.
            </p>
          </div>
        </section>

        {/* ── APPROACH BANNER ── */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.36 0.07 240 / 0.08)" }}>
                  <Anchor size={20} style={{ color: "var(--brand-navy)" }} />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">Client-Centered, Strengths-Based Approach</p>
                  <p className="text-xs text-gray-500 mt-0.5">Every treatment plan is individualized to your unique needs and goals.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-medium text-gray-600">
                <span className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">Ages 8 to Adult</span>
                <span className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">Telehealth Available</span>
                <span className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">Evening Appointments</span>
                <span className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">NJ & Delaware</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES LIST ── */}
        <section
          className="py-20 lg:py-28"
          style={{ backgroundColor: "var(--brand-stone)" }}
          aria-labelledby="services-list-heading"
        >
          <div className="container">
            <h2 id="services-list-heading" className="sr-only">Our Therapy Services</h2>
            <div className="space-y-8">
              {services.map((service, i) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`fade-in-up stagger-${Math.min(i + 1, 5)} bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left: Icon + Title */}
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
                        <h2 className="font-display text-navy text-2xl mb-1">{service.title}</h2>
                        <p className="text-sm font-medium" style={{ color: "var(--brand-amber)" }}>{service.subtitle}</p>
                      </div>
                      <div className="mt-6">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-100 text-gray-600">
                          {service.ageRange}
                        </span>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="lg:col-span-2 p-8">
                      <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                      {service.id === "perinatal-mental-health" && (
                        <div className="flex items-center gap-4 mb-6 p-4 rounded-xl border border-gray-100 bg-gray-50">
                          <a
                            href="https://www.postpartum.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 hover:opacity-75 transition-opacity"
                            aria-label="Visit Postpartum Support International website"
                          >
                            <img
                              src="/manus-storage/psi-logo_9dbb0abf.png"
                              alt="Postpartum Support International (PSI) logo"
                              className="h-10 w-auto"
                              width="120"
                              height="40"
                            />
                          </a>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            Our PMH-C certified therapists are trained through{" "}
                            <a
                              href="https://www.postpartum.net"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold underline underline-offset-2 hover:no-underline transition-all"
                              style={{ color: "var(--brand-navy)" }}
                            >
                              Postpartum Support International (PSI)
                            </a>
                            {" "}— the world’s leading perinatal mental health organisation. Visit their site for additional resources, a helpline, and a provider directory.
                          </p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2.5">Conditions Treated</p>
                          <div className="flex flex-wrap gap-1.5">
                            {service.conditions.map((c) => (
                              <span key={c} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100">
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2.5">Therapeutic Approaches</p>
                          <div className="flex flex-wrap gap-1.5">
                            {service.modalities.map((m) => (
                              <span key={m} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100">
                                {m}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INSURANCE NOTE ── */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center fade-in-up">
              <h2 className="font-display text-navy text-2xl mb-3">Insurance & Fees</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Kelly Murphy is currently in-network with most commercial Blue Cross Blue Shield plans. Please contact us to discuss insurance coverage, out-of-pocket fees, and sliding scale options with individual therapists.
              </p>
              <a
                href="mailto:brandy@lifesupportassociates.net"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:gap-3"
                style={{ color: "var(--brand-navy)" }}
              >
                Contact Us About Insurance
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ── PSI BADGE SECTION ── */}
        <section className="py-14 border-t border-gray-100 bg-white">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 max-w-3xl mx-auto fade-in-up">
              <a
                href="https://www.postpartum.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
                aria-label="Postpartum Support International — opens in new tab"
              >
                <img
                  src="/manus-storage/psi-logo_9dbb0abf.png"
                  alt="Postpartum Support International (PSI) member logo"
                  className="w-48 h-auto"
                  width="192"
                  height="88"
                />
              </a>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-amber)" }}>Perinatal Mental Health Specialists</p>
                <h3 className="font-display text-navy text-xl mb-2">PMH-C Certified by Postpartum Support International</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our perinatal mental health services are delivered by two therapists holding the <strong>Perinatal Mental Health Certification (PMH-C)</strong> from Postpartum Support International — the leading authority in perinatal mental health training. This certification ensures you receive evidence-based, specialist care during one of life’s most significant transitions.
                </p>
                <a
                  href="https://www.postpartum.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold mt-3 transition-colors hover:underline"
                  style={{ color: "var(--brand-navy)" }}
                >
                  Learn more about PSI <ArrowRight size={12} />
                </a>
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
              Ready to Begin?
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-7 fade-in-up stagger-1">
              Contact us today to learn about therapist availability and find the right fit for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center fade-in-up stagger-2">
              <a
                href="mailto:brandy@lifesupportassociates.net"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "var(--brand-amber)", color: "var(--brand-navy-dark)" }}
              >
                <Mail size={16} />
                Schedule a Consultation
              </a>
              <Link
                href="/team"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Meet Our Therapists
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
