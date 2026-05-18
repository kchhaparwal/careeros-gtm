import Nav from '@/components/Nav';
import HowItWorks from '@/components/HowItWorks';
import InputForm from '@/components/InputForm';

const FEATURES = [
  { icon: '◎', label: 'AI-readiness score' },
  { icon: '⬡', label: '3 vibe coding projects' },
  { icon: '◈', label: '8 job titles to target' },
  { icon: '◻', label: '30-day learning plan' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[300px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 text-xs font-medium text-indigo-700 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Built for Indian GTM &amp; Sales professionals
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-slate-900">
              Know exactly where
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                your GTM career
              </span>
              <br />
              goes next.
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              Paste your resume or LinkedIn profile. Get a personalised AI-readiness score,
              tailored project ideas to build, the right job titles to target, and a
              30&#8209;day plan — all specific to your GTM background.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {FEATURES.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-xs font-medium text-slate-600 shadow-sm"
                >
                  <span className="text-indigo-500 text-base leading-none">{f.icon}</span>
                  {f.label}
                </div>
              ))}
            </div>

            <a
              href="#analyze"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base shadow-md shadow-indigo-200"
            >
              Analyze my profile free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* Analyze form */}
      <section id="analyze" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Get your report</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Analyze your profile
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto">
            Free, instant, and specific to you. No signup required.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <InputForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-4">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-semibold text-slate-800 text-sm">
              CareerOS <span className="text-indigo-600">for GTM</span>
            </span>
          </div>
          <p className="text-slate-400 text-xs">
            Powered by GPT-4o · Built for Indian GTM professionals · Free to use
          </p>
          <p className="text-slate-400 text-xs">© 2025 CareerOS for GTM</p>
        </div>
      </footer>
    </div>
  );
}
