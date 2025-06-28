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
    title: "Auto-Summarization",
    description:
      "Automatically generate intelligent summaries when documents are saved. Works with any text content in your schemas.",
    impact: "Eliminate manual content analysis",
    highlight: "Core Feature",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Function Calling",
    description:
      "AI automatically fills fields, classifies content, scores documents, and manages tags based on your business logic.",
    impact: "Automated document classification",
    highlight: "Smart Actions",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Semantic Search",
    description:
      "Search documents by meaning with vector embeddings. Includes MongoDB Atlas Vector Search support for production scale.",
    impact: "10-3000x faster than traditional search",
    highlight: "Vector Powered",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Multi-Provider Support",
    description:
      "Switch between OpenAI, Anthropic, and local Ollama models. Same API, different capabilities and cost structures.",
    impact: "Flexibility and cost optimization",
    highlight: "Provider Choice",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Production Ready",
    description:
      "Built-in retry logic, error handling, rate limiting, and cost estimation. Scales from development to enterprise.",
    impact: "Ready for production workloads",
    highlight: "Enterprise Grade",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "TypeScript Native",
    description:
      "Full TypeScript support with intelligent autocomplete, type safety, and comprehensive error handling.",
    impact: "Superior developer experience",
    highlight: "Type Safe",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Core Capabilities
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light text-balance">
            Everything you need to add intelligent document processing to your
            MongoDB applications
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
