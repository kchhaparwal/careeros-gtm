import { Project } from '@/lib/types';

interface Props {
  projects: Project[];
}

const ACCENT_TOPS = [
  'from-violet-500 to-indigo-500',
  'from-indigo-500 to-cyan-500',
  'from-purple-500 to-pink-500',
];

export default function ProjectIdeas({ projects }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">Vibe Coding Projects</h2>
      <p className="text-slate-500 text-sm mb-6">
        3 projects tailored to your background — build them to signal AI fluency.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col shadow-sm"
          >
            <div className={`h-1 bg-gradient-to-r ${ACCENT_TOPS[i % 3]}`} />
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-bold text-slate-900 text-base leading-tight">{project.title}</h3>
                <span className="shrink-0 text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full border border-slate-200">
                  {project.buildTime}
                </span>
              </div>

              <p className="text-slate-600 text-sm mb-3 leading-relaxed">{project.description}</p>

              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 mb-4">
                <p className="text-xs text-indigo-700 font-medium mb-1">Why this fits you</p>
                <p className="text-xs text-slate-500 leading-relaxed">{project.relevance}</p>
              </div>

              <div className="mt-auto space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                  <svg className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="text-xs text-slate-400">{project.targetPersona}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
