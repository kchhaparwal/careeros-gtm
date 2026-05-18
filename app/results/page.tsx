'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AnalysisResult } from '@/lib/types';
import ScoreCard from '@/components/ScoreCard';
import ProjectIdeas from '@/components/ProjectIdeas';
import JobTitles from '@/components/JobTitles';
import LearningPlan from '@/components/LearningPlan';

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('careeros_result');
    if (!stored) { router.push('/'); return; }
    try {
      setResult(JSON.parse(stored));
    } catch {
      router.push('/');
    }
  }, [router]);

  if (!result) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-400">
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading your results...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-semibold text-slate-900 text-sm">
              CareerOS <span className="text-indigo-600">for GTM</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Analyze another profile
          </Link>
        </div>
      </div>

      {/* Page header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 text-xs font-medium text-green-700 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Analysis complete
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Your CareerOS Report</h1>
              <p className="text-slate-500 text-sm">
                Personalised roadmap based on your GTM background and career goal.
              </p>
            </div>
            <div className="hidden md:flex flex-col items-end">
              <div className="text-4xl font-bold text-slate-900">
                {result.score.total}
                <span className="text-lg text-slate-400 font-normal">/100</span>
              </div>
              <div className="text-xs text-indigo-600 font-semibold mt-0.5">AI Readiness Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Report */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-14">
        <ScoreCard score={result.score} />
        <ProjectIdeas projects={result.projects} />
        <JobTitles jobTitles={result.jobTitles} />
        <LearningPlan learningPlan={result.learningPlan} />

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-10 text-center text-white shadow-lg shadow-indigo-200">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-5">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
          <p className="text-indigo-100 text-sm mb-8 max-w-md mx-auto">
            Pick your first vibe coding project from above and ship it this weekend. The score goes up when you build.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Analyze another profile
            </Link>
            <button
              onClick={() => {
                const text = `I just analyzed my GTM profile on CareerOS and got an AI Readiness Score of ${result.score.total}/100.\n\n"${result.score.verdict}"\n\nBuilt for Indian GTM professionals navigating the AI shift 👇`;
                navigator.clipboard.writeText(text);
              }}
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm border border-white/30"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.255 2.25H8.08l4.264 5.633 5.9-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Share on X
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-4">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center">
          <p className="text-slate-400 text-xs">CareerOS for GTM · Powered by GPT-4o · Free to use</p>
        </div>
      </footer>
    </div>
  );
}
