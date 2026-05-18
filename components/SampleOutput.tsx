import { MOCK_RESULT } from '@/lib/mock-result';
import ScoreCard from './ScoreCard';
import ProjectIdeas from './ProjectIdeas';
import JobTitles from './JobTitles';
import LearningPlan from './LearningPlan';

export default function SampleOutput() {
  return (
    <section id="sample" className="max-w-6xl mx-auto px-6 py-20">
      {/* Section header */}
      <div className="text-center mb-14">
        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">Sample report</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Here&rsquo;s what your report looks like
        </h2>
        <p className="text-slate-400 text-base max-w-xl mx-auto">
          This is a real example output for a fictional GTM professional — 7 years in B2B SaaS sales across BFSI and IT/ITeS.
          Your report will be tailored to your specific background and goal.
        </p>
      </div>

      {/* Sample badge + profile */}
      <div className="relative">
        {/* Floating badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-950/60 border border-amber-700/40 rounded-full px-4 py-1.5 text-xs font-medium text-amber-300">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Sample report — not a real person
          </div>
        </div>

        {/* Profile context bar */}
        <div className="bg-slate-900/60 border border-slate-700/40 rounded-xl px-6 py-4 mb-6 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">PS</div>
            <div>
              <p className="font-medium text-white">Priya Sharma <span className="text-slate-500 font-normal">· Sample profile</span></p>
              <p className="text-slate-500 text-xs">Sr. Partner Manager · 7 yrs B2B SaaS · Mumbai</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 ml-auto bg-indigo-950/60 border border-indigo-700/30 rounded-lg px-3 py-1.5">
            <span className="text-xs text-slate-400">Goal:</span>
            <span className="text-xs font-medium text-indigo-300">AI Ecosystem &amp; Partnerships</span>
          </div>
        </div>

        {/* Full report output */}
        <div className="space-y-10">
          <ScoreCard score={MOCK_RESULT.score} />
          <ProjectIdeas projects={MOCK_RESULT.projects} />
          <JobTitles jobTitles={MOCK_RESULT.jobTitles} />
          <LearningPlan learningPlan={MOCK_RESULT.learningPlan} />
        </div>
      </div>

      {/* CTA below sample */}
      <div className="mt-14 text-center">
        <p className="text-slate-400 text-sm mb-5">Ready to see yours?</p>
        <a
          href="#analyze"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-sm"
        >
          Analyze my profile →
        </a>
      </div>
    </section>
  );
}
