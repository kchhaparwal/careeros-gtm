export interface SubScore {
  name: string;
  score: number;
  note: string;
}

export interface Score {
  total: number;
  verdict: string;
  subScores: SubScore[];
}

export interface Project {
  title: string;
  description: string;
  relevance: string;
  techStack: string[];
  buildTime: string;
  targetPersona: string;
}

export interface WeekPlan {
  week: number;
  theme: string;
  items: string[];
}

export interface AnalysisResult {
  score: Score;
  projects: Project[];
  jobTitles: string[];
  learningPlan: WeekPlan[];
}
