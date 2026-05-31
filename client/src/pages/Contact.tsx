/* ============================================================
   Contact Page — "Anchored Hope" Design System
   SEO Focus: Contact therapist NJ, schedule therapy appointment NJ
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Mail, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";

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

export default function Contact() {
  const pageRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(formData.subject || "New Inquiry from Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:brandy@lifesupportassociates.net?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Layout>
      <article ref={pageRef as React.RefObject<HTMLElement>}>
        {/* ── PAGE HEADER ── */}
        <section
          className="relative py-20 lg:py-24 overflow-hidden"
          style={{ backgroundColor: "var(--brand-navy)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, var(--brand-amber), transparent)", transform: "translate(30%, -30%)" }} />
          </div>
          <div className="relative container">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Contact</span>
            </nav>
            <h1 className="font-display text-white text-4xl lg:text-5xl mb-4 fade-in-up">
              Get in Touch
            </h1>
            <p className="text-white/80 text-lg max-w-xl leading-relaxed fade-in-up stagger-1">
              Taking the first step is the hardest part. We're here to make it as easy as possible. Reach out and we'll respond promptly.
            </p>
          </div>
        </section>

        {/* ── CONTACT SECTION ── */}
        <section
          className="py-20 lg:py-28"
          style={{ backgroundColor: "var(--brand-stone)" }}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
              {/* Left: Info */}
              <div className="lg:col-span-2 space-y-6 fade-in-left">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--brand-amber)" }}>
                    Contact Information
                  </p>
                  <h2 className="font-display text-navy text-3xl mb-4">
                    We'd Love to Hear From You
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Whether you're looking to schedule an appointment, have questions about our services, or want to learn more about clinical supervision, please don't hesitate to reach out.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.36 0.07 240 / 0.08)" }}>
                      <Mail size={18} style={{ color: "var(--brand-navy)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Email</p>
                      <a
                        href="mailto:brandy@lifesupportassociates.net"
                        className="text-sm font-medium transition-colors duration-200 hover:underline"
                        style={{ color: "var(--brand-navy)" }}
                      >
                        brandy@lifesupportassociates.net
                      </a>
                      <p className="text-xs text-gray-500 mt-0.5">We typically respond within 1–2 business days</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.36 0.07 240 / 0.08)" }}>
                      <Clock size={18} style={{ color: "var(--brand-navy)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Availability</p>
                      <p className="text-sm font-medium text-navy">Evening appointments available</p>
                      <p className="text-xs text-gray-500 mt-0.5">Telehealth sessions throughout NJ & Delaware</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.36 0.07 240 / 0.08)" }}>
                      <MapPin size={18} style={{ color: "var(--brand-navy)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Service Area</p>
                      <p className="text-sm font-medium text-navy">New Jersey & Delaware</p>
                      <p className="text-xs text-gray-500 mt-0.5">Telehealth services statewide</p>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-navy text-sm mb-4">What to Expect When You Reach Out</h3>
                  <ul className="space-y-3">
                    {[
                      "We'll respond within 1–2 business days",
                      "We'll ask about your needs and goals",
                      "We'll match you with the right therapist",
                      "We'll discuss insurance and scheduling",
                      "No pressure — take your time",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-gray-600">
                        <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: "var(--brand-amber)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3 fade-in-up">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                        style={{ backgroundColor: "oklch(0.36 0.07 240 / 0.08)" }}
                      >
                        <CheckCircle size={32} style={{ color: "var(--brand-navy)" }} />
                      </div>
                      <h3 className="font-display text-navy text-2xl mb-3">Message Sent!</h3>
                      <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                        Your email client should have opened with your message pre-filled. If not, please email us directly at brandy@lifesupportassociates.net.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-sm font-semibold transition-colors duration-200"
                        style={{ color: "var(--brand-navy)" }}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-display text-navy text-2xl mb-6">Send Us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                              Your Name <span className="text-red-400">*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Jane Smith"
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                              style={{ "--tw-ring-color": "var(--brand-navy)" } as React.CSSProperties}
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                              Email Address <span className="text-red-400">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="jane@example.com"
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                            I'm Interested In
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 bg-white"
                          >
                            <option value="">Select a topic...</option>
                            <option value="Individual Therapy Appointment">Individual Therapy Appointment</option>
                            <option value="Couples Therapy Appointment">Couples Therapy Appointment</option>
                            <option value="Family Therapy Appointment">Family Therapy Appointment</option>
                            <option value="Perinatal Mental Health Services">Perinatal Mental Health Services</option>
                            <option value="Clinical Supervision">Clinical Supervision (LCSW Candidates)</option>
                            <option value="Case Consultation">Case Consultation</option>
                            <option value="Private Practice Consultation">Private Practice Startup Consultation</option>
                            <option value="General Inquiry">General Inquiry</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                            Message <span className="text-red-400">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us a little about what you're looking for and how we can help..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
                          />
                        </div>

                        <div className="pt-1">
                          <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                            style={{ backgroundColor: "var(--brand-navy)" }}
                          >
                            <Mail size={16} />
                            Send Message
                          </button>
                          <p className="text-xs text-gray-400 text-center mt-3">
                            This will open your email client with your message pre-filled. Your information is kept confidential.
                          </p>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white" aria-labelledby="contact-faq-heading">
          <div className="container max-w-3xl">
            <div className="text-center mb-10">
              <h2 id="contact-faq-heading" className="font-display text-navy text-3xl mb-3 fade-in-up">
                Common Questions
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "Do you accept insurance?",
                  a: "Kelly Murphy is currently in-network with most commercial Blue Cross Blue Shield plans. Please contact us to discuss insurance coverage, out-of-pocket fees, and sliding scale options with individual therapists.",
                },
                {
                  q: "Do you offer telehealth therapy?",
                  a: "Yes! All of our therapists offer telehealth sessions, making it convenient to receive care from the comfort of your home. We serve clients throughout New Jersey and Delaware via telehealth.",
                },
                {
                  q: "What ages do you work with?",
                  a: "Our team collectively serves clients from age 8 through adulthood, including children, adolescents, young adults, and older adults. Individual therapists have different age ranges — please contact us to find the right match.",
                },
                {
                  q: "How do I know which therapist is right for me?",
                  a: "We're happy to help! When you reach out, let us know a bit about what you're looking for and we'll help match you with the therapist whose specialties, availability, and approach best fit your needs.",
                },
                {
                  q: "Do you offer evening appointments?",
                  a: "Yes, several of our therapists have evening availability. Please contact us to discuss scheduling options that work for you.",
                },
              ].map((faq, i) => (
                <div
                  key={faq.q}
                  className={`fade-in-up stagger-${Math.min(i + 1, 5)} p-6 rounded-xl bg-gray-50 border border-gray-100`}
                >
                  <h3 className="font-semibold text-navy text-sm mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center fade-in-up">
              <p className="text-sm text-gray-500 mb-4">Have a question not answered here?</p>
              <a
                href="mailto:brandy@lifesupportassociates.net"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:gap-3"
                style={{ color: "var(--brand-navy)" }}
              >
                Email Us Directly
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ── CRISIS NOTE ── */}
        <section className="py-8 border-t border-gray-100 bg-red-50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm font-semibold text-red-700 mb-1">If you are in crisis or need immediate help</p>
              <p className="text-sm text-red-600">
                Please call or text <strong>988</strong> (Suicide & Crisis Lifeline), call <strong>911</strong>, or go to your nearest emergency room. Life Support Associates does not provide crisis services.
              </p>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
