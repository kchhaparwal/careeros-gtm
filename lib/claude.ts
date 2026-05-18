import OpenAI from 'openai';
import { AnalysisResult } from './types';

const client = new OpenAI();

const SYSTEM_PROMPT = `You are a senior career strategist specializing in helping Indian GTM, Sales, and Partnerships professionals transition into AI-era roles. You have deep knowledge of the Indian enterprise SaaS market (Zoho, Freshworks, Salesforce India, SAP India), global AI tool landscape, and what hiring managers at AI companies in India and globally look for. You return structured, specific, actionable advice — never generic. Always return valid JSON only, no markdown, no preamble, no explanation.`;

export async function analyzeProfile(content: string, goal: string): Promise<AnalysisResult> {
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    max_tokens: 4096,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      {
        role: 'user',
        content: `Analyze this professional profile and generate a career roadmap for an Indian GTM professional moving into AI-era roles.

PROFILE:
${content}

CAREER GOAL: ${goal}

Return ONLY a valid JSON object — no markdown fences, no explanation, just the JSON:
{
  "score": {
    "total": <integer 0-100>,
    "verdict": "<one punchy, honest sentence about their AI readiness — specific to their background>",
    "subScores": [
      {"name": "Domain Depth", "score": <0-100>, "note": "<1 sentence on their GTM/sales domain expertise depth>"},
      {"name": "Tech Proximity", "score": <0-100>, "note": "<1 sentence on how closely they work with product/engineering teams>"},
      {"name": "AI Exposure", "score": <0-100>, "note": "<1 sentence on current AI tool usage or awareness in their work>"}
    ]
  },
  "projects": [
    {
      "title": "<specific project name — not generic>",
      "description": "<what it does in 1 sentence>",
      "relevance": "<why this fits their specific background — reference their industry, vertical, or role type explicitly>",
      "techStack": ["<tool1>", "<tool2>", "<tool3>"],
      "buildTime": "<e.g. 4-6 hours>",
      "targetPersona": "<specific person who would be impressed, e.g. VP of Sales Enablement at an AI-native B2B SaaS company>"
    },
    { "title": "...", "description": "...", "relevance": "...", "techStack": [], "buildTime": "...", "targetPersona": "..." },
    { "title": "...", "description": "...", "relevance": "...", "techStack": [], "buildTime": "...", "targetPersona": "..." }
  ],
  "jobTitles": ["<8 specific, real job titles that exist in India/global AI market — avoid vague categories, use actual posting titles>"],
  "learningPlan": [
    {"week": 1, "theme": "<week 1 theme>", "items": ["<specific named resource or action, e.g. Complete 'AI for Everyone' by Andrew Ng on Coursera>", "<specific action>", "<specific action>", "<specific action>"]},
    {"week": 2, "theme": "<week 2 theme>", "items": ["<specific>", "<specific>", "<specific>", "<specific>"]},
    {"week": 3, "theme": "<week 3 theme>", "items": ["<specific>", "<specific>", "<specific>", "<specific>"]},
    {"week": 4, "theme": "<week 4 theme>", "items": ["<specific>", "<specific>", "<specific>", "<specific>"]}
  ]
}`,
      },
    ],
  });

  const raw = response.choices[0]?.message?.content?.trim() ?? '';

  try {
    return JSON.parse(raw) as AnalysisResult;
  } catch {
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]) as AnalysisResult;
    }
    throw new Error('Failed to parse OpenAI response as JSON');
  }
}
