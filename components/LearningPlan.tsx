import { WeekPlan } from '@/lib/types';

interface Props {
  learningPlan: WeekPlan[];
}

const WEEK_STYLES = [
  { border: 'border-violet-200', dot: 'bg-violet-500', badge: 'bg-violet-50 text-violet-700 border-violet-200' },
  { border: 'border-indigo-200', dot: 'bg-indigo-500', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { border: 'border-cyan-200',   dot: 'bg-cyan-500',   badge: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  { border: 'border-purple-200', dot: 'bg-purple-500', badge: 'bg-purple-50 text-purple-700 border-purple-200' },
];

export default function LearningPlan({ learningPlan }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">30-Day Learning Plan</h2>
      <p className="text-slate-500 text-sm mb-6">
        Sequenced by dependency — complete each week before moving to the next.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {learningPlan.map((week, i) => {
          const s = WEEK_STYLES[i % WEEK_STYLES.length];
          return (
            <div key={week.week} className={`bg-white border ${s.border} rounded-xl p-5 shadow-sm`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold px-2 py-0.5 rounded border ${s.badge}`}>
                  Week {week.week}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-4 leading-snug">{week.theme}</h3>
              <ul className="space-y-2.5">
                {week.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${s.dot} mt-1.5 shrink-0`} />
                    <span className="text-xs text-slate-500 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
