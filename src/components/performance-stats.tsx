interface StatProps {
  number: string;
  label: string;
  description: string;
}

const performanceStats: StatProps[] = [
  {
    number: "99.7%",
    label: "Faster Processing",
    description: "vs manual analysis",
  },
  {
    number: "38/min",
    label: "Document Throughput",
    description: "intelligent processing",
  },
  {
    number: "$0.0003",
    label: "Cost Per Document",
    description: "optimized pricing",
  },
  {
    number: "100%",
    label: "Backward Compatible",
    description: "zero breaking changes",
  },
];

export default function PerformanceStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {performanceStats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-6 bg-slate-900/30 rounded-xl border border-slate-800/50 hover:border-slate-700/50 transition-colors"
        >
          <div className="text-2xl md:text-3xl font-display font-bold text-blue-400 mb-2">
            {stat.number}
          </div>
          <div className="text-white font-semibold mb-1 text-sm md:text-base">
            {stat.label}
          </div>
          <div className="text-slate-400 text-xs md:text-sm">
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  );
}
