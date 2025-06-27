import { Sparkles, Brain, Shield, Zap, Database, Settings } from "lucide-react";

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
  impact: string;
  highlight: string;
}

const capabilities: Capability[] = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Universal Function Calling",
    description:
      "Revolutionary architecture that adds intelligent automation to any model type. Not limited to specific use cases.",
    impact: "Transform static analysis into dynamic action",
    highlight: "Game Changer",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Multi-Provider Intelligence",
    description:
      "Seamlessly work with OpenAI and Anthropic. Switch providers without changing your code architecture.",
    impact: "Future-proof your AI integrations",
    highlight: "Production Ready",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Zero Breaking Changes",
    description:
      "100% backward compatibility guaranteed. Upgrade confidently without touching existing implementations.",
    impact: "Safe adoption for production systems",
    highlight: "Production Safe",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimized",
    description:
      "Built for scale with intelligent caching, retry logic, and cost optimization. Handle millions of documents.",
    impact: "99.7% faster than manual processing",
    highlight: "High Performance",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Native MongoDB Integration",
    description:
      "Deep integration with Mongoose. Works with your existing schemas, queries, and database operations.",
    impact: "No infrastructure changes required",
    highlight: "Seamless",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Developer Experience",
    description:
      "TypeScript-first with intelligent autocomplete, comprehensive error handling, and extensive documentation.",
    impact: "Reduce development time by 80%",
    highlight: "DX Focused",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Revolutionary Capabilities
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light text-balance">
            Enterprise-grade AI infrastructure that scales with your ambitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group bg-slate-900/30 border-2 border-slate-800/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                  {capability.icon}
                </div>
                <span className="text-xs px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full border border-purple-500/30">
                  {capability.highlight}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {capability.title}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                {capability.description}
              </p>
              <div className="text-blue-400 font-semibold">
                {capability.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
