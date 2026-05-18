import { AnalysisResult } from './types';

export const MOCK_RESULT: AnalysisResult = {
  score: {
    total: 67,
    verdict:
      'Strong GTM instincts with a real grasp of the enterprise sales motion — the gap is technical fluency, and it\'s closeable in 60 days.',
    subScores: [
      {
        name: 'Domain Depth',
        score: 88,
        note: '7 years of B2B SaaS sales across BFSI and IT/ITeS verticals is a genuine differentiator.',
      },
      {
        name: 'Tech Proximity',
        score: 58,
        note: 'Works closely with SEs and product teams, but limited hands-on involvement in technical evaluations.',
      },
      {
        name: 'AI Exposure',
        score: 55,
        note: 'Uses AI tools in daily workflow (ChatGPT, Notion AI) but hasn\'t built or shipped anything AI-native yet.',
      },
    ],
  },
  projects: [
    {
      title: 'Enterprise RFP Response Generator',
      description:
        'A GPT-4o powered tool that drafts RFP responses for B2B SaaS vendors, pre-filled with company-specific positioning.',
      relevance:
        'Directly leverages your BFSI sales background — you understand exactly what procurement teams ask for, which makes your prompts far more accurate than a generic tool.',
      techStack: ['OpenAI API', 'Next.js', 'Vercel'],
      buildTime: '6–8 hours',
      targetPersona:
        'VP of Sales Enablement at a mid-market SaaS company selling into Indian banking',
    },
    {
      title: 'Partner Deal Intel Dashboard',
      description:
        'Aggregates partner pipeline data and surfaces AI-generated deal risk flags and next-best-action recommendations.',
      relevance:
        'Built directly on your partnerships experience — you know the metrics that matter and the conversations that stall deals.',
      techStack: ['OpenAI API', 'Airtable', 'Retool'],
      buildTime: '8–10 hours',
      targetPersona: 'Head of Partnerships at a Series B AI-native startup',
    },
    {
      title: 'India GTM Objection Handler',
      description:
        'A coaching tool that takes a sales objection specific to Indian enterprise deals and returns a structured response with proof points.',
      relevance:
        'Your experience with PSU procurement, local vendor pressure, and data residency objections makes this uniquely credible — you can train it on real scenarios.',
      techStack: ['OpenAI API', 'React', 'Vercel'],
      buildTime: '4–5 hours',
      targetPersona:
        'Sales Leader at a global SaaS company expanding into India',
    },
  ],
  jobTitles: [
    'AI Ecosystem Partnerships Manager',
    'Revenue Enablement Lead — AI Tools',
    'GTM Strategy Manager, AI Products',
    'Alliance Manager — Enterprise AI',
    'AI Solutions Consultant (Pre-Sales)',
    'Head of Partnerships, AI-Native SaaS',
    'Commercial Lead — India Market (AI Startup)',
    'Partner Success Manager, LLM Platforms',
  ],
  learningPlan: [
    {
      week: 1,
      theme: 'Build your AI foundations',
      items: [
        "Complete 'AI for Everyone' by Andrew Ng on Coursera (free, 6 hours)",
        "Read 'The AI-First Company' by Ash Fontana — focus on GTM chapters",
        'Set up a free OpenAI account and run 10 prompt experiments relevant to your sales context',
        "Join the 'AI in Sales' LinkedIn community and follow 5 AI GTM leaders",
      ],
    },
    {
      week: 2,
      theme: 'Ship your first AI project',
      items: [
        "Watch 'Next.js in 100 Seconds' and complete the official Next.js tutorial",
        'Clone a Vercel starter template and deploy it live in under 30 minutes',
        'Build v1 of your Enterprise RFP Generator using the OpenAI API',
        'Share your project on LinkedIn with a short screen-recorded demo',
      ],
    },
    {
      week: 3,
      theme: 'Map the AI ecosystem in your vertical',
      items: [
        'Research the top 10 AI tools being adopted in BFSI and IT/ITeS in India',
        'Book 3 informational calls with people already in AI GTM roles via LinkedIn',
        'Attend one nasscom AI event or equivalent virtual webinar (most are free)',
        'Build an AI vendor landscape map for your vertical as a shareable LinkedIn asset',
      ],
    },
    {
      week: 4,
      theme: 'Position yourself and start applying',
      items: [
        'Rewrite your LinkedIn headline to reflect your AI transition intent explicitly',
        'Post about your AI project build with key learnings — target 500+ impressions',
        'Apply to 5 AI-adjacent roles using the exact job titles from your CareerOS report',
        "Set up LinkedIn job alerts for 'AI partnerships', 'AI GTM', and 'AI alliances'",
      ],
    },
  ],
};
