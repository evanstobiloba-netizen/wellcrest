import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, Star, GraduationCap, Send, ArrowRight, CheckCircle } from 'lucide-react'

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

const learnItems = [
  'Comprehensive patient assessment',
  'Diagnosis & treatment planning',
  'Medication management',
  'EMR documentation and clinical note writing',
  'Evidence-based care guidelines',
  'Behavioral health screening & management',
  'Practice workflow and patient communication',
  'Professional ethics and HIPAA compliance',
]

const programStructure = [
  { title: 'One-on-One Supervision', desc: 'Shadow experienced providers in a real clinical setting and participate in guided patient encounters.' },
  { title: 'Structured Clinical Hours', desc: 'Complete required hours for certification, job readiness, or board requirements.' },
  { title: 'Real Patient Experience', desc: 'Observe and participate in initial evaluations, follow-up visits, medication reviews, diagnostic assessments, and treatment planning.' },
  { title: 'Documentation Training', desc: 'Learn SOAP notes, HPI documentation, medication management notes, and EMR best practices.' },
]

const benefits = [
  'Gain real-time clinical experience',
  'Boost clinical confidence',
  'Strengthen diagnostic and therapeutic skills',
  'Learn directly from licensed providers',
  'Improve EMR proficiency',
  'Become job-ready with practical exposure',
]

const initialForm = {
  firstName: '', lastName: '', email: '', phone: '', dob: '', address: '', city: '', state: '', zip: '',
  school: '', program: '', currentYear: '', hours: '', preferredStartDate: '', preferredSchedule: '',
  cprCertified: '', immunizationsUpToDate: '', backgroundCheckCompleted: '', liabilityInsurance: '',
  emergencyName: '', emergencyPhone: '', emergencyRelationship: '', notes: '',
}

const inputClass = 'w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-brand transition-colors'

export default function Preceptorship() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const payload = {
      _subject: `Preceptorship Application - ${form.firstName} ${form.lastName}`,
      _template: 'table',
      _captcha: 'false',
      _honey: '',
      'First Name': form.firstName,
      'Last Name': form.lastName,
      'Email Address': form.email,
      'Phone Number': form.phone,
      'Date of Birth': form.dob,
      'Street Address': form.address,
      'City': form.city,
      'State': form.state,
      'ZIP Code': form.zip,
      'School / Institution': form.school,
      'Degree / Program': form.program,
      'Current Year / Level': form.currentYear,
      'Clinical Hours Needed': form.hours,
      'Preferred Start Date': form.preferredStartDate,
      'Preferred Schedule': form.preferredSchedule,
      'CPR / BLS Certified': form.cprCertified,
      'Immunizations Up to Date': form.immunizationsUpToDate,
      'Background Check Completed': form.backgroundCheckCompleted,
      'Liability / Malpractice Insurance': form.liabilityInsurance,
      'Emergency Contact Name': form.emergencyName,
      'Emergency Contact Phone': form.emergencyPhone,
      'Emergency Contact Relationship': form.emergencyRelationship,
      'Additional Notes': form.notes,
    }

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@wellcresttherapy.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok && data.success !== 'false') {
        setSubmitted(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setError(data.message || 'There was a problem submitting your application. Please try again.')
      }
    } catch (err) {
      setError('Network error — please try again, or email us at info@wellcresttherapy.com.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-brand page-section-lg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-20 -left-40 w-96 h-96 bg-brand/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-40 w-80 h-80 bg-brand-teal/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 font-medium text-xs uppercase tracking-[0.2em] text-brand-teal mb-6 px-4 py-1.5 rounded-full bg-white/10">
              <GraduationCap className="w-4 h-4" />
              Clinical Training
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Preceptorship</h1>
            <p className="text-lg text-brand-teal">Guided Clinical Learning With Expert Mentorship</p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-6">
            Our Preceptorship Program provides hands-on, real-world clinical training for Nurse Practitioners. Under the guidance of experienced providers, participants gain direct exposure to patient care, clinical decision-making, documentation standards, and practice management.
          </p>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-12">
            Whether you are a new graduate preparing for independent practice or a clinician looking to enhance specific skills, our structured preceptorship ensures you learn with confidence and competence.
          </p>

          {/* What You Will Learn */}
          <div className="bg-brand/5 rounded-2xl p-6 sm:p-10 lg:p-14 mb-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">What You Will Learn</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {learnItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-base text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Enroll */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Who Can Enroll?</h2>
            <p className="text-base md:text-lg text-slate-500">Our preceptorship program is ideal for Nurse Practitioners (PMHNP).</p>
          </div>

          {/* Program Structure */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Program Structure</h2>
            <div className="space-y-4">
              {programStructure.map((step, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-brand font-bold text-lg">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm md:text-base text-slate-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-brand to-brand-teal text-white rounded-2xl p-6 sm:p-10 lg:p-14 mb-12">
            <h2 className="text-2xl font-bold mb-6">Benefits of Our Preceptorship Program</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 text-base md:text-lg">
                  <Star className="w-5 h-5 text-white flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Duration & Scheduling */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Duration &amp; Scheduling</h2>
            <p className="text-base md:text-lg text-slate-500">We offer flexible scheduling:</p>
            <ul className="list-disc list-inside text-base md:text-lg text-slate-500 mt-3 space-y-2">
              <li>Weekly or monthly programs</li>
              <li>Full-time or part-time clinical hours</li>
              <li>Remote + onsite hybrid options (based on provider availability)</li>
            </ul>
          </div>

          {/* Apply Form */}
          <div className="max-w-2xl mx-auto bg-slate-50 rounded-2xl p-6 sm:p-10 lg:p-14">
            <h2 className="text-2xl font-bold text-brand-navy mb-2">Apply for Preceptorship</h2>
            <p className="text-base text-slate-500 mb-6">Complete the form below to apply for our Preceptorship Program.</p>

            {submitted ? (
              <div className="bg-white rounded-2xl p-8 text-center border border-emerald-200">
                <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Application Submitted!</h3>
                <p className="text-slate-500 mb-6">Thank you for applying to the WellCrest Health Preceptorship Program. Our team will review your application and contact you shortly.</p>
                <button onClick={() => { setForm(initialForm); setSubmitted(false) }} className="btn-primary">
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Personal Information */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Personal Information</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="sr-only" htmlFor="firstName">First Name</label>
                      <input id="firstName" required placeholder="First Name *" name="firstName" value={form.firstName} onChange={update('firstName')} className={inputClass} />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="lastName">Last Name</label>
                      <input id="lastName" required placeholder="Last Name *" name="lastName" value={form.lastName} onChange={update('lastName')} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="sr-only" htmlFor="email">Email Address</label>
                      <input id="email" type="email" required placeholder="Email Address *" name="email" value={form.email} onChange={update('email')} className={inputClass} />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="phone">Phone Number</label>
                      <input id="phone" type="tel" required placeholder="Phone Number *" name="phone" value={form.phone} onChange={update('phone')} className={inputClass} />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="sr-only" htmlFor="dob">Date of Birth</label>
                    <input id="dob" type="date" placeholder="Date of Birth" name="dob" value={form.dob} onChange={update('dob')} className={inputClass} />
                  </div>
                  <div className="mb-3">
                    <label className="sr-only" htmlFor="address">Street Address</label>
                    <input id="address" placeholder="Street Address" name="address" value={form.address} onChange={update('address')} className={inputClass} />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="col-span-2">
                      <label className="sr-only" htmlFor="city">City</label>
                      <input id="city" placeholder="City" name="city" value={form.city} onChange={update('city')} className={inputClass} />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="state">State</label>
                      <select id="state" name="state" value={form.state} onChange={update('state')} className={inputClass}>
                        <option value="">State</option>
                        {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="zip">ZIP Code</label>
                      <input id="zip" placeholder="ZIP" maxLength="5" name="zip" value={form.zip} onChange={update('zip')} className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Academic Information</p>
                  <div className="mb-3">
                    <label className="sr-only" htmlFor="school">School / Institution *</label>
                    <input id="school" required placeholder="School / Institution *" name="school" value={form.school} onChange={update('school')} className={inputClass} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="sr-only" htmlFor="program">Degree / Program *</label>
                      <select id="program" name="program" required value={form.program} onChange={update('program')} className={inputClass}>
                        <option value="">Degree / Program *</option>
                        {['PMHNP','FNP','AGACNP','PNP','CNM','CRNA','DNP','PhD in Nursing','BSN','Other'].map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="currentYear">Current Year / Level</label>
                      <select id="currentYear" name="currentYear" value={form.currentYear} onChange={update('currentYear')} className={inputClass}>
                        <option value="">Current Year / Level</option>
                        {['1st Year','2nd Year','3rd Year','4th Year','Graduated'].map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="sr-only" htmlFor="hours">Clinical Hours Needed *</label>
                      <input id="hours" type="number" min="1" required placeholder="Clinical Hours Needed *" name="hours" value={form.hours} onChange={update('hours')} className={inputClass} />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="preferredStartDate">Preferred Start Date</label>
                      <input id="preferredStartDate" type="date" name="preferredStartDate" value={form.preferredStartDate} onChange={update('preferredStartDate')} className={inputClass} />
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="sr-only" htmlFor="preferredSchedule">Preferred Schedule</label>
                    <select id="preferredSchedule" name="preferredSchedule" value={form.preferredSchedule} onChange={update('preferredSchedule')} className={inputClass}>
                      <option value="">Preferred Schedule</option>
                      <option value="Weekdays">Weekdays</option>
                    </select>
                  </div>
                </div>

                {/* Compliance & Credentials */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Compliance &amp; Credentials</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="sr-only" htmlFor="cprCertified">CPR / BLS Certified</label>
                      <select id="cprCertified" name="cprCertified" required value={form.cprCertified} onChange={update('cprCertified')} className={inputClass}>
                        <option value="">CPR / BLS Certified? *</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="immunizationsUpToDate">Immunizations Up to Date</label>
                      <select id="immunizationsUpToDate" name="immunizationsUpToDate" value={form.immunizationsUpToDate} onChange={update('immunizationsUpToDate')} className={inputClass}>
                        <option value="">Immunizations Up to Date?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <div>
                      <label className="sr-only" htmlFor="backgroundCheckCompleted">Background Check Completed</label>
                      <select id="backgroundCheckCompleted" name="backgroundCheckCompleted" required value={form.backgroundCheckCompleted} onChange={update('backgroundCheckCompleted')} className={inputClass}>
                        <option value="">Background Check Completed? *</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="liabilityInsurance">Liability / Malpractice Insurance</label>
                      <select id="liabilityInsurance" name="liabilityInsurance" value={form.liabilityInsurance} onChange={update('liabilityInsurance')} className={inputClass}>
                        <option value="">Liability / Malpractice Insurance?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Through School">Through School</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Emergency Contact</p>
                  <div className="mb-3">
                    <label className="sr-only" htmlFor="emergencyName">Emergency Contact Name</label>
                    <input id="emergencyName" placeholder="Emergency Contact Name" name="emergencyName" value={form.emergencyName} onChange={update('emergencyName')} className={inputClass} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="sr-only" htmlFor="emergencyPhone">Emergency Contact Phone</label>
                      <input id="emergencyPhone" type="tel" placeholder="Emergency Contact Phone" name="emergencyPhone" value={form.emergencyPhone} onChange={update('emergencyPhone')} className={inputClass} />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="emergencyRelationship">Relationship</label>
                      <input id="emergencyRelationship" placeholder="Relationship to You" name="emergencyRelationship" value={form.emergencyRelationship} onChange={update('emergencyRelationship')} className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block" htmlFor="notes">Additional Notes</label>
                  <textarea id="notes" name="notes" rows="3" placeholder="Any additional information, questions, or special requests..." value={form.notes} onChange={update('notes')} className={`${inputClass} resize-none`} />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                    {error}
                  </div>
                )}

                <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand to-brand-teal text-white text-sm font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all disabled:opacity-50">
                  {submitting ? 'Submitting...' : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-brand to-brand-teal">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Whether you're exploring our preceptorship program or need personalized mental health care, WellCrest Health is here to support you.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all">
            Book an Appointment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
