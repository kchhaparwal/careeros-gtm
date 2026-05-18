'use client';

import { Score } from '@/lib/types';

interface Props {
  score: Score;
}

function ScoreRing({ total }: { total: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - total / 100);
  const color = total >= 70 ? '#22c55e' : total >= 45 ? '#f59e0b' : '#ef4444';

  return (
    <div className="relative flex items-center justify-center w-36 h-36">
      <svg width="144" height="144" className="-rotate-90">
        <circle cx="72" cy="72" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="10" />
        <circle
          cx="72" cy="72" r={radius} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-bold text-slate-900">{total}</span>
        <span className="text-xs text-slate-400 mt-0.5">/ 100</span>
      </div>
    </div>
  );
}

export default function ScoreCard({ score }: Props) {
  const handleCopy = () => {
    const text = `My AI-Readiness Score on CareerOS for GTM: ${score.total}/100\n\n"${score.verdict}"\n\nDomain Depth: ${score.subScores[0]?.score}/100\nTech Proximity: ${score.subScores[1]?.score}/100\nAI Exposure: ${score.subScores[2]?.score}/100\n\nAnalyzed by CareerOS for GTM`;
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col items-center gap-3 shrink-0">
          <ScoreRing total={score.total} />
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">
            AI Readiness
          </span>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-base text-slate-700 italic leading-relaxed border-l-2 border-indigo-300 pl-4">
            &ldquo;{score.verdict}&rdquo;
          </p>

          <div className="space-y-3">
            {score.subScores.map((sub) => (
              <div key={sub.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-slate-700">{sub.name}</span>
                  <span className="text-sm font-bold text-indigo-600">{sub.score}</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    style={{ width: `${sub.score}%`, transition: 'width 1s ease' }}
                  />
                </div>
                <p className="text-xs text-slate-400 mt-1">{sub.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-100 flex justify-end">
        <button
          onClick={handleCopy}
          className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy for LinkedIn
        </button>
      </div>
    </div>
  );
}
