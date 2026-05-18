'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { AnalysisResult } from '@/lib/types';

type InputTab = 'resume-text' | 'linkedin-text' | 'resume-pdf' | 'linkedin-pdf';

const TABS: { id: InputTab; label: string; icon: string }[] = [
  { id: 'resume-text',   label: 'Paste Resume',       icon: '📄' },
  { id: 'linkedin-text', label: 'Paste LinkedIn',      icon: '🔗' },
  { id: 'resume-pdf',    label: 'Upload Resume PDF',   icon: '📎' },
  { id: 'linkedin-pdf',  label: 'Upload LinkedIn PDF', icon: '📥' },
];

const GOALS = [
  'AI Product / GTM Roles',
  'AI Ecosystem & Partnerships',
  'Independent Consultant / Solopreneur',
  'Stay in GTM, use AI to be 10x better',
  'Not sure yet — show me options',
];

const LOADING_MESSAGES = [
  'Reading your GTM journey...',
  'Mapping AI-era opportunities...',
  'Building your project ideas...',
  'Crafting your 30-day plan...',
  'Almost there...',
];

const TEXT_PLACEHOLDERS: Record<InputTab, string> = {
  'resume-text':   'Paste your full resume here — work experience, skills, education, achievements...',
  'linkedin-text': 'Copy your LinkedIn "About" section and all "Experience" entries and paste here...',
  'resume-pdf':    '',
  'linkedin-pdf':  '',
};

export default function InputForm() {
  const router = useRouter();
  const [activeTab, setActiveTab]     = useState<InputTab>('resume-text');
  const [textContent, setTextContent] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [goal, setGoal]               = useState('');
  const [loading, setLoading]         = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [error, setError]             = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isPdf = activeTab === 'resume-pdf' || activeTab === 'linkedin-pdf';

  const cycleMessages = () => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % LOADING_MESSAGES.length;
      setLoadingMessage(LOADING_MESSAGES[i]);
    }, 2500);
    return interval;
  };

  const handleSubmit = async () => {
    if (!goal)                              { setError('Please select a career goal.'); return; }
    if (isPdf && !selectedFile)             { setError('Please upload a PDF file.'); return; }
    if (!isPdf && textContent.trim().length < 50) { setError('Please paste more content — at least a paragraph.'); return; }

    setError('');
    setLoading(true);
    setLoadingMessage(LOADING_MESSAGES[0]);
    const interval = cycleMessages();

    try {
      const formData = new FormData();
      formData.append('goal', goal);
      formData.append('inputType', isPdf ? 'pdf' : 'text');

      if (isPdf && selectedFile) {
        formData.append('file', selectedFile);
      } else {
        formData.append('content', textContent);
      }

      const res = await fetch('/api/analyze', { method: 'POST', body: formData });

      if (!res.ok) {
        let errorMsg = 'Something went wrong. Please try again.';
        if (res.status === 504 || res.status === 408) {
          errorMsg = 'Analysis is taking too long — gpt-4o is busy. Please try again in a moment.';
        } else {
          try {
            const errData = await res.json();
            errorMsg = errData.error || errorMsg;
          } catch {
            // non-JSON error body (e.g. Vercel HTML error page)
          }
        }
        throw new Error(errorMsg);
      }

      const data = await res.json();

      localStorage.setItem('careeros_result', JSON.stringify(data as AnalysisResult));
      router.push('/results');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setError(''); setSelectedFile(null); }}
            className={`flex-1 min-w-fit px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-white text-indigo-600 border-b-2 border-indigo-600'
                : 'text-slate-500 hover:text-slate-700 hover:bg-white/60'
            }`}
          >
            <span className="mr-1.5">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6 space-y-5">
        {/* Text input */}
        {!isPdf && (
          <textarea
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
            placeholder={TEXT_PLACEHOLDERS[activeTab]}
            rows={10}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 resize-none transition"
          />
        )}

        {/* PDF upload */}
        {isPdf && (
          <div
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
              selectedFile
                ? 'border-indigo-400 bg-indigo-50'
                : 'border-slate-300 hover:border-slate-400 bg-slate-50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setSelectedFile(file);
                setError('');
              }}
            />
            {selectedFile ? (
              <div className="space-y-2">
                <div className="text-3xl">✅</div>
                <p className="text-indigo-700 font-medium">{selectedFile.name}</p>
                <p className="text-slate-400 text-xs">Click to change file</p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-3xl">📎</div>
                <p className="text-slate-700 font-medium">
                  {activeTab === 'linkedin-pdf' ? 'Upload your LinkedIn Profile PDF' : 'Upload your Resume PDF'}
                </p>
                <p className="text-slate-400 text-sm">
                  {activeTab === 'linkedin-pdf' ? 'Go to LinkedIn → Me → Save to PDF' : 'Drag & drop or click to browse'}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Goal selector */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What do you want to move into?
          </label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 appearance-none transition"
          >
            <option value="" disabled>Select your goal...</option>
            {GOALS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors text-sm shadow-sm"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {loadingMessage}
            </span>
          ) : (
            'Analyze My Profile →'
          )}
        </button>
      </div>
    </div>
  );
}
