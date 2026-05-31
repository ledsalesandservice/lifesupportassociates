/* ============================================================
   Perinatal Mental Health Page — "Anchored Hope" Design System
   SEO Focus: "postpartum depression therapist NJ", "perinatal mental health New Jersey",
              "PMH-C certified therapist NJ", "postpartum anxiety therapy NJ",
              "pregnancy loss counseling NJ", "prenatal depression NJ"
   ============================================================ */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Baby, Heart, Phone, ArrowRight, CheckCircle2, ShieldCheck, MessageCircle } from "lucide-react";

const PERINATAL_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030082570/YXDQBiYxidMP8jBEBaVPBF/perinatal-hero-626Lh2RKJPY3juZJsvKErz.webp";
const PSI_LOGO = "/images/psi-logo.png";
const BRANDY_IMG = "/images/therapist1.jpg";
const ALLISON_IMG = "/images/therapist4.jpg";

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

const conditions = [
  { label: "Postpartum Depression", desc: "Persistent sadness, tearfulness, or emotional numbness after birth." },
  { label: "Postpartum Anxiety", desc: "Racing thoughts, excessive worry, or panic attacks in the postpartum period." },
  { label: "Prenatal Depression & Anxiety", desc: "Depression or anxiety that begins during pregnancy." },
  { label: "Postpartum OCD", desc: "Intrusive, unwanted thoughts often related to the baby's safety." },
  { label: "Birth Trauma", desc: "Distressing or traumatic experiences during labor and delivery." },
  { label: "Pregnancy & Infant Loss", desc: "Grief support following miscarriage, stillbirth, or neonatal loss." },
  { label: "Perinatal Bipolar Disorder", desc: "Mood episodes triggered or worsened by pregnancy or postpartum hormonal changes." },
  { label: "Postpartum Psychosis", desc: "A rare but serious condition requiring urgent professional support." },
];

const faqs = [
  {
    q: "What is perinatal mental health?",
    a: "Perinatal mental health refers to the emotional and psychological wellbeing of individuals during pregnancy (prenatal) and the first year after birth (postpartum). Perinatal mood and anxiety disorders (PMADs) are the most common complication of childbirth, affecting up to 1 in 5 new mothers and 1 in 10 new fathers.",
  },
  {
    q: "What does PMH-C certified mean?",
    a: "The Perinatal Mental Health Certification (PMH-C) is awarded by Postpartum Support International (PSI) and represents the gold standard in specialist training for perinatal mental health. Both Brandy Brown-Weikel and Allison Lant hold this certification, meaning they have completed rigorous coursework and demonstrated advanced competency in treating perinatal mood disorders.",
  },
  {
    q: "Is postpartum depression a sign of being a bad parent?",
    a: "Absolutely not. Postpartum depression and anxiety are medical conditions caused by hormonal, biological, and psychological factors — not a reflection of your love for your child or your parenting ability. With the right support, most people recover fully.",
  },
  {
    q: "Do you offer telehealth for perinatal therapy?",
    a: "Yes. Both Brandy and Allison offer telehealth sessions throughout New Jersey, making it easier to access specialist support from the comfort of your home — especially important in the early weeks and months after birth.",
  },
  {
    q: "Can partners or co-parents also receive support?",
    a: "Yes. Partners and co-parents can also experience perinatal mood disorders. We offer individual therapy for partners and couples therapy to help navigate the transition to parenthood together.",
  },
  {
    q: "How do I get started?",
    a: "Simply reach out via email at brandy@lifesupportassociates.net. We'll help match you with the right therapist based on your needs, schedule, and insurance.",
  },
];

export default function PerinatalMentalHealth() {
  const pageRef = useScrollReveal();

  return (
    <Layout>
      {/* SEO: page-level structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Perinatal Mental Health Therapy in New Jersey | PMH-C Certified Therapists",
        "description": "Life Support Associates offers specialist perinatal mental health therapy in New Jersey. Two PMH-C certified therapists treat postpartum depression, postpartum anxiety, prenatal depression, birth trauma, and pregnancy loss. Telehealth available.",
        "url": "https://www.lifesupportassociates.com/perinatal-mental-health",
        "about": { "@type": "MedicalCondition", "name": "Perinatal Mood and Anxiety Disorders" },
        "provider": { "@type": "MedicalBusiness", "name": "Life Support Associates", "url": "https://www.lifesupportassociates.com" }
      })}} />

      <article ref={pageRef as React.RefObject<HTMLElement>}>

        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${PERINATAL_HERO})` }}
            role="img"
            aria-label="Mother holding newborn in warm morning light"
          />
          {/* Gradient overlay — light image so dark text on left, gradient fades right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3050]/85 via-[#1B3050]/50 to-transparent" />
          <div className="relative container pb-16 pt-32">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">Perinatal Mental Health</span>
            </nav>
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 fade-in-up"
                style={{ backgroundColor: "var(--brand-amber)", color: "var(--brand-navy-dark)" }}>
                <ShieldCheck size={13} />
                2 PMH-C Certified Therapists · Postpartum Support International
              </div>
              <h1 className="font-display text-white text-4xl lg:text-5xl xl:text-6xl leading-tight mb-5 fade-in-up stagger-1">
                Perinatal Mental<br />Health Therapy<br />
                <span style={{ color: "var(--brand-amber)" }}>in New Jersey</span>
              </h1>
              <p className="text-white/85 text-lg leading-relaxed mb-8 fade-in-up stagger-2">
                Specialist support for postpartum depression, postpartum anxiety, prenatal mood disorders, birth trauma, and pregnancy loss — delivered by two PMH-C certified therapists. Telehealth available statewide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 fade-in-up stagger-3">
                <a
                  href="mailto:brandy@lifesupportassociates.net"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{ backgroundColor: "var(--brand-amber)", color: "var(--brand-navy-dark)" }}
                >
                  <Baby size={16} />
                  Request an Appointment
                </a>
                <a
                  href="#our-specialists"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
                >
                  Meet Our Specialists
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── PSI HELPLINE BANNER ── */}
        <section
          className="py-5 border-b border-white/10"
          style={{ backgroundColor: "var(--brand-navy)" }}
        >
          <div className="container">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-amber-400 flex-shrink-0" />
                <p className="text-white/90 text-sm">
                  <strong className="text-white">PSI Helpline:</strong>{" "}
                  <a href="tel:18009444773" className="text-amber-400 font-semibold hover:underline">1-800-944-4773</a>
                  {" "}— Free support from Postpartum Support International, available in English &amp; Spanish.
                </p>
              </div>
              <a
                href="https://www.postpartum.net/get-help/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-400 hover:underline whitespace-nowrap flex items-center gap-1"
              >
                More PSI resources <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* ── WHAT IS PERINATAL MH ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="fade-in-left">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-amber)" }}>Understanding Perinatal Mental Health</p>
                <h2 className="font-display text-navy text-3xl lg:text-4xl mb-5 leading-tight">
                  You Are Not Alone —<br />And You Don't Have to Suffer
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Perinatal mood and anxiety disorders (PMADs) are the <strong>most common complication of childbirth</strong>, affecting up to 1 in 5 new mothers and 1 in 10 new fathers. Despite how common they are, many people suffer in silence — feeling ashamed, confused, or afraid to ask for help.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  PMADs are not a sign of weakness or a reflection of your love for your child. They are medical conditions with highly effective treatments. With the right specialist support, <strong>most people recover fully</strong>.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At Life Support Associates, our two PMH-C certified therapists — Brandy Brown-Weikel and Allison Lant — provide evidence-based, compassionate care for individuals and families navigating the perinatal period in New Jersey.
                </p>
                <a
                  href="https://www.postpartum.net/learn-more/learn-more-about-postpartum-depression/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline"
                  style={{ color: "var(--brand-navy)" }}
                >
                  Learn more about PMADs from PSI <ArrowRight size={14} />
                </a>
              </div>
              <div className="fade-in-up">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {conditions.slice(0, 6).map((c) => (
                    <div key={c.label} className="p-4 rounded-xl border border-gray-100 bg-gray-50 hover:shadow-sm transition-shadow duration-200">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--brand-amber)" }} />
                        <div>
                          <p className="text-sm font-semibold text-navy mb-0.5">{c.label}</p>
                          <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {conditions.slice(6).map((c) => (
                    <div key={c.label} className="p-4 rounded-xl border border-gray-100 bg-gray-50 hover:shadow-sm transition-shadow duration-200">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--brand-amber)" }} />
                        <div>
                          <p className="text-sm font-semibold text-navy mb-0.5">{c.label}</p>
                          <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PSI CERTIFICATION BADGE ── */}
        <section className="py-14 border-t border-b border-gray-100" style={{ backgroundColor: "var(--brand-stone)" }}>
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
                  src={PSI_LOGO}
                  alt="Postpartum Support International (PSI) member logo"
                  className="w-48 h-auto"
                  width="192"
                  height="88"
                />
              </a>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-amber)" }}>Certified by Postpartum Support International</p>
                <h3 className="font-display text-navy text-xl mb-2">The PMH-C: The Gold Standard in Perinatal Mental Health</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  The <strong>Perinatal Mental Health Certification (PMH-C)</strong> is the most rigorous credential available in perinatal mental health, awarded exclusively by Postpartum Support International (PSI). Therapists must complete extensive training, demonstrate clinical competency, and pass a comprehensive examination. Both Brandy and Allison hold this certification.
                </p>
                <a
                  href="https://www.postpartum.net/professionals/perinatal-mental-health-certification/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:underline"
                  style={{ color: "var(--brand-navy)" }}
                >
                  About the PMH-C certification <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR SPECIALISTS ── */}
        <section id="our-specialists" className="py-20 lg:py-28 bg-white">
          <div className="container">
            <div className="text-center mb-12 fade-in-up">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-amber)" }}>Meet Your Specialists</p>
              <h2 className="font-display text-navy text-3xl lg:text-4xl mb-4">Two PMH-C Certified Therapists</h2>
              <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
                Both Brandy and Allison hold the Perinatal Mental Health Certification (PMH-C) from Postpartum Support International — ensuring you receive specialist-level care.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Brandy */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-md transition-shadow duration-200 fade-in-up stagger-1">
                <div className="grid grid-cols-5">
                  <div className="col-span-2 relative overflow-hidden">
                    <img
                      src={BRANDY_IMG}
                      alt="Brandy Brown-Weikel, LCSW, LCADC, PMH-C — Perinatal Mental Health Specialist"
                      className="w-full h-full object-cover object-top"
                      style={{ minHeight: "280px" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: "linear-gradient(to top, rgba(27,48,80,0.9), transparent)" }}>
                      <div className="flex flex-wrap gap-1">
                        {["LCSW", "LCADC", "PMH-C"].map((c) => (
                          <span key={c} className="text-[10px] font-bold text-white bg-white/20 px-1.5 py-0.5 rounded">{c}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 p-6 flex flex-col">
                    <div className="mb-3">
                      <h3 className="font-display text-navy text-xl mb-0.5">Brandy Brown-Weikel</h3>
                      <p className="text-xs font-medium" style={{ color: "var(--brand-amber)" }}>Founder, Clinical Director & Perinatal Specialist</p>
                    </div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <ShieldCheck size={13} style={{ color: "var(--brand-amber)" }} />
                      <span className="text-xs font-semibold text-gray-600">PMH-C — Postpartum Support International</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-1">
                      Brandy founded Life Support Associates in 2016 after over a decade in inpatient and outpatient mental health. She holds her PMH-C from PSI, is a Licensed Clinical Alcohol and Drug Counselor (LCADC), and has completed Gottman Level 3 and Brainspotting training. She sees adults 18+ for individual, couples, and perinatal therapy via telehealth in New Jersey.
                    </p>
                    <div className="space-y-1 mb-4">
                      {["Postpartum Depression & Anxiety", "Perinatal Mood Disorders", "Couples Therapy During Transition to Parenthood", "Pregnancy & Infant Loss"].map((s) => (
                        <div key={s} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--brand-amber)" }} />
                          <span className="text-xs text-gray-500">{s}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="mailto:brandy@lifesupportassociates.net"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:underline"
                      style={{ color: "var(--brand-navy)" }}
                    >
                      Request appointment <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Allison */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-md transition-shadow duration-200 fade-in-up stagger-2">
                <div className="grid grid-cols-5">
                  <div className="col-span-2 relative overflow-hidden">
                    <img
                      src={ALLISON_IMG}
                      alt="Allison Lant, LCSW, PMH-C — Perinatal Mental Health Specialist"
                      className="w-full h-full object-cover object-top"
                      style={{ minHeight: "280px" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: "linear-gradient(to top, rgba(27,48,80,0.9), transparent)" }}>
                      <div className="flex flex-wrap gap-1">
                        {["LCSW", "PMH-C"].map((c) => (
                          <span key={c} className="text-[10px] font-bold text-white bg-white/20 px-1.5 py-0.5 rounded">{c}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 p-6 flex flex-col">
                    <div className="mb-3">
                      <h3 className="font-display text-navy text-xl mb-0.5">Allison Lant</h3>
                      <p className="text-xs font-medium" style={{ color: "var(--brand-amber)" }}>Perinatal Mental Health Specialist</p>
                    </div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <ShieldCheck size={13} style={{ color: "var(--brand-amber)" }} />
                      <span className="text-xs font-semibold text-gray-600">PMH-C — Postpartum Support International</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-1">
                      Allison is an outpatient therapist with 20+ years of experience specialising in perinatal mood disorders, postpartum challenges, pregnancy and infant loss, and survivors of intimate and sexual violence. She is LGBTQ+ affirming and holds her PMH-C, Brainspotting Certification, and Violence Against Women Clinical Certification.
                    </p>
                    <div className="space-y-1 mb-4">
                      {["Postpartum Depression & Anxiety", "Pregnancy & Infant Loss", "Birth Trauma", "LGBTQ+ Affirming Perinatal Care"].map((s) => (
                        <div key={s} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--brand-amber)" }} />
                          <span className="text-xs text-gray-500">{s}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="mailto:brandy@lifesupportassociates.net"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:underline"
                      style={{ color: "var(--brand-navy)" }}
                    >
                      Request appointment <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
            <div className="text-center mt-8 fade-in-up">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
                style={{ color: "var(--brand-navy)" }}
              >
                View full team profiles <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHAT TO EXPECT ── */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: "var(--brand-stone)" }}>
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10 fade-in-up">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-amber)" }}>Our Approach</p>
                <h2 className="font-display text-navy text-3xl lg:text-4xl mb-4">What to Expect in Perinatal Therapy</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our perinatal therapists use evidence-based approaches tailored to the unique challenges of the perinatal period.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: Heart, title: "Compassionate, Non-Judgmental Space", body: "We understand that perinatal mood disorders are medical conditions, not personal failures. You will be met with warmth, understanding, and zero judgment." },
                  { icon: ShieldCheck, title: "Evidence-Based Treatment", body: "Our therapists use modalities proven effective for perinatal disorders including Brainspotting, Mindfulness-Based Therapy, Self-Compassion Focused Therapy, and TF-CBT." },
                  { icon: Baby, title: "Specialist Perinatal Training", body: "Both Brandy and Allison hold the PMH-C certification from PSI — the highest credential available in perinatal mental health — ensuring specialist-level care." },
                  { icon: MessageCircle, title: "Telehealth Throughout New Jersey", body: "All perinatal therapy sessions are available via telehealth, so you can access specialist support from home — no travel, no childcare logistics." },
                ].map((item, i) => (
                  <div key={item.title} className={`p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-sm transition-shadow duration-200 fade-in-up stagger-${i + 1}`}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "oklch(0.36 0.07 240 / 0.08)" }}>
                      <item.icon size={20} style={{ color: "var(--brand-navy)" }} />
                    </div>
                    <h3 className="font-semibold text-navy text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10 fade-in-up">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-amber)" }}>Common Questions</p>
                <h2 className="font-display text-navy text-3xl mb-4">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={faq.q} className={`p-6 rounded-xl border border-gray-100 bg-gray-50 fade-in-up stagger-${Math.min(i + 1, 5)}`}>
                    <h3 className="font-semibold text-navy text-sm mb-2">{faq.q}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PSI HELPLINE CALLOUT ── */}
        <section className="py-14 border-t border-gray-100" style={{ backgroundColor: "var(--brand-stone)" }}>
          <div className="container">
            <div className="max-w-2xl mx-auto text-center fade-in-up">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "var(--brand-amber)" }}>
                <Phone size={22} style={{ color: "var(--brand-navy-dark)" }} />
              </div>
              <h2 className="font-display text-navy text-2xl mb-3">Need Immediate Support?</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                If you or someone you know is struggling right now, the <strong>Postpartum Support International Helpline</strong> provides free, confidential support in English and Spanish — available 7 days a week.
              </p>
              <a
                href="tel:18009444773"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95 mb-4"
                style={{ backgroundColor: "var(--brand-navy)", color: "white" }}
              >
                <Phone size={16} />
                PSI Helpline: 1-800-944-4773
              </a>
              <p className="text-xs text-gray-500">
                For life-threatening emergencies, please call <strong>911</strong> or go to your nearest emergency room.{" "}
                <a href="https://www.postpartum.net/get-help/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--brand-navy)" }}>
                  More PSI resources →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 text-center" style={{ backgroundColor: "var(--brand-navy)" }}>
          <div className="container">
            <h2 className="font-display text-white text-3xl mb-4 fade-in-up">
              Ready to Take the First Step?
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-7 text-sm leading-relaxed fade-in-up stagger-1">
              Reach out today to connect with one of our PMH-C certified perinatal therapists. We offer telehealth throughout New Jersey with flexible scheduling.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center fade-in-up stagger-2">
              <a
                href="mailto:brandy@lifesupportassociates.net"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "var(--brand-amber)", color: "var(--brand-navy-dark)" }}
              >
                <Baby size={16} />
                Request an Appointment
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
