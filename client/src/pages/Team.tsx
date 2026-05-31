/* ============================================================
   Team Page — "Anchored Hope" Design System
   SEO Focus: E-E-A-T signals, therapist credentials, specialties
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Mail, ChevronDown, ChevronUp } from "lucide-react";

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

const therapists = [
  {
    name: "Brandy Brown-Weikel",
    creds: ["LCSW", "LCADC", "PMH-C", "ACSW"],
    role: "Founder, Clinical Director & Perinatal Mental Health Specialist",
    img: "/manus-storage/therapist1_d6cca8a8.jpg",
    states: ["New Jersey"],
    ageRange: "Adults 18+",
    modalities: ["Gottman Couples Therapy (Level 3)", "Brainspotting (Phase 1)", "TF-CBT", "Strengths-Based Therapy"],
    specialties: ["Individual Therapy", "Couples & Family Therapy", "Perinatal Mental Health", "Clinical Supervision", "Private Practice Consultation"],
    education: "Master of Social Work + Certificate in Gerontology, Rutgers University",
    certifications: ["NASW-NJ Clinical Supervisor Certification", "State Licensed Drug & Alcohol Counselor (LCADC)", "Perinatal Mental Health Certification (PMH-C) — Postpartum Support International"],
    bio: "Brandy has spent over a decade working as an inpatient and outpatient mental health therapist. She founded her private practice in 2016 and has grown it into Life Support Associates — a multi-therapist group practice. Brandy sees adults ages 18 and up for individual, couples, and family therapy. She also provides clinical supervision to those seeking clinical licensure in New Jersey and offers case consultation and private practice consultation services. Brandy has her Master's Degree in Social Work and Certificate in Gerontology from Rutgers University. She holds her Perinatal Mental Health Certification (PMH-C) from Postpartum Support International (PSI), is a state licensed drug and alcohol counselor (LCADC), and holds her NASW-NJ Clinical Supervisor Certification. Brandy has completed Gottman Couples Therapy Level 3 training, Brainspotting Phase 1 training, and TF-CBT Training.",
    featured: true,
  },
  {
    name: "Kelly Murphy",
    creds: ["MSW", "LCSW"],
    role: "Licensed Clinical Social Worker",
    img: "/manus-storage/therapist2_e8f0bd5e.jpg",
    states: ["New Jersey", "Delaware"],
    ageRange: "Ages 17+",
    modalities: ["Strengths-Based Therapy", "Client-Centered Therapy", "Cognitive Behavioral Therapy"],
    specialties: ["Individual Therapy", "Acute Psychiatric Support", "Telehealth"],
    education: "Master of Social Work (Summa Cum Laude), Rutgers University, 2006",
    certifications: ["In-network: Most Commercial Blue Cross Blue Shield Plans", "Out-of-network benefits accepted"],
    bio: "Kelly is a Licensed Clinical Social Worker in New Jersey and Delaware. She worked in an acute psychiatric unit for 18 years and currently sees clients on an outpatient basis. Kelly graduated Summa Cum Laude with her Master's Degree in 2006 from Rutgers University. She utilizes a variety of treatment modalities and works from a strengths-based, client-centered perspective. She sees clients ages 17 and up. Kelly sees clients via telehealth and has evening availability.",
    featured: false,
  },
  {
    name: "Melisa Walker",
    creds: ["MSW", "LCSW"],
    role: "Licensed Clinical Social Worker",
    img: "/manus-storage/therapist3_dea6f0d0.jpg",
    states: ["New Jersey"],
    ageRange: "Ages 8 to Adult",
    modalities: ["Individualized Treatment Approach", "Strengths-Based Therapy", "Family Systems Therapy"],
    specialties: ["Children & Adolescents", "Couples & Family Therapy", "Foster Care & Adoption", "Inpatient Psychiatric Support", "Case Consultation"],
    education: "Master of Social Work",
    certifications: ["23+ Years in Social Services"],
    bio: "Melisa has been in the social services field for over 23 years. She has provided therapeutic services to children, adolescents, individuals, couples, and parents, as well as biological, adoptive, and kinship families. Her experiences include working with foster care and adoption agencies for over 7 years. She also has extensive experience with the adult mental health population as an inpatient psychiatric social worker for the past 16 years. She has supervisory experience as a program coordinator of two private foster care offices as well as a clinical supervisor on an inpatient psychiatric unit for adults. Melisa offers counseling services for individuals ages 8 to adult, couples and family therapy, and case consultation services. She sees clients via telehealth and has evening availability.",
    featured: false,
  },
  {
    name: "Allison Lant",
    creds: ["MSW", "LCSW", "PMH-C"],
    role: "Perinatal Mental Health Specialist",
    img: "/manus-storage/therapist4_c1e59711.jpg",
    states: ["New Jersey"],
    ageRange: "Adults",
    modalities: ["Brainspotting", "Mindfulness-Based Therapy", "Self-Compassion Focused Therapy", "Eclectic Modalities"],
    specialties: ["Perinatal Mental Health", "Postpartum Depression & Anxiety", "Pregnancy & Infant Loss", "Survivors of Intimate & Sexual Violence", "LGBTQ+ Affirming Care"],
    education: "Master of Social Work",
    certifications: ["Perinatal Mental Health Certification (PMH-C)", "Brainspotting Certification", "Violence Against Women Clinical Certification", "Member, National Association of Social Workers"],
    bio: "Allison is an outpatient therapist with 20+ years of experience. She specializes in helping people with perinatal mood, anxiety, loss, and postpartum challenges, as well as survivors of intimate and sexual violence. She utilizes an eclectic combination of therapeutic modalities, focusing on self-compassion and mindfulness. Allison is LGBTQ+ welcoming, affirming, and supportive. She holds her Perinatal Mental Health Certification (PMH-C), Brainspotting Certification, Violence Against Women Clinical Certification, and is a member of the National Association of Social Workers.",
    featured: false,
  },
  {
    name: "Tonia Hall",
    creds: ["LCSW", "LCADC"],
    role: "Licensed Clinical Social Worker & Addiction Counselor",
    img: null,
    states: ["New Jersey"],
    ageRange: "Ages 10 to Adult",
    modalities: ["Cognitive Behavioral Therapy (CBT)", "Dialectical Behavior Therapy (DBT)"],
    specialties: ["Mental Health Counseling", "Substance Abuse Counseling", "Inpatient & Outpatient Therapy"],
    education: "Licensed Clinical Social Worker & Licensed Clinical Alcohol and Drug Counselor",
    certifications: ["20+ Years Clinical Experience", "Former Inpatient Supervisor at Inspira"],
    bio: "Tonia Hall is a dedicated therapist with over 20 years of experience in the field of mental health and substance abuse counseling. As a Licensed Clinical Social Worker (LCSW) and Licensed Clinical Alcohol and Drug Counselor (LCADC), Tonia has made significant contributions through her work at Inspira, where she served in inpatient mental health for over two decades, most recently as a supervisor. She has spent the past six years providing outpatient therapy at Inspira on a part-time basis and recently joined Life Support Associates. Tonia's therapeutic approach is grounded in Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT), tailored to meet the diverse needs of her clients. She works with clients ranging in age from 10 years old to adults.",
    featured: false,
  },
];

function TherapistCard({ therapist, index }: { therapist: typeof therapists[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`fade-in-up stagger-${Math.min(index + 1, 5)} bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 ${therapist.featured ? "lg:col-span-2" : ""}`}
    >
      <div className={`${therapist.featured ? "grid grid-cols-1 md:grid-cols-2" : "flex flex-col"}`}>
        {/* Photo */}
        <div className={`relative overflow-hidden bg-gray-100 ${therapist.featured ? "aspect-[4/3] md:aspect-auto" : "aspect-[3/4]"}`}>
          {therapist.img ? (
            <img
              src={therapist.img}
              alt={`${therapist.name}, ${therapist.creds.join(", ")} — ${therapist.role} at Life Support Associates New Jersey`}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "var(--brand-stone)" }}>
              <div className="text-center p-8">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl font-display"
                  style={{ backgroundColor: "var(--brand-navy)", color: "white" }}
                >
                  {therapist.name.split(" ").map(n => n[0]).join("")}
                </div>
                <p className="text-sm text-gray-500">Photo coming soon</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1">
            {therapist.creds.map((c) => (
              <span key={c} className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 flex flex-col">
          <div className="mb-4">
            <h2 className="font-display text-navy text-2xl mb-0.5">{therapist.name}</h2>
            <p className="text-sm font-medium" style={{ color: "var(--brand-amber)" }}>{therapist.role}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {therapist.states.map((s) => (
              <span key={s} className="credential-pill">Licensed in {s}</span>
            ))}
            <span className="credential-pill">{therapist.ageRange}</span>
          </div>

          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Specialties</p>
            <div className="flex flex-wrap gap-1.5">
              {therapist.specialties.map((s) => (
                <span key={s} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <p className={`text-sm text-gray-600 leading-relaxed mb-4 ${expanded ? "" : "line-clamp-3"}`}>
            {therapist.bio}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-semibold transition-colors duration-200 mb-4"
            style={{ color: "var(--brand-navy)" }}
          >
            {expanded ? (
              <><ChevronUp size={14} /> Show Less</>
            ) : (
              <><ChevronDown size={14} /> Read Full Bio</>
            )}
          </button>

          {expanded && (
            <div className="mb-4 space-y-3 border-t border-gray-100 pt-4">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Education</p>
                <p className="text-sm text-gray-600">{therapist.education}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Certifications & Training</p>
                <ul className="space-y-1">
                  {therapist.certifications.map((c) => (
                    <li key={c} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--brand-amber)" }} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Therapeutic Modalities</p>
                <div className="flex flex-wrap gap-1.5">
                  {therapist.modalities.map((m) => (
                    <span key={m} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-auto">
            <a
              href="mailto:brandy@lifesupportassociates.net"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ backgroundColor: "var(--brand-navy)" }}
            >
              <Mail size={14} />
              Request Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const pageRef = useScrollReveal();

  return (
    <Layout>
      <article ref={pageRef as React.RefObject<HTMLElement>}>
        {/* ── PAGE HEADER ── */}
        <section
          className="relative py-20 lg:py-24 overflow-hidden"
          style={{ backgroundColor: "var(--brand-navy)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, var(--brand-amber), transparent)", transform: "translate(20%, -20%)" }} />
          </div>
          <div className="relative container">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Our Team</span>
            </nav>
            <h1 className="font-display text-white text-4xl lg:text-5xl mb-4 fade-in-up">
              Meet Our Therapists
            </h1>
            <p className="text-white/80 text-lg max-w-xl leading-relaxed fade-in-up stagger-1">
              Five licensed clinicians bringing decades of combined experience across inpatient, outpatient, and specialty mental health settings in New Jersey.
            </p>
          </div>
        </section>

        {/* ── TEAM GRID ── */}
        <section
          className="py-20 lg:py-28"
          style={{ backgroundColor: "var(--brand-stone)" }}
          aria-labelledby="team-grid-heading"
        >
          <div className="container">
            <h2 id="team-grid-heading" className="sr-only">Our Therapist Team</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              {therapists.map((t, i) => (
                <TherapistCard key={t.name} therapist={t} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── PSI BADGE SECTION ── */}
        <section className="py-14 border-t border-gray-100" style={{ backgroundColor: "#fff" }}>
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 max-w-3xl mx-auto">
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
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-amber)" }}>Certified by Postpartum Support International</p>
                <h3 className="font-display text-navy text-xl mb-2">PMH-C Perinatal Mental Health Certification</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Two of our therapists — Brandy Brown-Weikel and Allison Lant — hold the <strong>Perinatal Mental Health Certification (PMH-C)</strong> awarded by Postpartum Support International (PSI), the gold standard in perinatal mental health training. This certification demonstrates advanced competency in supporting individuals through pregnancy, postpartum, and infant loss.
                </p>
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
              Find the Right Therapist for You
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-7 fade-in-up stagger-1">
              Not sure who to see? Contact us and we'll help match you with the right clinician based on your needs, insurance, and availability.
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
