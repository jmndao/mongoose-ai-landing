"use client";

import { useState } from "react";

interface CodeExample {
  title: string;
  description: string;
  code: string;
  highlight: string;
}

const codeExamples: CodeExample[] = [
  {
    title: "Intelligent Summarization",
    description: "Transform documents into actionable insights automatically",
    code: `// Transform any document into intelligent insights
const documentSchema = new mongoose.Schema({
  title: String,
  content: String,
  metadata: Object
});

documentSchema.plugin(aiPlugin, {
  ai: {
    model: "summary",
    provider: "openai",
    field: "insights",
    credentials: { apiKey: process.env.OPENAI_API_KEY }
  }
});

await document.save();
// Intelligent summary generated automatically
console.log(document.insights.summary);`,
    highlight: "Auto-processing on save",
  },
  {
    title: "Semantic Intelligence",
    description: "Search by meaning, not just keywords - understand context",
    code: `// Search by meaning, not just text matching
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  specifications: Object
});

productSchema.plugin(aiPlugin, {
  ai: {
    model: "embedding",
    provider: "openai",
    field: "semanticIndex"
  }
});

// Natural language queries
const results = await Product.semanticSearch(
  "durable outdoor equipment for harsh weather",
  { threshold: 0.8 }
);
// Finds relevant products by understanding intent`,
    highlight: "Intent-based discovery",
  },
  {
    title: "Universal Automation",
    description: "AI that takes action - not just analysis",
    code: `// AI that acts, not just analyzes
const businessSchema = new mongoose.Schema({
  name: String,
  industry: String,
  priority: String,
  tags: [String],
  riskScore: Number
});

businessSchema.plugin(aiPlugin, {
  ai: {
    model: "summary", // Works with ANY model
    provider: "openai",
    field: "analysis",
    advanced: { enableFunctions: true },
    functions: [
      QuickFunctions.updateField("priority", ["low", "high", "critical"]),
      QuickFunctions.scoreField("riskScore", 0, 100),
      QuickFunctions.manageTags("industry")
    ]
  }
});

// AI automatically analyzes AND takes action
await business.save();
console.log(business.priority);   // "critical" (AI decided)
console.log(business.riskScore);  // 87 (AI calculated)`,
    highlight: "Intelligent automation",
  },
];

export default function CodeExamples() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="examples" className="py-24 px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-crisp">
            See Intelligence in Action
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light text-balance text-crisp">
            From passive analysis to intelligent automation—witness the
            transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-4">
            {codeExamples.map((example, index) => (
              <div
                key={index}
                className={`group p-6 lg:p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/10 border-2 border-blue-500/30 shadow-xl shadow-blue-500/10 scale-[1.02]"
                    : "bg-slate-800/30 border-2 border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/50 hover:scale-[1.01]"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-white leading-tight text-crisp flex-1">
                      {example.title}
                    </h3>
                    <div className="flex-shrink-0">
                      <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs lg:text-sm font-medium rounded-full border border-purple-500/30 whitespace-nowrap">
                        {example.highlight}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed text-crisp">
                    {example.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="bg-slate-950/80 border-2 border-slate-800/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-400 font-mono text-sm">
                    {codeExamples[activeTab].title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}
                    .js
                  </span>
                </div>
              </div>
              <pre className="p-6 md:p-8 text-sm md:text-base overflow-x-auto bg-slate-950/50">
                <code className="text-slate-200 font-mono whitespace-pre-wrap leading-relaxed text-crisp">
                  {codeExamples[activeTab].code}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
