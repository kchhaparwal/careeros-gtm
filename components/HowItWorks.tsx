const STEPS = [
  {
    number: '01',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Paste your profile',
    description: 'Drop in your resume text, copy your LinkedIn About + Experience, or upload a PDF. Any format works.',
  },
  {
    number: '02',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Select your goal',
    description: 'Tell us where you want to go — AI product roles, partnerships, independent consulting, or staying in GTM with AI superpowers.',
  },
  {
    number: '03',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Get your roadmap',
    description: 'Receive your AI-readiness score, 3 tailored build projects, the exact job titles to target, and a 30-day action plan.',
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">How it works</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          From profile to roadmap in minutes
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-8 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {STEPS.map((step) => (
          <div key={step.number} className="relative flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                {step.icon}
              </div>
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                {step.number.slice(1)}
              </span>
            </div>
            <h3 className="font-semibold text-slate-900 text-lg mb-2">{step.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
