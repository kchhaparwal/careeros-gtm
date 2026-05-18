interface Props {
  jobTitles: string[];
}

export default function JobTitles({ jobTitles }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">Roles to Target</h2>
      <p className="text-slate-500 text-sm mb-6">
        Real job titles actively hired in India and globally — search these on LinkedIn.
      </p>
      <div className="flex flex-wrap gap-3">
        {jobTitles.map((title, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 rounded-xl px-4 py-3 transition-colors cursor-default shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shrink-0" />
            <span className="text-sm text-slate-700 font-medium">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
